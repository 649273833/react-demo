import React from 'react';
import {Card,Table,Button,Popconfirm,message,Spin} from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios';
class XianLu extends React.Component{
    state = {
        data:[],
        loading:true
    }
    confirm =(id)=> {
        this.delXianlu(id)
    }
    cancel=(e) =>{
        message.error('取消删除');
    }
    getXianLu =() =>{
        axios.get('https://api.uu20.top/api/getxianlu.php')
            .then(res=>{
                if(res.data){
                    this.setState({data:res.data,loading:false});
                }else{
                    message.warning('获取失败，请刷新！')
                }
            })
        .catch(res=>{
            message.warning('网络错误，请稍后重试！')
        })
    }
    delXianlu =(id)=> {
        axios.get('https://api.uu20.top/api/delxianlu.php',{
            params:{id:id}
        })
            .then(res=>{
                if(res.data.code > 0){
                    let data = this.state.data.filter(data => data.id !== id)
                    this.setState({data})
                    message.success('删除成功！')
                    this.getXianLu()
                }else if(res.code == -1){
                    message.warning('没有获取到对应数据！')
                }else if(res.code == -2){
                    message.warning('删除失败，请重试！')
                }
            })
            .catch(()=>{
                console.log('del err')
            })
    }
    componentDidMount (){
        this.getXianLu()
    }
    render(){
        const {data} = this.state;
        const columns = [{
            title:'ID',
            dataIndex:'id',
            sorter:(a,b)=>a.id - b.id,
        },{
            title:'Name',
            dataIndex:'name',
            render:(text,record)=> <a href={record.url}>{text}</a>
        },{
            title:'Action',
            dataIndex:'action',
            render:(text,record) =>
                <Popconfirm
                    title="你确定删除这条线路吗？"
                    onConfirm={(id)=>this.confirm(record.id)}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button
                        size='small'
                        type='danger'
                    >
                        删除
                    </Button>
                </Popconfirm>
        }];
        return(
            <div className='xianlu'>
                <div className='alert'>
                    <Card>
                            <p>
                                提示：手机需要安装软件<br/>IOS 请安装：<Link to="/Ios">ShadowBroken</Link>
                                <br/>Android 请安装：<a href="https://freed.ga/ShadowSocksR/shadowsocksr-release.apk">ShadowSocksR</a>
                                <br/>点击下方服务器列表中任意一个，会提示跳转到app内打开，app会自动导入，
                                然后就可以连接了。
                                {/*<span>https://geo.itunes.apple.com/us/app/id1183616161?mt=8&at=1000lb7S</span>*/}
                            </p>
                    </Card>
                </div>
                <div className='list'>
                    <Spin spinning={this.state.loading} delay={500} >
                        <Table columns={columns} dataSource={data} rowKey={record => record.id}/>
                    </Spin>
                </div>
            </div>
        )
    }
}
export default XianLu;