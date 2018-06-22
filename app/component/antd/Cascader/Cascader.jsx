import React from 'react'
import {Cascader} from 'antd';

class MyCascader extends React.Component{
    render(){
        let {options} = this.props.storeState;
        function filter(inputValue, path) {
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }
        const displayRender = (label) =>{
            return label[label.length - 1];
        };
        return(
            <div>
                <Cascader
                    size='large'
                    options={options}
                    placeholder='请选择地区'
                    expandTrigger='hover'
                    displayRender={displayRender}
                    onChange={(val)=>this.props.dispatch({type:'onChange1',val:val})}
                />
                <br/>

                <Cascader
                    defaultValue={['chengdu','gaoxinqu','fuhuayuan']}
                    options={options}
                    placeholder='请选择地区'
                    onChange={(val)=>this.props.dispatch({type:'onChange1',val:val})}
                />
                <br/>
                <Cascader
                    size='small'
                    options={options}
                    placeholder='搜索/选择地区'
                    onChange={(val,selval)=>this.props.dispatch({type:'onChange1',casObj:{val:val,selval:selval}})}
                    showSearch={{ filter }}
                />
                <br/>
            </div>
        )
    }
}
export default MyCascader;