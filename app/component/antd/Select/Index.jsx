import React,{Component} from 'react';
import {Select} from 'antd'
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const {Option,OptGroup} = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
let timeout;
let currentValue;
function fetch(value,callback) {
    if(timeout){
        clearTimeout(timeout)
        timeout=null
    }
    currentValue = value
    function  fake() {
        const str = querystring.encode({
            code : 'utf-8',
            q : value,
        });
        jsonp(`https://suggest.taobao.com/sug?${str}`)
            .then(res =>res.json())
            .then((d)=>{
                if(currentValue === value){
                    const result = d.result;
                    const data = [];
                    result.forEach((r)=>{
                        data.push({
                            value:r[0],
                            text:r[0],
                        });
                    });
                    callback(data);
                }
            });
    }
    timeout = setTimeout(fake,300)
}
class Index extends React.Component{
    state = {
        data:[],
        value:''
    }
    componentDidMount(){
        jsonp('http://182.150.24.194:44444/web/rest/out/fetchSiteAllNodes')
            .then(res=>res.json)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    handleChange = (value) =>{
        this.setState({value:value});
        fetch(value,data =>this.setState({data:data}))
    }
    render(){
        const options = this.state.data.map(d =><Option key={d.value}>{d.text}</Option>)
        return(
            <div>
                <Select style={{width:120}} allowClear defaultValue='lucy' onChange={handleChange}>
                    <Option value='jack'>jack</Option>
                    <Option value='lucy'>lucy</Option>
                    <Option value='disabled' disabled>disabled</Option>
                    <Option value='yiminghe'>yiminghe</Option>
                </Select>
                <br/>
                <Select defaultValue='lucy' style={{width:120}} disabled>
                    <Option value='lucy'>lucy</Option>
                </Select>
                <br/>
                <Select
                    showSearch
                    style={{width:200}}
                    placeholder='select'
                    optionFilterProp='children'
                    onChange={()=>console.log('change')}
                    onFocus={()=>console.log('focus')}
                    onBlur={()=>console.log('blur')}
                    filterOption={(input,option)=>
                        option.props.children.toLowerCase()
                            .indexOf(input.toLowerCase()) >=0
                    }
                >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                </Select>
                <br/>
                <Select
                    mode='tags'
                    style={{width:'100%'}}
                    placeholder='tags mode'
                    onChange={handleChange}
                >
                    <Option value='jack'>jack</Option>
                    <Option value='lucy'>lucy</Option>
                    <Option value='disabled' disabled>disabled</Option>
                    <Option value='yiminghe'>yiminghe</Option>
                </Select>
                <Select
                    mode='tags'
                    style={{width:'100%'}}
                    placeholder='tags mode'
                    onChange={handleChange}
                    tokenSeparators={[',']}
                >
                    {children}
                </Select>
                <br/>
                <Select
                    style={{width:200}}
                    size='small'
                    defaultValue={['lucy','静静']}
                    onChange={handleChange}
                >
                    <OptGroup label='manager'>
                        <Option value='jack'>jack</Option>
                        <Option value='lucy'>lucy</Option>
                    </OptGroup>
                    <OptGroup label='engineer'>
                        <Option value='yi'>yi</Option>
                        <Option value='jingjing'>静静</Option>
                    </OptGroup>
                </Select>
                <br/>
                <Select
                    mode='combobox'
                    value={this.state.value}
                    placeholder='自动联想输入select'
                    style={{width:200}}
                    defaultActiveFirstOption={false}
                    showArrow={false}
                    onChange={this.handleChange}
                    onSelect={value =>console.log(value)}
                >
                    {options}
                </Select>
                <br/>
                <Select
                    labelInValue
                    defaultValue={{key : 'lucy'}}
                    style={{ width: 120 }}
                    onChange={value =>console.log(value)}
                >
                    <Option value='jack'>jack (100)</Option>
                    <Option value='lucy'>lucy (101)</Option>
                </Select>
            </div>
        )
    }
}
export default Index