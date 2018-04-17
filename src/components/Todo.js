import React, { Component } from 'react';

class Todo extends Component {
  handleClick(e) {
    if (e.keyCode === 13) {
      const node = e.target;
      const text = node.value && node.value.trim();
      text && this.props.onClick(text);
      node.value = '';
    }
  }

  render() {
    const { todos, onTodoClick, onRemoveTodoClick } = this.props;
    return (
      <section className="todoapp">
        <div className="main">
          <header className="header">
            <h1>todos</h1>
            <input
              className="new-todo"
              type="text"
              onKeyUp={e => this.handleClick(e)}
              placeholder="input todo item"
              ref='input' />
          </header>
        </div>
      </section>
    )
  }
}
export default Todo;