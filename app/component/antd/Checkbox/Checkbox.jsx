import React from 'react'
import {Checkbox,Button,Row,Col} from 'antd';
const CheckboxGroup = Checkbox.Group;
class MyCheckbox extends React.Component{
    render(){
        let {checked,disabled,plainOptions,defaultCheckedList,checkedList,indeterminate,checkAll} = this.props.storeState;
        const label =
            `
                ${checked ? 'checked' : 'unchecked'}
                -
                ${disabled ? 'disabled' : 'enabled'}
            `;
        console.log('checkedList:'+checkedList)
        const plainOptions2 = ['Apple', 'Pear', 'Orange'];
        const options = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' },
        ];
        const optionsWithDisabled = [
            { label: 'Apple', value: 'Apple' },
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange', disabled: false },
        ];
        return(
            <div>
                <Checkbox
                    onChange={(e)=>this.props.dispatch({type:'checked1',e:e})}
                    checked={checked}
                    disabled={disabled}
                >
                    {label}
                </Checkbox>
                <br/>
                <Button
                    type='primary'
                    onClick={()=>this.props.dispatch({type:'toggleChecked'})}
                >
                    {checked ? 'checked' : 'unchecked'}
                </Button>
                <Button
                    type='primary'
                    onClick={()=>this.props.dispatch({type:'toggleDisabled'})}
                >
                    {disabled ? 'disabled' : 'enabled'}
                </Button>
                <br/>
                <div style={{borderBottom:'1px solid #ccc'}}>
                    <Checkbox
                        indeterminate={indeterminate}
                        onChange={(ee)=>this.props.dispatch({type:'onCheckAllChange',ee:ee})}
                        checked={checkAll}
                    >
                    checkall
                    </Checkbox>
                </div>
                <CheckboxGroup
                    options={plainOptions}
                    value={checkedList}
                    onChange={(checkedList)=>this.props.dispatch({type:'onChange',checkedList:checkedList})}
                >

                </CheckboxGroup>

                <Checkbox defaultChecked={false} disabled/>
                <Checkbox defaultChecked disabled/>
                <br/>
                <br/>
                <CheckboxGroup
                    options={plainOptions2}
                    defaultValue={['Apple']}
                    onChange={(e)=>this.props.dispatch({type:'checked1',e:e})}/>
                <br/>
                <CheckboxGroup
                    options={options}
                    defaultValue={['Pear']}
                    onChange={(e)=>this.props.dispatch({type:'checked1',e:e})}/>
                <br/>
                <CheckboxGroup
                    options={optionsWithDisabled}
                    defaultValue={['Orange']}
                    disabled onChange={(e)=>this.props.dispatch({type:'checked1',e:e})}/>
                <br/>
                <CheckboxGroup onChange={(checkedValues)=>this.props.dispatch({type:'CheckboxGroup',checkedValues:checkedValues})}>
                    <Row>
                        <Col span={8}><Checkbox value='A'>A</Checkbox></Col>
                        <Col span={8}><Checkbox value='B'>B</Checkbox></Col>
                        <Col span={8}><Checkbox value='C'>C</Checkbox></Col>
                        <Col span={8}><Checkbox value='D'>D</Checkbox></Col>
                        <Col span={8}><Checkbox value='E'>E</Checkbox></Col>
                        <Col span={8}><Checkbox value='F'>F</Checkbox></Col>
                    </Row>
                </CheckboxGroup>
            </div>
        )
    }
}
export default MyCheckbox;