import  React from 'react'
import UserList from './containers/user-list'
import UserDetail from './containers/user-detail'
import FlightList from './containers/flight-list'
import FlightDetail from './containers/flight-details'
import FlightStatusForm from './FlightStatusForm/flightStatusForm'

require('../../scss/style.scss')

const App = () => (
    <div>
        {/*<h2>user name</h2>*/}
        {/*<UserList/>*/}
        {/*<hr/>*/}
        {/*<h2>user details</h2>*/}
        {/*<UserDetail/>*/}
        {/*<hr/>*/}
        <FlightStatusForm/>

        <h2>Flight list</h2>
        <FlightList />
        <hr/>
        <h2>Flight Details</h2>
        <FlightDetail/>
    </div>
);

export default App;