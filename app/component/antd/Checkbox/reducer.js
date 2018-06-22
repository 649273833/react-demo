export default (state = {
    checked:true,
    disabled:false,
    plainOptions : ['Apple', 'Pear', 'Orange'],
    defaultCheckedList : ['Apple', 'Orange'],
    checkedList:['Apple', 'Orange'],
    indeterminate:true,
    checkAll:false,
}, action)=>{
    let checked=state.checked;
    let disabled=state.disabled;
    let plainOptions=state.plainOptions;
    let checkedList=state.defaultCheckedList;
    let indeterminate=state.indeterminate;
    let checkAll=state.checkAll;
    switch (action.type){
        case 'checked1':
            let e=action.e;
            console.log(`checked = ${e.target.checked}`);
            console.log(11111);
            checked = e.target.checked;
            return {checked,disabled,checkedList,indeterminate,checkAll}
        case 'toggleChecked':
            checked = !state.checked;
            return {checked,disabled,checkedList,indeterminate,checkAll}
        case 'toggleDisabled':
            disabled = !state.disabled;
            return {checked,disabled,checkedList,indeterminate,checkAll}
        case 'onChange':
            indeterminate= !!checkedList.length && (checkedList.length < plainOptions.length)
            checkAll= checkedList.length === plainOptions.length
            return {checked,disabled,checkedList,indeterminate,checkAll}
        case 'onCheckAllChange':
            let ee=action.ee;
            checkedList= ee.target.checked ? plainOptions : []
            indeterminate = false
            checkAll= ee.target.checked
            return {checked,disabled,checkedList,indeterminate,checkAll}
        case 'CheckboxGroup':
            let checkedValues=action.checkedValues;
            console.log('checkedValues:'+checkedValues)
        default:
            return state;
    }
}