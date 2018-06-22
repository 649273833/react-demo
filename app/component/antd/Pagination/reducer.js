export default (state = {
    pageNumber:'',
    current:2
},action)=>{
    switch (action.type){
        case 'PAGENUMBER':
            let pageNumber=action.pageNumber;
            return {pageNumber,current};
        case 'onChangeJumper':
            console.log('page',action.pageNumber);
            return state;
        case 'onShowSizeChange':
            let {current1,pagesize} = action.obj;
            console.log(current1,pagesize);
            return state;
        case 'setCurrent':
            let page=action.page;
            let current=state.current;
            current=page;
            return {current,pageNumber};
        default:
            return state;
    }
}