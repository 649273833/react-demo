import React from 'react';
import {Popconfirm,message} from 'antd';
class Index extends React.Component{
    confirm = (e) =>{
        console.log(e)
        message.success('确认成功！')
    }
    cancel = (e) =>{
        console.log(e)
        message.success('取消成功！')
    }
    render(){
        return(
            <div>
                <Popconfirm
                    title='are you sure delete this task?'
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText='确认'
                    okType='danger'
                    cancelText='取消'
                    placement='topLeft'
                    visible={false}
                    onVisibleChange={()=>console.log('禁止弹出')}
                >
                    <a href="" style={{display:'block',margin:40}}>delete</a>
                </Popconfirm>
            </div>
        )
    }
}
export default Index