export default (state ={
    data:[],
    loading:true,
    url:'',
    name:''
}, action)=>{
    let data = state.data;
    let loading = state.loading;
    let url = state.url;
    let name = state.name;
    switch (action.type){
        case 'afterConfirm':
            let id= action.id;
            let datas = state.data;
            data = datas.filter(data => data.id !== id);
            return {data,loading,url,name};
        case 'getXianlu':
            let {getdata,getloading} = action.obj;
            data = getdata;
            loading = getloading;
            return {data,loading,url,name};
        case 'handleChangeUrl':
            let urls = action.urlE.target.value;
            url=urls.replace(/^\s+|\s+$/g, '');
            return {name,url,data,loading};
        case 'handleChangeName':
          let names = action.nameE.target.value;
          name = names;
            return {name,url,data,loading};
        case 'afterAdd':
            url = '';
            name = '';
            return {url,name,data,loading};
        default:
            return state
    }
}