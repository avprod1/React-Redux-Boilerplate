import React, {Component} from 'react'
import {connect} from 'react-redux'


class FlightDetail extends Component {
    render () {
        if (this.props.flight===null) {
            return(
                <h4>select a flight</h4>
            );
        }
        return (
            <div>
                <h1>Flight No: {this.props.flight.Flight}</h1>
                <h2>{this.props.flight.DepartureCode}&ndash;{this.props.flight.ArrivalCode}</h2>
                <h3>departure date: {this.props.flight.FlightOriginationDate}</h3>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        flight: state.activeFlight
    };
}

export default connect(mapStateToProps)(FlightDetail);