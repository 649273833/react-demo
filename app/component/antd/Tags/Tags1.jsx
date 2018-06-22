import React from 'react';
import {Tag,Input,Tooltip,Icon,message,Button} from 'antd';
const {CheckableTag} = Tag;
function preventDefault(e) {
    e.preventDefault();
    console.log('点击了，但是阻止了默认事件。');
}
class Index extends React.Component{
    state = {
        tags:['tag1','tag2','tag3'],
        inputVisible:false,
        inputValue:'',
        chnecked:true
    }
    handleClose = (removedTag) =>{
        const tags = this.state.tags.filter(tag =>tag !== removedTag);
        console.log(tags);
        this.setState({tags})
    };
    showInput = ()=> {
        this.setState({ inputVisible: true }, () => this.input.focus())
    }
    handleInputChange = (e)=>{
        this.setState({inputValue:e.target.value})
    }
    handleInputConfirm = () =>{
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if(inputValue && tags.indexOf(inputValue) === -1){
            tags = [...tags,inputValue]
        }else {
            message.error('已经有相同的tag了')
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible:false,
            inputValue:'',
        })
    };
    saveInputRef = input =>this.input = input;
    handleChange = (checked) =>{
        this.setState({checked})
        console.log(checked)
    }
    render(){
        const {tags,inputValue,inputVisible} = this.state;
        const checkTagElem = (
            <CheckableTag
                style={{border:'1px solid #ffbb96'}}
                checked={this.state.checked}
                onChange={this.handleChange}
            />
        )
        return(
            <div>
                <Tag>tag 1</Tag>
                <Tag><a href="www.re.uu20.top/antd.html#/Antd/MyTags/Tags1">link</a></Tag>
                <Tag closable onClose={(e)=>console.log(e)}>tag 3</Tag>
                <Tag closable onClose={preventDefault}>tag 4</Tag>
                <Tag color='magenta'>magenta</Tag>
                <Tag color='volcano'>volcano</Tag>
                <Tag color='#f50'>#f50</Tag>
                <Tag color='#87d068'>#87d068</Tag>
                <br/>
                checkTagElem
                <br/>
                <div style={{marginTop:30}}>
                    {
                        tags.map((tag,index)=>{
                            const isLongTag = tag.length > 20;
                            const tagElem = (
                                <Tag key={tag} closable={index !== 0}
                                     afterClose={()=>this.handleClose(tag)}
                                >
                                    {isLongTag ? `${tag.slice(0,20)}...` : tag}
                                </Tag>
                            );
                            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> :tagElem;
                        })
                    }
                    {
                        inputVisible && (
                            <Input
                                ref={this.saveInputRef}
                                type='text'
                                size='small'
                                style={{width:80}}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                            />
                        )
                    }
                    {
                        !inputVisible && (
                            <Tag
                                onClick={this.showInput}
                                style={{ background: '#fff', borderStyle: 'dashed' }}
                            >
                                <Icon type='plus'/>
                                new tag
                            </Tag>
                        )
                    }
                    {
                        inputVisible && (
                            <Button type='success' size='small' style={{marginLeft:10}} onClick={this.handleInputConfirm}>确认</Button>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default  Index;