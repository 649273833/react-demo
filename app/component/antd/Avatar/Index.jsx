import React from 'react';
import {Avatar,Button,Badge,Icon} from 'antd';
class Index extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Avatar size='large' icon='user'/>
                    <Avatar icon='user'/>
                    <Avatar size='small' icon='user'/>
                    <Avatar shape='square' icon='user'/>
                </div>
                <div>
                    <Avatar style={{backgroundColor:'#f56a00'}}>u</Avatar>
                    <Avatar style={{backgroundColor:'#7265e6'}}>Lucy</Avatar>
                    <Avatar style={{backgroundColor:'#ffbf00'}}>Edward</Avatar>
                    <Avatar style={{backgroundColor:'#00a2ae'}}>我想静静</Avatar>
                </div>
                <div>
                    <Avatar icon='user'/>
                    <Avatar>USER</Avatar>
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                    <Avatar style={{color:'#f56a00',backgroundColor:'#fde3cf'}}>U</Avatar>
                    <Avatar style={{backgroundColor:'#87d068'}} icon='user'/>
                </div>
                <div>
                    <Badge count={4}><Avatar shape='square' icon='user'/></Badge>
                    <Badge dot><Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/></Badge>
                </div>
                <h1>badge部分</h1>
                <div>
                    <Badge count={5}>
                        <a href="#" className='head-example'></a>
                    </Badge>
                    <Badge count={0} showZero>
                        当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。
                        <a href="#" className='head-example'></a>
                    </Badge>
                </div>
                <div>
                    <Badge count={999999} overflowCount={99}>
                        <Avatar icon='user'/>
                    </Badge>
                    <a href="https://www.zzwio.com">
                        <Badge count={8432155} overflowCount={99}>
                            <Avatar icon='zhihu'/>
                        </Badge>
                    </a>
                    <br/>
                    <Badge status='success' text='success'/>
                    <br/>
                    <Badge status='error' text='error' />
                    <br/>
                    <Badge status='default' text='default'/>
                    <br/>
                    <Badge status='processing' text='processing'/>
                    <br/>
                    <Badge status='warning' text='warning' />
                    <br/>
                    <a href="https://www.zzwio.com">
                        <Badge count={8432155}  overflowCount={99} >
                            <Avatar icon='zhihu'/>
                            {/*有数字提示的地方不能使用status，不然就变成一个点，不提示数字了*/}
                        </Badge>
                    </a>
                    <br/>
                    <a href="https://www.zzwio.com">
                        <Badge count={8432155}  overflowCount={99} >
                            <Avatar icon='zhihu'/>
                        </Badge>
                    </a>
                </div>
                <div>
                    <Badge count={3212}/>
                    <br/>
                    <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
                </div>
                <div>
                    <Badge dot>
                        <Icon type='notification'/>
                    </Badge>
                    <br/>
                    <br/>
                    <Badge dot count={0} showZero>
                        <Icon type='notification'/>
                    </Badge>
                    <br/>
                    <br/>
                    <Badge dot>
                        <a href="#">Link something</a>
                    </Badge>
                    <br/>
                    <br/>
                    <Badge count={5} title="鼠标移入的提示">
                        <a href="#" className="head-example" />
                    </Badge>
                </div>
            </div>
        )
    }
}export default Index