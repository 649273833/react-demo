import React from 'react';
import List from './List';
import '../../../../public/css/todoList.pcss';
import "babel-polyfill";
import apiRequestAsync from '../../../../public/js/apiRequestAsync';
import {urlParam} from "../../../../public/js/utils";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleItemEdit = this.handleItemEdit.bind(this);
    }

    handleAdd() {
        let item = this.refs['todoInput'].value;
        if (item) {
            let list = this.state.list;
            list.push({id: list.length + 1, title: item, status: 1});
            this.setState({list: list})
        } else {
            alert('不能为空')
        }
    }

    handleItemEdit(id, status) {
        let list = this.state.list;
        list.find(data => data.id === id).status = status;
        this.setState({list: list})
    }
    async handleTodoList() {
        let todoList = await apiRequestAsync.post('todoList');
        this.setState({list: todoList.list});
        let todoList1 = await apiRequestAsync.post('todoList');

        let todoList2 = await apiRequestAsync.post('todoList');

    }
    componentDidMount() {
        // apiRequest.get('todoList',data=>this.setState({list:data.list}))
        this.handleTodoList()
    }

    render() {
        let {list} = this.state;
        let {location}=this.props
        return (
            <div className="todoList">
                <input className='addinput' type="text" ref="todoInput"/>
                <button className='btn btn-def' onClick={this.handleAdd}>添加</button>
                <div className="cont clear">
                    <div className="box">
                        <span>全部</span>
                        <List list={list} handleItemEdit={this.handleItemEdit} type={0}/>
                    </div>
                    <div className="box">
                        <span>未删除</span>
                        <List list={list} handleItemEdit={this.handleItemEdit} type={1}/>
                    </div>
                    <div className="box">
                        <span>已删除</span>
                        <List list={list} handleItemEdit={this.handleItemEdit} type={2}/>
                    </div>
                </div>
                <div>
                    {
                        location ?
                            <div>
                                <div>hash:{location.hash}</div>
                                <div>serach:{location.search}</div>
                                <div>pathname:{urlParam('sort',location.pathname)}</div>
                                <div>state:{location.state && location.state.fromDashboard}</div>
                            </div>
                            :
                            <div>没有location</div>
                    }
                </div>
            </div>
        );
    }
}

export default TodoList;