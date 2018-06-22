import React from 'react';
import {Tree} from 'antd';
const TreeNode = Tree.TreeNode;
class Index extends React.Component{
    state = {
        treeData : [
            {title:'expand to load' , key :'0'},
            {title:'expand to load' , key :'1'},
            {title:'Tree Node' , key :'2' , isleaf : true},
        ],
    };
    onLoadData = (treeNode) =>{
        return new Promise((resolve)=>{
            if(treeNode.props.children){
                resolve();
                return;
            }
            setTimeout(()=>{
                treeNode.props.dataRef.children = [
                    {title:'child node',key:`${treeNode.props.eventKey}-0`},
                    {title:'child node',key:`${treeNode.props.eventKey}-1`},
                ];
                this.setState({
                    treeData:[...this.state.treeData],
                })
                resolve()
            },1000)
        })
    }
    renderTreeNode = (data) =>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <TreeNode title={item.title} dataRef={item} key={item.key}>
                        {this.renderTreeNode(item.children)}
                    </TreeNode>
                )
            }
            return <TreeNode {...item} dataRef={item}/>
        })
    }
    render(){
        return(
            <div>
                <Tree loadData={this.onLoadData}>
                    {this.renderTreeNode(this.state.treeData)}
                </Tree>
            </div>
        )
    }
}
export default Index;