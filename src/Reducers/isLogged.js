const logReducer = (state = false, action) => {
    switch(action.type){
        case "login":
            console.log('working login');
            return !state;

        default:
            console.log(state);
            return false
    }
}

export default logReducer;