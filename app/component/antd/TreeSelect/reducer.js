export default (state = {
    value:undefined,
    value2:undefined,
    value3:undefined,
    treeData : [{
        label: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [{
            label: 'Child Node1',
            value: '0-0-1',
            key: '0-0-1',
        }, {
            label: 'Child Node2',
            value: '0-0-2',
            key: '0-0-2',
        }],
    }, {
        label: 'Node2',
        value: '0-1',
        key: '0-1',
    }]
}, action)=>{
    let value=state.value;
    let value2=state.value2;
    let value3=state.value3;
    let treeData=state.treeData;
    switch (action.type){
        case 'onChange':
            let treeValue1=action.treeValue1;
            value = treeValue1;
            return {value,value2,value3,treeData};
        case 'onChange2':
            let treeValue2=action.treeValue2;
            value2 = treeValue2;
            return {value,value2,value3,treeData};
        case 'onChange3':
            let treeValue3=action.treeValue3;
            value3 = treeValue3;
            return {value,value2,value3,treeData};
        default :
            return state;
    }
}