import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

const tasks = [
  {
    task: "Workout",
    id: 1,
    completed: false
  },
  {
    task: "Fix dinner",
    id: 2,
    completed: false
  },
  {
    task: "Look over Training Kit",
    id: 3,
    completed: false
  },
  {
    task: "Attend Lecture",
    id: 4,
    completed: false
  },
  {
    task: "Begin Project",
    id: 5,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props);
    this.state= {
      tasks
    };
  }

  toggleItem = itemId => {
    console.log("itemId: ", itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  addItem = (event, item) => {
    event.preventDefault();
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList 
          tasks={this.state.tasks} 
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
