import React from 'react';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react';
import State from './State';
import List from './List'

useStrict(true);
const newState = new State();
@observer
class Index extends React.Component{
    componentDidMount() {
        newState.postList()
        newState.ipList()
        newState.cityList()
        console.log(3)
    }
    render(){
        return(
            <div className='todoList'>
                <input type="text" ref='todoInput'/>
                <button className='btn-info' onClick={() => newState.add(this.refs['todoInput'].value)}>添加</button>
                <div className='cont'>
                    <div className='box'>
                        全部
                        <List type={0} store={newState}/>
                    </div>
                    <div className='box'>
                        未删除
                        <List type={1} store={newState}/>
                    </div>
                    <div className='box'>
                        已删除
                        <List type={2} store={newState}/>
                    </div>
                    <div className='box'>
                        ip
                        {
                            newState.iplist ?
                                newState.iplist.map(data =>
                                    <li key={data.uid}>
                                        {data.cip}
                                    </li>
                                )
                                :
                                null
                        }
                    </div>
                    <div className='box'>
                        city
                        {
                            newState.citylist ?
                                newState.citylist.map(data =>
                                    <li key={data.uid}>
                                        {data.cname}
                                    </li>
                                )
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Index;