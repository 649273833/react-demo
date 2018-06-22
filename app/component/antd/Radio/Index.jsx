import React from 'react';
import {Radio,Input} from 'antd';
const RadioGroup= Radio.Group;
const RadioButton= Radio.Button;
const plainOptions = ['Apple','Pear','Orange'];
const options = [
    {label :'Apple',value:'Apple'},
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange', disabled: true },
];
class Index extends React.Component{
    state = {
        value :'',
        value1 :'Apple',
        value2 :'Apple',
        value3 :'Apple',
        value4 :1,
    };
    onChange = (e) =>{
        this.setState({value:e.target.value});
        console.log(e.target.value)
    };
    onChange1 = (e) =>{
        this.setState({value1:e.target.value});
        console.log(e.target.value)
    };
    onChange2 = (e) =>{
        this.setState({value2:e.target.value});
        console.log(e.target.value)
    };
    onChange3 = (e) =>{
        this.setState({value3:e.target.value});
        console.log(e.target.value)
    };
    onChange4 = (e) =>{
        this.setState({value4:e.target.value});
        console.log(e.target.value)
    };
    render(){
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return(
            <div>
                <Radio>radio</Radio>
                <br/>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
                <br/>
                <RadioGroup options={plainOptions} onChange={this.onChange1} value={this.state.value1}/>
                <br/>
                <RadioGroup options={options} onChange={this.onChange2} value={this.state.value2}/>
                <br/>
                <RadioGroup options={optionsWithDisabled} onChange={this.onChange3} value={this.state.value3}/>
                <br/>
                <RadioGroup name='radiogroup' defaultValue={1}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
                <br/>
                <Radio defaultChecked={false}>disabled-false 默认选中-false</Radio>
                <Radio defaultChecked disabled>disabled-true 默认选中-true</Radio>
                <br/>
                <RadioGroup onChange={this.onChange4} value={this.state.value4}>
                    <Radio style={radioStyle} value={1}>A</Radio>
                    <Radio style={radioStyle} value={2}>B</Radio>
                    <Radio style={radioStyle} value={3}>C</Radio>
                    <Radio style={radioStyle} value={4}>
                        More...
                        {this.state.value4 === 4 ? <Input style={{width:100,marginLeft: 10}}/> : null}
                    </Radio>
                </RadioGroup>
                <br/>
                <RadioGroup onChange={this.onChange} defaultValue='a'>
                    <RadioButton value='a'>a</RadioButton>
                    <RadioButton value='b'>b</RadioButton>
                    <RadioButton value='c'>c</RadioButton>
                    <RadioButton value='d'>d</RadioButton>
                </RadioGroup>
                <br/>
                <RadioGroup onChange={this.onChange} defaultValue='a'>
                    <RadioButton value='a' disabled>a</RadioButton>
                    <RadioButton value='b'>b</RadioButton>
                    <RadioButton value='c'>c</RadioButton>
                    <RadioButton value='d'>d</RadioButton>
                </RadioGroup>
                <br/>
                <RadioGroup size='small' onChange={this.onChange} disabled defaultValue='a'>
                    <RadioButton value='a'>a</RadioButton>
                    <RadioButton value='b'>b</RadioButton>
                    <RadioButton value='c'>c</RadioButton>
                    <RadioButton value='d'>d</RadioButton>
                </RadioGroup>
                <br/>
            </div>
        )
    }
}
export default Index