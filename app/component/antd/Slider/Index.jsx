import React from 'react';
import {Slider,Icon,Row,Col,InputNumber} from 'antd'
class Index extends React.Component{
    state = {
        value:0,
        inputValue:0
    }
    handleChange = (value) => {
        this.setState({ value:value });
    }
    onChange = (value) =>{
        this.setState({inputValue:value})
    }
    render(){
        const max=20;
        const min=0;
        const value = this.state.value;
        const mid = ((max - min) / 2).toFixed(5);
        const preColor = value >= mid ? '' : 'rgba(0, 0, 0, .45)';
        const nextColor = value >= mid ? 'rgba(0, 0, 0, .45)' : '';
        const style = {
            float: 'left',
            height: 300,
            marginLeft: 70,
        };
        return(
            <div>
                <Slider
                    defaultValue={30}
                    onChange={value=>console.log(value)}
                />
                <Slider
                    range
                    defaultValue={[20,50]}
                    onChange={value=>console.log(value)}
                />
                <div className='icon-wrapper'>
                    <Icon style={{ color: preColor }} type="frown-o" />
                    <Slider min={min} max={max} onChange={this.handleChange} value={value} />
                    <Icon style={{ color: nextColor }} type="smile-o" />
                </div>
                <Slider
                    defaultValue={20}
                    // onChange={value => console.log(value)}
                    onAfterChange={value => console.log(value)}//滑动结束后的值
                />
                <Slider
                    defaultValue={30}
                    step={10}//一次滑动几个值
                    // onChange={value => console.log(value)}
                    onAfterChange={value => console.log(value)}
                />
                <div style={style}>
                    <Slider
                        defaultValue={30}
                        vertical
                        onAfterChange={value => console.log(value)}
                    />
                </div>
                <div>
                    <Row>
                        <Col span={12}>
                            <Slider
                                value={this.state.inputValue}
                                min={0}
                                max={20}
                                step={0.1}
                                onChange={this.onChange}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={0}
                                max={20}
                                step={0.1}
                                style={{marginLeft:20}}
                                value={this.state.inputValue}
                                onChange={this.onChange}
                            />
                        </Col>
                    </Row>
                </div>
                <Slider
                    tipFormatter={value => `${value}次`}
                />
            </div>
        )
    }
}
export default Index