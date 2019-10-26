import React from 'react';
import './App.css';
import './icons.css';
import Card from './Card/Card'
import AddCard from './AddCard/AddCard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {title: 'Title One', desc: 'This is a sample description.', pendingStatus: true},
        {title: 'Title Two', desc: 'This is a sample description.', pendingStatus: true}
      ]
    }
  }

  removeCardHandler = index => {
    let list = this.state.cards;
    list.splice(index, 1);

    this.setState({
      cards: list
    })
  }

  addCardHandler = () => {
    let list = this.state.cards;
    this.setState({
      cards: [ {title: 'New Title', desc: 'This is a sample description.', pendingStatus: true}, ...list ]
    })
  }

  statusHandler = index => {
    let list = this.state.cards;
    let newStatus = !this.state.cards[index].pendingStatus;
    list[index].pendingStatus = newStatus;
    this.setState({
      cards: list
    })
  }

  editHandler = index => {
    let list = this.state.cards;
    console.log(index)
    list[index].title = document.querySelectorAll('.i-task')[index].value;
    list[index].desc = document.querySelectorAll('.i-desc')[index].value;
    console.log(list)
    this.setState({
      cards: list
    })
  }

  render() {
    return (
      <div className="App">
        <div className='black'></div>
        <div className="head-box">
          <div className="container">
            <p className="headline">To-Do App</p>
          </div>
        </div>
        <div className="card-list">
          <AddCard click={this.addCardHandler} />
          {this.state.cards.map((card, index) => {
            return <Card 
                      title={card.title} 
                      desc={card.desc}
                      status={card.pendingStatus}
                      key={Math.floor(Math.random() * 1000 + Math.random() * 100 + Math.random() * 10)}
                      index={index}
                      statusChange={this.statusHandler.bind(this, index)}
                      delete={this.removeCardHandler.bind(this, index)}
                      edit={this.editHandler.bind(this, index)} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
