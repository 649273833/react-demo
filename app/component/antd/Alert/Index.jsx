import React from 'react';
import {Alert,Button} from 'antd';
class Index extends React.Component{
    state = {
        visible:true
    }
    handleClose = () =>{
        this.setState({
            visible:!this.state.visible
        })
    }
    render(){
        const style={margin:'16px'}
        return(
            <div>
                <Alert
                    style={style}
                    message='success text'
                    type='success'
                    showIcon
                />
                <Alert
                    style={style}
                    message='informational'
                    type='info'
                    showIcon
                />
                <Alert
                    style={style}
                    message='warning textwarning textwarning textwarning textwarning textwarning text'
                    type='warning'
                    closable
                    showIcon
                    onClose={(e)=>console.log(e,'close')}
                />
                <Alert
                    style={style}
                    message='标题'
                    type='error'
                    showIcon
                    description='这是内容内容内容内容内容内容内容内容内容内容内容内容内容'
                    closable
                    onClose={(e)=>console.log(e,'close')}
                />
                <div style={style}>
                    <Alert banner closeText='关闭' message='warning text ' />
                    <br/>
                    <Alert banner closable message='very long warning very long warning very long warning very long warning'/>
                    <br/>
                    <Alert banner showIcon={false} message='warning text '/>
                    <br/>
                    <Alert banner type='error' message='err'/>
                </div>
                <div style={style}>
                    {this.state.visible ?
                        <Alert
                            type='warning'
                            closable
                            showIcon
                            message='平滑的关闭'
                            afterClose={this.handleClose}
                        /> : null
                    }
                    <Button onClick={this.handleClose}>{this.state.visible ? 'close' : 'open'}</Button>
                </div>
            </div>
        )
    }
}
export default Index