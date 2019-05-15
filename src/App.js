import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
// import Todo from './components/TodoComponents/Todo';
// import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {
    task: "Workout",
    id: Date.now(),
    completed: false
  },
  {
    task: "Fix dinner",
    id: Date.now(),
    completed: false
  },
  {
    task: "Look over Training Kit",
    id: Date.now(),
    completed: false
  },
  {
    task: "Attend Lecture",
    id: Date.now(),
    completed: false
  },
  {
    task: "Begin Project",
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state={tasks: tasks};
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
        {/* <TodoList tasks={this.state.tasks}/> */}
      </div>
    );
  }
}

export default App;
