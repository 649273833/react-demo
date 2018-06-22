
export default (state ={
    formVal:[],
    options : [{
        value: 'zhejiang',
        label: '浙江',
        children: [{
            value: 'hangzhou',
            label: '杭州',
            children: [{
                value: 'xihu',
                label: '西湖',
            }],
        }],
        }, {
            value: 'jiangsu',
        label: '江苏',
        disabled: true,
        children: [{
            value: 'nanjing',
            label: '南京',
            children: [{
                value: 'zhonghuamen',
                label: '中华门',
            }],
        }],
        },{
        value: 'chengdu',
        label: '成都',
        children: [{
            value: 'gaoxinqu',
            label: '高新区',
            children: [{
                value: 'fuhuayuan',
                label: '孵化园',
            },{
                value: 'yintai',
                label: '银泰城'
            }]
        }]
        }],
    confirmDirty:false,
    autoCompleteResult:[],
    isMobileVal:'',
}, action)=>{
    let  confirmDirty=state.confirmDirty;
    let  autoCompleteResult=state.autoCompleteResult;
    let options=state.options;
    let formVal=state.formVal;
    let isMobileVal=state.isMobileVal;

    switch (action.type){
        case 'formVal':
           formVal=action.formVal;
           console.log(formVal);
            return {formVal,confirmDirty,autoCompleteResult,options,isMobileVal};
        case 'handleConfirmBlur':
            let confirmE = action.confirmE;
            let confirVal=confirmE.target.value;
            confirmDirty = state.confirmDirty || !!confirVal;
            return {formVal,confirmDirty,autoCompleteResult,options,isMobileVal};
        case 'handleWebsiteChange':
            let websiteVal=action.websiteVal;
            if(!websiteVal){
                autoCompleteResult = [];
            }else {
                autoCompleteResult = ['.com', '.org', '.net','.cn','.cc','.top'].map(domain =>`${websiteVal}${domain}`)
            }
            return {formVal,confirmDirty,autoCompleteResult,options,isMobileVal};
        default:
            return state;
    }
}