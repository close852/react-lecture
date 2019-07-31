import React, { Component } from 'react';
import { List } from 'immutable'
import Todo from './Todo'
class TodoList extends Component {
    state = {
        todos: List()
    };

    handleClick = () => {
            let {todos} = this.state;
            const position = todos.size+1;
            const newTodo = <Todo key={position} title={`할 일 ${position}`}/>
            this.setState({
                todos : todos.push(newTodo)
            })
    }
    render() {
        const {todos} = this.state;
        const {handleClick} = this;
        return (
            <div>
                <button onClick={handleClick}>할 일 추가</button>
                {todos}
            </div>
        );
    }
}

export default TodoList;