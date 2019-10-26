import React from 'react';
import './AddCard.css'

class AddCard extends React.Component {
    render() {
        const style = {
            visibility: 'hidden'
        }

        return (
            <div className="add-card" onClick={this.props.click}>
                <i className="fas fa-plus"></i>
                <p>Add New Task</p>
                <i className="fas fa-plus" style={style}></i>
            </div>
        )
    }
}

export default AddCard;