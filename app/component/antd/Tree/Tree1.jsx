import React from 'react';
import {Tree,Icon} from 'antd';
const TreeNode = Tree.TreeNode;
class Index extends React.Component{
    onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    }
    onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    }
    render(){
        return(
            <div>
                <Tree
                    checkable
                    showIcon
                    defaultSelectedKeys={['0-0-0','0-0-1']}
                    defaultExpandedKeys={['0-0-0','0-0-1']}
                    defaultCheckedKeys={['0-0-0','0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                >
                    <TreeNode title='parent 1' key='0-0'>
                        <TreeNode title='parent 1-0' key='0-0-0' disabled>
                            <TreeNode title='leaf' key='0-0-0-0' disableCheckbox/>
                            <TreeNode title='leaf' key='0-0-0-1'/>
                        </TreeNode>
                        <TreeNode title='parent 1-1' key='0-0-1'>
                            <TreeNode title={<span style={{color : '#1890ff' }}>sss</span>} key='0-0-1-0'/>
                            <TreeNode title={<span>smile</span>} key='0-0-1-1'/>
                        </TreeNode>
                        <TreeNode title='smile 1-2' icon={<Icon type="smile-o" />}  key='0-0-2'>
                            <TreeNode icon={<Icon type='meh-o'/>} title='meh-o' key='0-0-2-0'/>
                            <TreeNode icon={({selected})=>(<Icon type={selected ? 'frown' : 'frown-o'}/>)}
                                      title='frown' key='0-0-2-1'
                            />
                        </TreeNode>
                    </TreeNode>
                </Tree>
            </div>
        )
    }
}
export default Index;