import React from 'react';
import {Timeline,Button,Icon} from 'antd';
class Index extends React.Component{
    state = {
        reverse:false
    }
    handleClick = () =>{
        this.setState({ reverse: !this.state.reverse });
    }
    render(){
        let reverse = this.state.reverse;
        return(
            <div>
                <Timeline pending="Recording..." reverse='false'>
                    <Timeline.Item color='green'>现在是：2018-06-06</Timeline.Item>
                    <Timeline.Item color='green'>现在是：2018-06-06</Timeline.Item>
                    <Timeline.Item color='red'>
                        <p>children-现在是：2018-06-06</p>
                        <p>children-现在是：2018-06-06</p>
                        <p>children-现在是：2018-06-06</p>
                    </Timeline.Item>
                    <Timeline.Item dot={<Icon type='clock-circle-o' style={{fontSize:16}}/>}  color='red'>现在是：2018-06-06</Timeline.Item>
                </Timeline>
                <Button type="primary" onClick={this.handleClick} style={{ marginTop: 16 }} >排序</Button>
            </div>
        )
    }
}
export default Index