import React from 'react';
import {Table,Select} from 'antd';
const Option = Select.Option;

class Index extends React.Component{
    state = {
        setAB:'0',
        sortedInfo:null
    };
    handleChangeAB = (value) =>{
        this.setState({
            sortedInfo:{
                order:'descend',
                columnKey : 'uid'
            },
            setAB:value
        })
    };

    render(){
        let {sortedInfo,setAB} = this.state;
        sortedInfo = sortedInfo || {};
        let AB = setAB === '0' ? (a,b)=>a.uid - b.uid   : (a,b)=>b.uid  - a.uid ;
        const changeAB = (
            <Select
                defaultValue='0'
                style={{width:100}}
                onChange={this.handleChangeAB}
            >
                <Option value='0'>大到小</Option>
                <Option value='1'>小到大</Option>
            </Select>
        );
        const columns = [{
            title:changeAB,
            dataIndex:'uid',
            key:'uid',
            sorter:AB,
            sortOrder:sortedInfo.columnKey === 'uid' && sortedInfo.order,
        },{
            title:'Num',
            dataIndex:'num',
            key:'num',
            sorter:(a,b)=>a.num - b.num,
        },{
            title: 'Age',
            dataIndex: 'age',
            key:'age',
            sorter: (a,b) => a.age - b.age,
        }];
        const data =[{
            key:'1',
            uid:'1',
            num:'32',
            age:'43'
        },{
            key:'2',
            uid:'2',
            num:'56',
            age:'22'
        },{
            key:'3',
            uid:'8',
            num:'232',
            age:'11'
        },{
            key:'4',
            uid:'4',
            num:'67',
            age:'122'
        }];
        const rowSelection = {
            onChange:(selectedRowKeys,selectedRows) =>{
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            }
        };

        return(
            <div>
                <Table dataSource={data} columns={columns} rowSelection={rowSelection}/>
            </div>
        )
    }
}
export default Index;