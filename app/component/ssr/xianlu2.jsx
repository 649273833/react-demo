import React from 'react';
import store from './store';
import {Provider,connect} from 'react-redux';
import {Card,Table,Button,Popconfirm,message,Spin} from 'antd';
import {Link} from 'react-router-dom'
import {getXianLu,confirm} from "./action";
class Index extends React.Component{
    componentDidMount () {
        this.props.dispatch(getXianLu())
    }
    cancel=(e) =>{
        message.error('取消删除');
    }
    render(){
        let {loading,data} = this.props.storeState;
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
                    onConfirm={(id)=>this.props.dispatch(confirm(record.id))}
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
                    <Spin spinning={loading} delay={500} tip='loading' >
                        <Table columns={columns} dataSource={data} rowKey={record => record.id}/>
                    </Spin>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({storeState:state});
const Main = connect(
    mapStateToProps
)(Index);

export default () =>
    <Provider store={store}>
        <Main/>
    </Provider>