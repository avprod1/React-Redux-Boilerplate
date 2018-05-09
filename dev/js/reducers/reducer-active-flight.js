export default function (state=null, action){
    switch(action.type) {
        case "CLICKED_ON_FLIGHT":
            console.log(`in reducer-active-user ${action.payload.FlightOriginationDate}`);
            return action.payload
            break;
    }
    return state;
}
