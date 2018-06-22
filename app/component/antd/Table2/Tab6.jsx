import React from 'react';
import {Table} from 'antd';
const columns =[{
    title:'Name',
    dataIndex:'name',
    render:text => <a href="javascript:;">{text}</a>
},{
    title:'Cash Assets',
    className:'column-money',
    dataIndex:'money',
},{
    title:'Address',
    dataIndex:'address',
}, {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: () => <a href="javascript:;">Delete</a>
}];
const data = [{
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
    description:'可以展开看里面的内容'
}, {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
    description:'可以展开看里面的内容'
}, {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park',
    description:'可以展开看里面的内容'
}];
const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        props: {},
    };
    if (index === 5) {
        obj.props.colSpan = 0;
    }
    return obj;
};
const columns2 = [{
    title:'Name',
    dataIndex :'name',
    render:(text,row,index) => {
        if(index < 5) {
            return <a href="javascript:;">{text}</a>;
        }
        return {
            children: <a href="javascript:;">{text}</a>,
            props:{
                colSpan:5
            },
        };
    },
},{
    title:'Age',
    dataIndex:'age',
    render:renderContent,
},{
    title:'index phone',
    colSpan:2,
    dataIndex:'tel',
    render:(value,row,index)=>{
        const obj = {
            children: value,
            props: {},
        };
        if (index === 2) {
            obj.props.rowSpan = 2;
        }
        if(index === 3){
            obj.props.colSpan = 0;
        }
        if(index === 4){
            obj.props.colSpan = 1;
        }
        return obj;
    },
}, {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: renderContent,
}, {
    title: 'Address',
    dataIndex: 'address',
    render: renderContent,
}];
const data2 = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
}, {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
}];
class Index extends React.Component{
    render(){
        return(
            <div>
                <Table
                   columns={columns}
                   dataSource={data}
                   bordered
                   expandedRowRender={record => <p style={{margin:0}}>{record.description}</p>}
                   title={()=>'Header'}
                   footer={()=>'Footer'}
                />
                <Table
                    dataSource={data2}
                    columns={columns2}
                    bordered
                    title={()=>'header'}
                    footer={()=>'footer'}
                />
            </div>
        )
    }
}
export default Index