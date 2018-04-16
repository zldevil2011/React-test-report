import React, { Component } from 'react';

class Todo extends Component {
  handleClick(e) {
    if (e.keyCode === 13) {
      const node = this.refs.input;
      const text = node.value.trim();
      console.log(node);
      console.log(text);
      // text && this.props.onAddClick(text);
      node.value = '';
    }
  }

  render() {
    const { params } = this.props;
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