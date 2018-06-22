import React from 'react';
import {TreeSelect} from 'antd';
const TreeNode = TreeSelect.TreeNode;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
class MyTree extends React.Component{
    render(){
        let {value,value2,value3,treeData} = this.props.storeState;
        const treeStyle = {
            width:300,
            marginBottom:20
        };
        return (
            <div>
                <TreeSelect
                    showSearch
                    style={treeStyle}
                    value={value}
                    dropdownStyle={{maxHeight:400,overflow:'auto'}}
                    placeholder='请选择'
                    allowClear
                    treeDefaultExpandAll//展开所有选项
                    onChange={(value)=>this.props.dispatch({type:'onChange',treeValue1:value})}
                >
                    <TreeNode value='parent 1' title='parent 1' key='1'>
                        <TreeNode value='parent 1-0' title='parent 1-0' key='1-0'>
                            <TreeNode value='leaf1' title='my leaf' key='random'/>
                            <TreeNode value='leaf2' title='you leaf' key='random1'/>
                        </TreeNode>
                        <TreeNode value='parent 1-1' title='parent 1-1' key='1-1'>
                            <TreeNode value='sss' title={<b style={{color: '#08c'}}>sss</b>} key='random2'/>
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
                <br/>
                <TreeSelect
                    showSearch
                    style={treeStyle}
                    dropdownStyle={{maxHeight:400,overflow:'auto'}}
                    placeholder='选择一个吧'
                    value={value2}
                    allowClear
                    multiple//多选
                    treeDefaultExpandAll
                    onSelect={value =>console.log(value)}
                    onChange={(value)=>this.props.dispatch({type:'onChange2',treeValue2:value})}
                >
                    <TreeNode value='mdzz' title='妈的智障' key='2'>
                        <TreeNode value='parent 2-0' title='第一梯队' key='2-0'>
                            <TreeNode value='jingjing' title='静静' key='jingjing'/>
                            <TreeNode value='mingming' title='明明' key='mingming'/>
                        </TreeNode>
                        <TreeNode value='parent 2-1' title='第二梯队' key='2-1'>
                            <TreeNode value='junjun' title='军军' key='junjun'/>
                            <TreeNode value='feifei' title='狒狒' key='feifei'/>
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
                <br/>
                <TreeSelect
                    style={treeStyle}
                    dropdownStyle={{maxheight:400,overflow:'auto'}}
                    value={value3}
                    treeCheckable
                    showCheckdStrategy={SHOW_PARENT}
                    treeData={treeData}//后台请求数据
                    placeholder='请求数据再显示出来'
                    treeDefaultExpandAll
                    onChange={(value3)=>this.props.dispatch({type:'onChange3',treeValue3:value3})}
                />
                <br/>
            </div>
        )
    }
}
export default MyTree