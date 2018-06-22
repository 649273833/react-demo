export default (state = {
    collapsed:false,
},action)=>{
    switch (action.type){
        case 'COLLAPSED':
            return {collapsed:!state.collapsed};
        default:
            return state;
    }
}