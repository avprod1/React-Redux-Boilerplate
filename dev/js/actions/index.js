
//this is an actioncreator. It is looked up to a user event

export const selectUser = (user) => {
    console.log(`you clicked on user ${user.first}`);
    return {
        type: "CLICKED_ON_USER",
        payload: user
    }
};

export const selectFlight = (flight) => {
    console.log(`you clicked on this flight ${flight.Flight}`)
    return {
        type: "CLICKED_ON_FLIGHT",
        payload: flight
    }
}

export const formSubmit = (flight) => {
   console.log(`you submitted a form`);


}