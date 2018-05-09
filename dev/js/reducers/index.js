

import {combineReducers} from 'redux'
import UserReducer from './reducer-users'
import FlightReducer from './reducer-flights'
import ActiveUserReducer from './reducer-active-user'
import ActiveFlightReducer from './reducer-active-flight'

const allReducers = combineReducers({
    users: UserReducer,
    flights: FlightReducer,
    activeUser: ActiveUserReducer,
    activeFlight: ActiveFlightReducer
});

export default allReducers;