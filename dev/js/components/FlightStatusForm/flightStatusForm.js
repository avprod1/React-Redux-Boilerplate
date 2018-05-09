import React, { Component } from 'react'


class FlightStatusForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flightNumber: "1233",
            DepartureDate: "",
            origin: "",
            destination: ""
        };
    }
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    onSubmitFunction = () => {
        console.log(this.state);
    };
    render () {
        return (
            <form action="">
                <input
                name="flightNumber"
                placeholder="Flight number"
                value={this.state.flightNumber}
                onChange={e => this.setState({ flightNumber: e.target.value})}
                /><br/>
                <input
                    name="DepartureDate"
                    placeholder="Depart Date"
                    value={this.state.DepartureDate}
                    onChange={e => this.setState({ DepartureDate: e.target.value})}
                /><br/>
                <input
                    name="origin"
                    placeholder="Departure City"
                    value={this.state.origin}
                    onChange={e => this.setState({ origin: e.target.value})}
                /><br/>
                <input
                    name="destination"
                    placeholder="Destination City"
                    value={this.state.destination}
                    onChange={e => this.setState({ destination: e.target.value})}
                /><br/>
                <button onClick={() => this.onSubmitFunction}>Submit</button>
            </form>
        );
    }
}

export default FlightStatusForm