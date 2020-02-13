import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

//starter data
const todo = [
  {
    name: "Make a to-do list",
    id: 1,
    completed: false
  },
  {
    name: "Pay bills",
    id: 2,
    completed: false
  },
  {
    name: "Cry in the shower",
    id: 3,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo
    };
  }

  //method to add new item
  addItem = (event, item) => {
    event.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newItem]
    });
  }

  //method to toggle if item is completed
  toggleItem = itemID => {
    this.setState({
      todo: this.state.todo.map(item => {
        if (itemID === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    })
  }

  //method to clear completed items from list
  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => item.completed === false)
    })
  }


  render() {
    return (
      <div>
        <h2>My Digital Bullet Journal</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
