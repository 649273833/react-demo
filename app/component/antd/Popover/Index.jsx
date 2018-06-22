import React from 'react';
import {Popover,Button,Tooltip} from 'antd';
const content = (
    <div>
        <p>popover</p>
        <p>popover</p>
    </div>
);
const title = '分上下左右12个方向的气泡卡片,有的需要点击触发';
const buttonWidth = 70;
class Index extends React.Component{
    state = {
        visible : false
    };
    hide = () =>{
        this.setState({visible:false})
    };
    handleVisibleChange = (visible) =>{
        this.setState({visible:visible})
    }
    render(){
        return(
            <div>
                <Popover content={content} title='简单的气泡卡片'>
                    <Button>popover</Button>
                </Popover>
                <hr/>
                <div className='popover-demo'>
                    <div style={{marginLeft:buttonWidth,whiteSpace:'nowarp'}}>
                        <Popover placement='topLeft' content={content} title={title} trigger='click'>
                            <Button>tl</Button>
                        </Popover>
                        <Popover placement='top' content={content} title={title} trigger='click'>
                            <Button>top</Button>
                        </Popover>
                        <Popover placement='topRight' content={content} title={title} trigger='click'>
                            <Button>tr</Button>
                        </Popover>
                    </div>
                    <div style={{float:'left',width:buttonWidth}}>
                        <Popover placement='leftTop' content={content} title={title} trigger='hover'>
                            <Button>tl</Button>
                        </Popover>
                        <Popover placement='left' content={content} title={title} trigger='hover'>
                            <Button>left</Button>
                        </Popover>
                        <Popover placement='leftBottom' content={content} title={title} trigger='hover'>
                            <Button>lb</Button>
                        </Popover>
                    </div>
                    <div style={{width:buttonWidth,marginLeft:(buttonWidth * 4) + 15}}>
                        <Popover placement='rightTop' content={content} title={title} trigger='click'>
                            <Button>rt</Button>
                        </Popover>
                        <Popover placement='right' content={content} title={title} trigger='click'>
                            <Button>right</Button>
                        </Popover>
                        <Popover placement='rightBottom' content={content} title={title} trigger='click'>
                            <Button>rb</Button>
                        </Popover>
                    </div>
                    <div style={{marginLeft:buttonWidth,whiteSpace:'nowarp',clear:'both'}}>
                        <Popover placement='bottomLeft' content={content} title={title}>
                            <Button>bl</Button>
                        </Popover>
                        <Popover placement='bottom' content={content} title={title}>
                            <Button>bottom</Button>
                        </Popover>
                        <Popover placement='bottomRight' content={content} title={title}>
                            <Button>bottom</Button>
                        </Popover>
                    </div>
                </div>
                <div>
                    <Popover placement='topLeft' content={content} title={title}>
                        <Button>边缘对齐</Button>
                    </Popover>
                    <Popover arrowPointAtCenter placement='topLeft' content={content} title={title}>
                        <Button>箭头指向中心对齐</Button>
                    </Popover>
                </div>
                <br/>
                <br/>
                <div>
                    <Popover content={content} title="Title" trigger="hover">
                        <Button>Hover me</Button>
                    </Popover>
                    <Popover content={content} title="Title" trigger="focus">
                        <input type="text" placeholder='获取焦点时触发'/>
                    </Popover>
                    <Popover content={content} title="Title" trigger="click">
                        <Button>Click me</Button>
                    </Popover>
                </div>
                <br/>
                <div>
                    <Popover
                        content={<a onClick={this.hide}>close</a>}
                        title={title}
                        trigger='click'
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Button type='primary'>click me</Button>
                    </Popover>
                </div>
                <br/>
                tooltip
                <div>
                    <Tooltip title='提示文字'>
                        <span>简单的提示文字工具</span>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip placement='topLeft' title='提示文字'>
                        <Button>边缘对齐</Button>
                    </Tooltip>
                    <Tooltip mouseEnterDelay={1} placement='topLeft' title='提示文字' arrowPointAtCenter>
                        <Button>箭头指向中心</Button>
                    </Tooltip>
                </div>
            </div>
        )
    }
}
export default Index;