export default (state = {
    loading : true,
    iplist: [],
    citylist: [],
}, action) => {
    let iplist = state.iplist;
    let citylist = state.citylist;
    switch (action.type) {
        case 'LOADING':
            return {loading:!state.loading,iplist,citylist};
        case 'IP_LIST':
            iplist = action.iplist;
            return {loading:!state.loading,iplist,citylist};
            //如果只return iplist，不return ，citylist，
        // 同时进行渲染他们两个的时候就会出现后来居上，把第一个覆盖替换掉
        case 'CITY_LIST':
            citylist = action.citylist;
            return {loading:!state.loading,iplist,citylist};
        default:
            return state;
    }
};