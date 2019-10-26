import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            edit: false
        }
    }

    toggleDescHandler = () => {
        let dropdownState = !this.state.dropdown;
        // if (dropdownState) {

        // }
        this.setState({
            dropdown: dropdownState
        })
    }

    editHandler = () => {
        // let currentState = this.state.edit;
        document.querySelectorAll('.fa-circle')[this.props.index].style.display = 'none';
        document.querySelectorAll('.fa-chevron-circle-up')[this.props.index].style.display = 'none';
        document.querySelectorAll('.card')[this.props.index].style.zIndex = '10';
        document.querySelectorAll('.card')[this.props.index].style.transform = 'scale(1.02)';
        document.querySelectorAll('.card')[this.props.index].style.boxShadow = '4px 4px 15px rgba(255, 255, 255, 0.8)';
        document.querySelector('.black').style.display = 'flex';
        this.setState({
            edit: true
        })
        // document.querySelectorAll('.fa-pen')[this.props.index].style.opacity = (currentState) ? '0.5' : '1';
    }

    closeEditHandler = () => {
        document.querySelectorAll('.fa-circle')[this.props.index].style.display = '';
        document.querySelectorAll('.fa-chevron-circle-up')[this.props.index].style.display = '';
        document.querySelectorAll('.card')[this.props.index].style.zIndex = '';
        document.querySelector('.black').style.display = 'none';
        this.setState({
            edit: false
        })
    }
    
    render() {
        let description = null;
        let descText = (
            <p className="desc">
                {this.props.desc}
            </p>
        );
        let dropIcon = <i className="fas fa-chevron-circle-down"></i>;
        let circle = <i className="far fa-circle"></i>;
        let buttonStyle = { display: '' };
        let cardStyle = {
            backgroundColor: '#8EC5FC',
            backgroundImage: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'
        }
        let title = <p className="task">{this.props.title}</p>;
        let functions = (
            <div className="side-buttons">
                <i className="fas fa-pen" style={buttonStyle} onClick={this.editHandler}></i>
                <i className="fas fa-trash" onClick={this.props.delete}></i>
            </div>
        )
        // <input className="task edit" value={this.props.title} />
        
        if (this.state.edit) {
            descText = <textarea rows="3" maxLength="200" className="desc edit i-desc" defaultValue={this.props.desc}></textarea>;
            title = <input className="task edit i-task" defaultValue={this.props.title} />;
            console.log(descText.value)
            functions = (
                <div className="side-buttons">
                    <i className="fas fa-check" onClick={this.closeEditHandler}></i>
                    <i className="fas fa-times" onClick={this.closeEditHandler}></i>
                </div>
            )
        }

        if (!this.props.status) {
            circle = <i className="fas fa-check-circle"></i>;
            cardStyle = {
                backgroundColor: '#85FFBD',
                backgroundImage: 'linear-gradient( 109.6deg,  rgba(170,255,169,1) 11.2%, rgba(17,255,189,1) 91.1% )'
            }
            buttonStyle = { display: 'none' }
        }

        if (this.state.dropdown) {
            dropIcon = <i className="fas fa-chevron-circle-up"></i>;
            
            description = (
                <div className="sub">
                    {descText}
                    {functions}
                </div>
            );
        }

        return (
            <div className="card" style={cardStyle}>
                <div className="head">
                    <div className="circle edit" onClick={this.toggleDescHandler}> 
                        {dropIcon}
                    </div>
                    <div>
                        {title}
                    </div>
                    <div className="circle check" onClick={this.props.statusChange}>
                        {circle}
                    </div>
                </div>
                {description}
            </div>
        );
    }
}

export default Card;