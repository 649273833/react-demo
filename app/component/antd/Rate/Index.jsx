import React from 'react';
import {Rate,Icon} from 'antd';
class Index extends React.Component{
    state = {
        value:3,
    }
    handleChange = (value) =>{
        this.setState({value:value})
    }
    render(){
        let value = this.state.value
        return(
            <div>
                <Rate onChange={this.handleChange} value={value}/>
                {value && <span className='ant-rate-text'>{value}stars</span>}
                <br/>
                <Rate  allowClear={false} defaultValue={2}/>
                最低一颗星，禁止清除完
                <br/>
                <Rate allowHalf defaultValue={2.5}/>
                可以半颗星
                <br/>
                <Rate defaultValue={2} disabled/>
                只读，不能点
                <br/>
                <Rate defaultValue allowHalf character={<Icon type='heart'/>}/>
                <br/>
                <Rate defaultValue allowHalf character='星'/>
                自定义图标
            </div>
        )
    }
}
export  default Index