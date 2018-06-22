import React from 'react';
import {Tree} from 'antd';
const TreeNode = Tree.TreeNode;
const treeData = [{
    title:'0-0',
    key:'0-0',
    children:[{
        title:'0-0-0',
        key:'0-0-0',
        children:[
            {title:'0-0-0-0',key:'0-0-0-0'},
            {title:'0-0-0-1',key:'0-0-0-1'},
            {title:'0-0-0-2',key:'0-0-0-2'},
        ],
    },{
        title:'0-0-1',
        key:'0-0-1',
        children:[
            {title:'0-0-1-0',key:'0-0-1-0'},
            {title:'0-0-1-1',key:'0-0-1-1'},
            {title:'0-0-1-2',key:'0-0-1-2'},
        ]
    },{
        title:'0-0-2',
        key:'0-0-2'
    }],
},{
    title:'0-1',
    key:'0-1',
    children:[
        {title:'0-1-0-0',key:'0-1-0-0'},
        {title:'0-1-0-1',key:'0-1-0-1'},
        {title:'0-1-0-2',key:'0-1-0-2'},
    ],
},{
    title:'0-2',
    key:'0-2'
}];
class Index extends React.Component{
    state = {
        expandedKeys:['0-0-0','0-0-1'],
        autoExpandParent:true,
        checkedKeys:['0-0-0'],
        selectedKeys:[],
    };
    onExpand = (expandedKeys) =>{
        console.log('onExpand',arguments);
        this.setState({
            expandedKeys,
            autoExpandParent:false,
        })
    };
    onCheck = (checkedKeys)=>{
        console.log('onCheck',checkedKeys);
        this.setState({checkedKeys})
    }
    renderTreeNode = (data) =>{
        return data.map((item) =>{
            if(item.children){
                return(
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNode(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode {...item}/>
        })
    }
    render(){
        const {expandedKeys,autoExpandParent,checkedKeys,selectedKeys} = this.state
        return(
            <div>
                <Tree
                    showLine
                    checkable
                    onExpand={this.onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onCheck={this.onCheck}
                    checkedKeys={checkedKeys}
                    onSelect={this.onSelect}
                    selectedKeys={selectedKeys}
                >
                    {this.renderTreeNode(treeData)}
                </Tree>
            </div>
        )
    }
}
export default Index