import React from 'react';
import Refast,{Component} from 'refast';
import logic from './logic';
import '../../../../public/css/todoList.pcss';
import List from './List'
import {Toast} from '../../../common/layer'

class TodoList extends Component {
    constructor(props) {
        super(props, logic);
    }
    componentDidMount() {
        this.dispatch('getTodoList');
    }
    render() {
        let {list} = this.state, {dispatch}=this;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => this.dispatch('handleAdd', this.refs['todoInput'].value)}>添加</button>
                <div className="cont clear">
                    <div className="box">
                        全部
                        <List list={list} dispatch={dispatch} type={0}/>
                    </div>
                    <div className="box">
                        未删除
                        <List list={list} dispatch={dispatch} type={1}/>
                    </div>
                    <div className="box">
                        已删除
                        <List list={list} dispatch={dispatch} type={2}/>
                    </div>
                </div>
                <Toast ref={e=>Refast.use('fn',{Toast:e})}/>
            </div>
        );
    }
}

export default TodoList;