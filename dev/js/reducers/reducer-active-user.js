
export default function (state=null, action){
    switch(action.type) {
        case "CLICKED_ON_USER":
            console.log(`in reducer-active-user ${action.payload.first}`);
            return action.payload
            break;
    }
    return state;
}
