export default (state = {
    layout:''
}, action)=>{
    switch (action.type){
        case 'GRID':
            console.log('layout');
            return state;
        default:
            return state
    }
}