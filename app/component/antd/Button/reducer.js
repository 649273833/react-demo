export default (state = {
    size:'default',
    loading:false,
    iconLoading:false,
    num:0
},action)=>{
    let size = state.size;
    let loading = state.loading;
    let iconLoading = state.iconLoading;
    let num = state.num;
    switch (action.type){
        case 'SIZE':
            size = state.size;
            size = action.size;
            return {size,loading,iconLoading,num};
        case'LOAD':
            loading=!state.loading
            return {size,loading,iconLoading,num};
        case 'ICONLOAD':
            iconLoading=!state.iconLoading
            return {size,loading,iconLoading,num};
        case 'MENUCLICK':
            console.log('click',action.e)
            return state;
        case 'ADD':
            num=state.num + 1
            return {size,loading,iconLoading,num}
        default:
            return state
    }
}