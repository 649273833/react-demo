export default (state = {
    steps:[{
        title: 'First',
        content: 'First-content',
    }, {
        title: 'Second',
        content: 'Second-content',
    }, {
        title: 'Last',
        content: 'Last-content',
    }],
    current:0,
    add:0
},action)=>{
    let current=state.current;
    let add=state.add
    let steps=state.steps
    switch (action.type){
        case 'next' :
            current=state.current + 1
            return {current,add,steps};
        case 'prev':
            current=state.current - 1
            return {current,add,steps};
        case 'add' :
            add=state.add + 1
            return {current,add,steps};
        default:
            return state;
    }
}