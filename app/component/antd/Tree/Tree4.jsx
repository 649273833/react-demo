import React from 'react';
import {Tree} from 'antd';
const TreeNode = Tree.TreeNode;
class Index extends React.Component{
    state = {
        treeData :[{
            title:'parent 0-0',
            key:'0-0',
            children:[
                {title:'leaf 0-0-1',key:'0-0-1'},
                {title:'leaf 0-0-2',key:'0-0-2'}
            ],
        },{
            title:'parent 0-1',
            key:'0-1',
            children:[
                {title:'leaf 0-1-1',key:'0-1-1'},
                {title:'leaf 0-1-2',key:'0-1-2'},
                {title:'leaf 0-1-2',key:'0-1-3'},
            ],
        },{
            title:'parent 0-2',
            key:'0-2'
        }]
    };
    renderTreeNode = (data) =>{
        return data.map((item)=>{
            if(item.children){
                return(
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {this.renderTreeNode(item.children)}
                    </TreeNode>
                )
            }
            return <TreeNode {...item}  dataRef={item}/>
        })
    }
    render(){
        return(
            <div>
                <Tree
                    showLine
                    defaultExpandedKeys={['0-1']}
                    checkedkeys={['0-2']}
                >
                    {this.renderTreeNode(this.state.treeData)}
                </Tree>
            </div>
        )
    }
}
export default Index