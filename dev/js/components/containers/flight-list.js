import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectFlight} from "../../actions/index";




class FlightList extends Component {

    createListItems() {
        return this.props.flights.map((flight) =>{
            return (
                <li
                    key={flight.Flight}
                    onClick={() => this.props.selectFlight(flight)}
                >
                    {flight.DepartureCode} -  {flight.ArrivalCode}
                </li>
            );
        });
    }

    render() {
        return(
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        flights: state.flights
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectFlight: selectFlight}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FlightList);