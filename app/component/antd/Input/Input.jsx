import React from 'react';
import {Input,Select,Icon,Col,Tooltip,InputNumber} from 'antd';
const Option = Select.Option;
const Search = Input.Search;
const InputGroup = Input.Group;
const {TextArea} = Input;
const selectBefore = (
    <Select defaultValue="Http://" style={{ width: 90 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
    </Select>
);
const selectAfter = (
    <Select defaultValue=".com" style={{ width: 80 }}>
        <Option value=".com">.com</Option>
        <Option value=".jp">.jp</Option>
        <Option value=".cn">.cn</Option>
        <Option value=".org">.org</Option>
    </Select>
);
class MyInput extends React.Component{

    render(){
            let {userName} = this.props.storeState;
            const suffix = userName ?
                <Icon
                    type='close-circle'
                    onClick={()=>this.props.dispatch({type:'emitEmpty'})}
                />
                : null;
        return(
            <div>
                <div  style={{ marginBottom: 16 }}>
                    <Input addonBefore='http://' addonAfter='.com' defaultValue='mysite'/>
                </div>
                <div  style={{ marginBottom: 16 }}>
                    <Input
                        addonBefore={selectBefore}
                        addonAfter={selectAfter}
                        defaultValue='mysite'
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonAfter={<Icon type='setting'/>}/>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Search
                        placeholder='输入文字，只能点回车'
                        onSearch={value=>console.log(value)}
                        style={{width:200}}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Search
                        placeholder='输入文字,点搜索按钮或者回车'
                        onSearch={value=>console.log(value)}
                        enterButton='搜索'
                        size='large'
                        style={{width:200}}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <TextArea autosize placeholder='高度自动'/>
                    <TextArea autosize={{minRows:2,maxRows:6}} placeholder='高度自动，最低2行，最高6行'/>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input
                        placeholder='输入姓名'
                        prefix={<Icon type='user' style={{color:'rgba(0,0,0,.25)'}}/>}
                        suffix={suffix}
                        value={userName}
                        onChange={(e)=>this.props.dispatch({type:'onChangeUserName',e:e})}
                        ref={node=>this.userNameInput = node}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <InputGroup compact>
                        <Input style={{width:'20%'}} defaultValue='123'/>
                        <Input style={{width:'30%'}}/>
                    </InputGroup>
                </div>
                <div style={{ marginBottom: 16 }}>
                    <InputGroup>
                        <Col span={5}>
                            <Input defaultValue='123'/>
                        </Col>
                        <Col span={8}>
                            <Input defaultValue='4567'/>
                        </Col>
                    </InputGroup>
                </div>

                <div style={{ marginBottom: 16 }}>
                    <InputNumber
                        min={1}
                        max={10}
                        defaultValue={3}
                        disabled='true'
                        onChange={(value)=>console.log(value)}
                    />

                </div>
                <div style={{ marginBottom: 16 }}>
                    <InputNumber
                        defaultValue={1000}
                        formatter={value =>`$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        onChange={(value)=>console.log(value)}
                        size='small'
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <InputNumber
                        defaultValue={100}
                        min={0}
                        max={100}
                        size='small'
                        formatter={value=>`${value}%`}
                        paeser={value=>value.replace('%','')}
                        onChange={(value)=>console.log(value)}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <InputNumber
                        min={0}
                        max={10}
                        step={0.01}
                        disabled='true'
                        onChange={(value)=>console.log(value)}
                    />
                </div>
                <div style={{ marginBottom: 16 }}></div>
            </div>
        )
    }
}
export default MyInput;