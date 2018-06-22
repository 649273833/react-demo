import React from 'react';
import {Table,Button,Select} from 'antd';
const Option = Select.Option;
const data = [{
    key: '1',
    uid:'5',
    name: 'John Brown',
    age: 22,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    uid: '4',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    uid: '2',
    name: 'Joe Black',
    age: 52,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    uid: '8',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];
class Index extends React.Component{
    state = {
        filteredInfo:null,
        sortedInfo:null,
        setAB:0,
    };
    handleChange = (pagination,filters,sorter) =>{
      console.log('Various parameters', pagination, filters, sorter);
      this.setState({
          filteredInfo:filters,
          sortedInfo:sorter,
      })
    };
    clearFilters = ()=>{
        this.setState({filteredInfo:null})
    }
    clearAll = () =>{
        this.setState({
            filteredInfo:null,
            sortedInfo:null
        })
    }
    setAgeSort = () =>{
        this.setState({
            sortedInfo:{
                order:'descend',
                columnKey:'age',
            },
        });
    };
    setUidSort = (value) =>{

        this.setState({
            sortedInfo:{
                order:'descend',
                columnKey : 'uid'
            },
            setAB:value
        })
        console.log(this.state.setAB)
    }
    render(){
        let {sortedInfo,filteredInfo,setAB} = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        let AB = setAB === '0' ? ((a,b)=>a.uid - b.uid ): ((a,b)=>b.uid - a.uid);
        console.log(AB)
        const columns = [{
            title:'Name',
            dataIndex:'name',
            key:'name',
            filters:[
                {text:'Joe',value:'Joe'},
                {text:'Jim',value:'Jim'}
            ],
            filteredValue:filteredInfo.name || null,
            onFilter:(value,record) => record.name.includes(value),
            sorter:(a,b)=>a.name.length - b.name.length,
            sortOrder:sortedInfo.columnKey === 'name' && sortedInfo.order,
        },{
            title:'Uid',
            dataIndex:'uid',
            key:'uid',
            // sorter:(a,b)=>a.uid - b.uid,
            sorter:AB,
            sortOrder:sortedInfo.columnKey === 'uid' && sortedInfo.order,
        },{
            title:'Age',
            dataIndex:'age',
            key:'age',
            sorter:(a,b)=>a.age - b.age,
            sortOrder:sortedInfo.columnKey === 'age' && sortedInfo.order,
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            filters: [
                { text: 'London', value: 'London' },
                { text: 'New York', value: 'New York' },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        }];
        return(
            <div>
                <div className='table-operations'>
                    <Button onClick={this.setAgeSort}>sort age</Button>
                    <Select defaultValue='0'
                            style={{width:120}}
                            onChange={this.setUidSort}
                    >
                        <Option value='0'>大到小排序</Option>
                        <Option value='1'>小到大排序</Option>
                    </Select>
                    <Button onClick={this.clearFilters}>clear filters</Button>
                    <Button onClick={this.clearAll}>clear filters and sorters</Button>
                </div>
                <Table dataSource={data} columns={columns} onChange={this.handleChange}/>

            </div>
        )
    }
}
export default Index;