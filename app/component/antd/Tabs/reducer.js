export default (state = {
    mode:'top',
    TabPaneData:[],
    size:'small',
}, action)=>{
    let mode = state.mode;
    let size = state.size;
    let activeKey = state.activeKey;
    let TabPaneData = state.TabPaneData;
    switch (action.type){
        case 'callback':
            let key = action.key;
            console.log(key);
            return state;
        case 'PaneData':
            TabPaneData = action.TabPaneData;
            return {TabPaneData,mode,size};
        case 'ChangeMode':
            let e = action.e;
            mode = e.target.value;
            return {TabPaneData,mode,size};
        case 'ChangeSize':
            size = action.e.target.value;
            return {TabPaneData,mode,size};
        default:
            return state
    }
}