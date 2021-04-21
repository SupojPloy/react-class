import { Component } from "react";

class Clock extends Component {

    constructor() {
        super();
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.dd = setInterval(() => {
            this.setState({ date: new Date() });
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.dd);
    }

    render() {
        return <p>Current date = {this.state.date.toLocaleTimeString()}</p>;
    }
}

export default Clock;