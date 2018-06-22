import React from 'react';
import {Table} from 'antd';
const columns = [{
    title:'Name',
    dataIndex:'name',
    key:'name'
},{
    title:'Age',
    dataIndex:'age',
    key:'age',
    width:'12%'
},{
    title:'Address',
    dataIndex:'address',
    key:'address',
    width:'30%'
}];
const data = [{
    key: 1,
    name: 'John Brown sr.',
    age: 60,
    address: 'New York No. 1 Lake Park',
    children: [{
        key: 11,
        name: 'John Brown',
        age: 42,
        address: 'New York No. 2 Lake Park',
    }, {
        key: 12,
        name: 'John Brown jr.',
        age: 30,
        address: 'New York No. 3 Lake Park',
        children: [{
            key: 121,
            name: 'Jimmy Brown',
            age: 16,
            address: 'New York No. 3 Lake Park',
        }],
    }, {
        key: 13,
        name: 'Jim Green sr.',
        age: 72,
        address: 'London No. 1 Lake Park',
        children: [{
            key: 131,
            name: 'Jim Green',
            age: 42,
            address: 'London No. 2 Lake Park',
            children: [{
                key: 1311,
                name: 'Jim Green jr.',
                age: 25,
                address: 'London No. 3 Lake Park',
            }, {
                key: 1312,
                name: 'Jimmy Green sr.',
                age: 18,
                address: 'London No. 4 Lake Park',
            }],
        }],
    }],
}, {
    key: 2,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];
const columns2 =[
    {title:'full name',width:100,dataIndex:'name',key:"name",fixed:'left'},
    {title:'age',width:100,dataIndex:'age',key:'age',fixed:'left'},
    {title:'columns1',dataIndex:'columns',key:'1'},
    {title:'columns1',dataIndex:'columns',key:'2'},
    {title:'columns1',dataIndex:'columns',key:'3'},
    {title:'columns1',dataIndex:'columns',key:'4'},
    {title:'columns1',dataIndex:'columns',key:'5'},
    {title:'columns1',dataIndex:'columns',key:'6'},
    {title:'columns1',dataIndex:'columns',key:'7'},
    {
        title:'Action',
        dataIndex:'action',
        key:'action',
        fixed:'right',
        width:100,
        render:()=> <a href="javascript:;">action</a>
    }
];
const data2 =[{
    key:'1',
    name:'john brown',
    age:32,
    columns:'columns1'
},{
    key:'2',
    name:'jim green',
    age:40,
    columns:'columns2'
}]
const rowSelection = {
    onChange:(selectedRowKeys,selectedRows) =>{
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
    },
    onSelect:(record,selected,selectedRows)=>{
        console.log(record,selected,selectedRows);
    },
    onSelectAll:(selected,selectedRows,changeRows)=>{
        console.log(selected,selectedRows,changeRows)
    }
};
class Index extends React.Component{
    render(){
        return(
            <div>
                <Table
                    scroll={{y : 240}}
                    columns={columns}
                    dataSource={data}
                    rowSelection={rowSelection}
                />
                <Table
                    columns={columns2}
                    dataSource={data2}
                    scroll={{x:1300}}
                />
            </div>
        )
    }
}
export default Index;
