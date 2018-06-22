import React from 'react';
import {message,Button} from 'antd';
class Index extends React.Component{
    info = () =>{
        message.info('基本message')
    }
    longTime = () =>{
        message.info('自定义设置时间',10)
    }
    otherAction = () =>{
        message.success('忙完了，这里处理一些其他事情')
    }
    success = () =>{
        message.loading('等一会儿再执行then下面的东西,但是会报错',2,)
            .then(()=>message.success('再等一会儿吧，有点忙！',2))
            .then(()=>this.otherAction)
    }
    render(){
        return(
            <div>
                <Button type='primary' onClick={this.info}>info</Button>
                <br/><br/>
                <Button type='primary' onClick={this.longTime}>longtime</Button>
                <br/><br/>
                <Button type='primary' onClick={this.success}>可以执行其他事件</Button>
                <br/><br/>
            </div>
        )
    }
}
export default Index