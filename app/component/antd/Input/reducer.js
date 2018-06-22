export default (state = {
    userName:''
}, action)=>{
    let userName=state.userName;
    switch (action.type){
        case 'emitEmpty':
            userName = '';
            return {userName};
        case 'onChangeUserName':
            let e=action.e;
            userName = e.target.value;
            return {userName};
        default:
            return state;
    }
}