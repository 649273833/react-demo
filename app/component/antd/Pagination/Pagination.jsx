import React from 'react';
import {Pagination} from 'antd';
class MyPage extends React.Component{
    render(){
        let {pageNumber,current} = this.props.storeState;
        console.log(current);
        return(
            <div>
                <Pagination size='small' defaultCurrent={1} total={50}/>
                <Pagination defaultCurrent={6} total={500}/>
                <Pagination showQuickJumper defaultCurrent={6} total={pageNumber} />
                <Pagination
                            size='small'
                            showQuickJumper
                            onShowSizeChange={(current,pagesize)=>this.props.dispatch({type:'onShowSizeChange',obj:{current1:current,pagesize:pagesize}})}
                            onChange={(pageNumber)=>this.props.dispatch({type:'onChangeJumper',pageNumber:pageNumber})}
                            defaultCurrent={1}
                            total={500}
                            showSizeChanger
                            showTotal={(total,range)=>`${range[0]}-${range[1]} 共${total}条数据`}
                />
                <Pagination simple defaultCurrent={2} total={50}/>
                <Pagination current={current}
                            showTotal={total=>`一共 ${total} 条数据：`}
                            total={50}
                            onChange={(page)=>this.props.dispatch({type:'setCurrent',page:page})}/>

            </div>
        )
    }
}
export default MyPage