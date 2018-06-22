export default (state = {
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
    }
    ],
}, action)=>{
    switch (action.type){
        case 'onChange1':
            let {val,selval}=action.casObj;
            console.log('val:'+val,'selval:'+selval);
        default:
            return state;
    }
}