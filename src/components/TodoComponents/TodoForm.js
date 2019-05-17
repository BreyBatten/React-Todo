import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
    }

    handleChange = event => {
        this.setState({ item: event.target.value });
    };

    submitItem = event => {
        event.preventDefault();
        this.setState({ item: "" });
        this.props.addItem(event, this.state.item);
    }

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text" 
                    value={this.state.item}
                    name="item"
                    placeholder="...todo"
                    onChange={this.handleChange}
                />
                <button>Add Todo</button>
            </form>
        )
    }    
}

export default TodoForm;