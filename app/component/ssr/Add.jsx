import React from 'react';
import {Input,Card,Button,message} from 'antd';
import axios from 'axios';
const TextArea = Input.TextArea;
class Add extends React.Component{
    state = {
        url:'',
        name:''
    }
    handleChangeUrl = (e) =>{
        let url = e.target.value
        url=url.replace(/^\s+|\s+$/g, '')
        this.setState({url})
    }
    handleChangeName = (e) =>{
        let name = e.target.value
        if(name){
            this.setState({name})
        }
    }
    handleAdd =()=>{
        let {name,url} = this.state;
        if(!name){
            name = '默认线路'
        }
        if(url){
            axios.get('https://api.uu20.top/api/addxianlu.php',{
                params:{
                    name:name,
                    url:url
                }
            })
                .then(res=>{
                    if(res.data.code > 0){
                        this.setState({url:'',name:''})
                        message.success('添加成功！')
                    }else {
                        console.log(res.data.msg)
                        message.warning('内容严重错误或者网络错误，请稍后重试！')
                    }
                })
                .catch(res=>{
                    message.warning('err')
                })
        }else {
            message.warning('您还没有输入链接')
        }
        // console.log(name,url)
    }
    render(){
        return(
            <div className='add'>
                <div className='alert'>
                    <Card>
                        <p>
                            提示：
                            请输入完整的ssr链接，不要留空格，如果线路不可用，请直接删除。
                            进入 <a href="https://plus.google.com/communities/106442142549456855872/stream/62937124-015f-4f9c-81c9-914444653b8a">这里</a>，这是个ssr分享社区，可以在里面找
                            免费的ssr，注：需要翻墙才可进入。
                        </p>
                    </Card>
                </div>
                <h3>线路名称：</h3>
                <Input onChange={this.handleChangeName} value={this.state.name}/>
                <h3>线路链接：</h3>
                <TextArea
                    style={{margin:'10px 0'}}
                    autosize={{minRows:6,maxRows:16}}
                    placeholder='输入ssr链接'
                    onChange={this.handleChangeUrl}
                    value={this.state.url}
                />
                <Button
                    type='primary'
                    onClick={this.handleAdd}
                    className='add_btn'
                >
                    添加
                </Button>
            </div>
        )
    }
}
export default Add;