import React from 'react';
import {Table,Icon,Divider,Button} from 'antd';
const {Column,ColumnGroup} = Table;
const data = [{
    key:'1',
    firstName:'disabled',
    lastName:'Brown',
    age:32,
    address:'disabled'
},{
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
},{
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    firstName: 'john',
    lastName: 'Brown',
    age: 32,
    address: 'new york no.1 lake park'
}]
const data2 = [];
for(let i = 0;i<46;i++){
    data2.push({
        key:i,
        name:`姓名 ${i}`,
        age:2 + i,
        address:`大西街${i}号`
    })
}
const data3 = [];
const columns = [{
    title:'Name',
    dataIndex:'name'
},{
    title:'Age',
    dataIndex:'age'
},{
    title:'Address',
    dataIndex:'address'
}];
for(let i=0;i<6;i++){
    data3.push({
        key:i,
        name:`姓名 ${i}`,
        age:2 + i,
        address:`大西街${i}号`
    })
}
const rowSelection = {
    onChange: (selectedRowKeys1, selectedRows) => {
        console.log(`selectedRowKeys1: ${selectedRowKeys1}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.address === 'disabled', // Column configuration not to be checked
        name: record.name,
    }),
};
class Index extends React.Component{
    state = {
        selectedRowKeys:[],
        selectedRowKeys3:[],
        loading:false,
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys3: [],
                loading: false,
            });
        }, 1000);
    }
    onSelectChange = (selectedRowKeys3) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys3);
        this.setState({ selectedRowKeys3 });
    }
    onSelectChange3 = (selectedRowKeys) =>{
        console.log('selectedRowKeys3 changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys:selectedRowKeys });
    }
    render(){
        const {loading,selectedRowKeys,selectedRowKeys3} = this.state;
        const rowSelection2 = {
            selectedRowKeys3,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys3.length > 0;
        const rowSelection3 = {
            selectedRowKeys,
            onChange: this.onSelectChange3,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(6).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return(
            <div>
                <Table
                    rowSelection={rowSelection}
                    dataSource={data}
                >
                    <ColumnGroup title='Name'>
                        <Column
                            title='first name'
                            dataIndex='firstName'
                            key='firstName'
                        />
                        <Column
                            title='last name'
                            dataIndex='lastName'
                            key='lastName'
                        />
                    </ColumnGroup>
                    <Column
                        title='Age'
                        dataIndex='age'
                        key='age'
                    />
                    <Column
                        title='Address'
                        dataIndex='address'
                        key='address'
                    />
                    <Column
                        title='Action'
                        key='action'
                        render={(text,record)=>(
                            <span>
                                <a href="javascript:;">Action-{record.name}</a>
                                <Divider type='vertical'/>
                                <a href="javascript:;">Delete</a>
                                <Divider type='vertical'/>
                                <a href="javascript:;" className='ant-dropdown-link'>
                                    More action <Icon type='down'/>
                                </a>
                            </span>
                        )}
                    />
                </Table>
                <hr/>
                <Button
                    type='primary'
                    onClick={this.start}
                    disabled={!hasSelected}
                    loading={loading}
                >
                    重新加载
                </Button>
                <span style={{marginTop:8}}>
                    {hasSelected ? `选中了${selectedRowKeys3.length}项` : null}
                </span>
                <Table rowSelection={rowSelection2} dataSource={data2}>
                    <Column
                        title='Name'
                        dataIndex='name'
                        key='name'
                    />
                    <Column
                        title='Age'
                        dataIndex='age'
                        key='age'
                    />
                    <Column
                        title='Address'
                        dataIndex='address'
                        key='address'
                    />
                </Table>
                <Table rowSelection={rowSelection3} dataSource={data3} columns={columns}></Table>
            </div>
        )
    }
}
export default Index;