import React from 'react';
import {Table} from 'antd';
import axios from 'axios';
import reqwest from 'reqwest';
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
}, {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
    ],
    width: '20%',
}, {
    title: 'Email',
    dataIndex: 'email',
}];
class Index extends React.Component {
    state={
        data:[],
        pagination:{},
        loading:false,
    };
    handleTablChange = (pagination,filters,sorter)=>{
        const pager = this.state.pagination
        pager.current = pagination.current;
        this.setState({
            pagination:pager,
        });
        this.fetch({
            results:pagination.pageSize,
            page:pagination.current,
            sortField:sorter.field,
            sortOrder:sorter.order,
            filters,
        });
    }
    fetch = (params = {}) =>{
        this.setState({loading:true});
        reqwest({
            url: 'https://randomuser.me/api',
            method: 'get',
            data: {
                results: 10,
                params,
            },
            type: 'json',
        }).then((data) => {
            const pagination = this.state.pagination;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination,
            });
        });
    }

    componentDidMount(){
        this.fetch();
    }
    render(){
        return(
            <div>
                <Table
                    // size='middle'
                    size='small'
                    columns={columns}
                    rowKey={record => record.registered}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    loading={this.state.loading}
                    onChange={this.handleTablChange}
                />
            </div>
        )
    }
}
export default Index;