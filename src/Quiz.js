import { Component } from "react";
import './Quiz.css';

class Quiz extends Component {

    constructor() {
        super();
        this.state = {taskArray: [], todo: 0, remain: 0, taskName: ""};
        this.doInputText = this.doInputText.bind(this);
        this.addTodoTask = this.addTodoTask.bind(this);
        this.taskList = this.taskList.bind(this);
        this.toogle = this.toogle.bind(this);
    }

    doInputText(event) {
        this.setState({ taskName: event.target.value });
    }

    addTodoTask() {
        this.setState({todo: this.state.todo+1, remain: this.state.remain+1});
        this.setState({ taskArray: [...this.state.taskArray, { id: this.state.remain+1, name: this.state.taskName} ] });
        this.setState({ taskName: '' });
    }

    toogle(event) {
        const oldCss= document.getElementById(event.target.id).className;
        if (oldCss === 'is-done') {
            document.getElementById(event.target.id).className = '';
            const todo = this.state.todo;
            const total = this.state.remain;
            if (todo < total) {
                this.setState({todo: this.state.todo+1});
            }
        } else {
            document.getElementById(event.target.id).className = 'is-done';
            const todo = this.state.todo;
            if (todo > 0) {
                this.setState({todo: this.state.todo-1});
            }
        }
    }

    taskList(props) {
        const data = props.tasks.map((task) => (
            <li id={task.id} onClick={this.toogle}>{task.name}</li>
        ));
        return <ul>{data}</ul>
    }

    render() {
        return (
            <div className="margin">
                <input type="text" onChange={this.doInputText} value={this.state.taskName} />
                <button onClick={this.addTodoTask}>Add</button>
                <p className="task-counter">{this.state.todo} remaining out of {this.state.remain} tasks</p>
                <this.taskList tasks={this.state.taskArray} />
            </div>
        );
    }
}

export default Quiz;