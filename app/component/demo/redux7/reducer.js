export default (state = {
    loading:false,
    list:[]
},action) => {
    let list = state.list;
    switch (action.type){
        case 'LIST':
            list=action.list;
            return {list};
        case 'LOADING':
            return {loading:!state.loading,list};
        case 'COLLAPSE':
            let {uid, status} = action.obj;
            list.find(data => data.uid === uid).status = status;
            return {loading:!state.loading,list};
        default :
            return state
    }
}