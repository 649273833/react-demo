import React from 'react';
import {Table,message} from 'antd'
import 'antd/dist/antd.css';
import reqwest from 'reqwest';
import axios from "axios/index";
const columns = [{
    title:'ID',
    dataIndex:'uid',
},{
    title:'姓名',
    dataIndex:'name'
},
    {
    title:'手机号码',
    dataIndex:'phone'
},{
    title:'微信',
    dataIndex:'weixin'
},
    {
    title:'病情描述',
    dataIndex:'info'
},{
    title:'地址',
    dataIndex:'address'
}];
const columns2 =[{
    title:'ID',
    dataIndex:'uid',
    sorter:(a,b)=>a.uid-b.uid
},{
    title:'CIP',
    dataIndex:'cip',
},{
    title:'CID',
    dataIndex:'cid'
},{
    title:'CNAME',
    dataIndex:'cname'
},{
    title:'UPTIME',
    dataIndex:'uptime'
}];
const data =[{
    key:'1',
    uid:'1',
    name:'qe1',
    phone:'12324235',
    weixin:'qewe',
    info:'是发放',
    address:'成都'
},{
    key:'2',
    uid:'2',
    name:'qe2',
    phone:'12324235',
    weixin:'qewe',
    info:'是发放',
    address:'成都'
},{
    key:'3',
    uid:'3',
    name:'qe3',
    phone:'12324235',
    weixin:'qewe',
    info:'是发放',
    address:'成都'
}]
const style = {
    width:'800px',
    maxWidth:'100%',
    margin:'20px auto'
}
class Index extends React.Component{
    state = {
        data:[],
        pagination:{},
        loading:false,
    }
    handleTabChange = (pagination,filters,sorter) =>{
        const pager = this.state.pagination;
        pager.current = pagination.current;
        this.setState({
            pagination:pager
        })
        this.fetch({
            results:pagination.pageSize,
            page:pagination.current,
            sortField:sorter.field,
            sortOrder:sorter.order,
            filters,
        });
    }
    fetch = () =>{
        this.setState({loading:true});
        axios.get('https://api.uu20.top/api/ip.php')
            .then(res =>{
                console.log(res.data)
                const pagination = this.state.pagination;
                // pagination.total = 19;
                this.setState({
                    loading: false,
                    data: res.data,
                    pagination,
                });
            })
            .catch(res =>{
                message.error('获取数据失败，请刷新重试！')
            })
    };
    componentDidMount(){
        this.fetch();
    }
    render(){
        return(
            <div style={style}>
                <Table
                    columns={columns2}
                    // dataSource={data}
                    bordered
                    rowKey={record => record.uid}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTablChange}
                />
            </div>
        )
    }
}
export default Index