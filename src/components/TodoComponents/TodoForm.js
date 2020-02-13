import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitItem = event => {
        event.preventDefault();
        this.props.addItem(event, this.state.item);
        this.setState({ item: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input type="text" name="item" onChange={this.handleChanges} value={this.state.item}/>
                <button>Add Todo</button>
            </form>
        );
    }
}

export default TodoForm;