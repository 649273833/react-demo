import React from 'react';
import {Button,notification,Icon,Select,Input} from 'antd';
const {Option} = Select
const options = ['topLeft','topRight','bottomLeft','bottomRight']
const key = 'updatable'
class Index extends React.Component{
    openNotification = () =>{
        notification.open({
            message:'这里是title',
            description:'可以自定义图标,可以设置时间',
            duration:2,
            icon:<Icon type='smile-circle' style={{color:'#108ee9'}}/>,
            style:{
                color:'#108ee9',
                width:600,
                // marginLeft: 355 - 600
            },
            // placement:'topLeft'
        })
    }
    openNotificationWithIcon = (type) =>{
        notification[type]({
            message:'有图标的公告',
            description:'这里是内容'
        })
    }

    openNewNotification = () =>{
        notification.open({
            key,
            message: 'Notification Title',
            description: 'description.',
            duration:1
        });
        setTimeout(() => {
            notification.open({
                key,
                message: 'New Title',
                description: 'New description.',
            });
        }, 2000);
    }
    render(){
        return(
            <div>
                <Select
                    defaultValue='topRight'
                    style={{width:120,marginRight:10}}
                    onChange={(val)=>{
                        console.log(val)
                        notification.config({
                            placement:val
                        })
                    }}
                >
                    {options.map(val => <Option key={val} value={val}>{val}</Option>)}
                </Select>
                <br/><br/>
                <Button type='primary' onClick={this.openNotification}>notification</Button>
                <br/><br/>
                <Button type='primary' onClick={()=>this.openNotificationWithIcon('success')} >success</Button>
                <br/><br/>
                <Button type='primary' onClick={()=>this.openNotificationWithIcon('warning')} >warning</Button>
                <br/><br/>
                <Button type='primary' onClick={()=>this.openNotificationWithIcon('info')}>info</Button>
                <br/><br/>
                <Button type='primary' onClick={()=>this.openNotificationWithIcon('error')} >error</Button>
                <br/><br/>
                <Button type='primary' onClick={this.openNewNotification}>notification box</Button>
                <br/><br/>
                <Input type='color' onChange={(e)=>console.log(e.target.value)}/>
            </div>
        )
    }
}
export default Index;