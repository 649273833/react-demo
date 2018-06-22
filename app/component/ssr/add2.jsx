import React from 'react';
import {Provider,connect} from 'react-redux';
import store from './store';
import {Input,Card,Button,message} from 'antd';
import {handleAdd} from "./action";
const TextArea = Input.TextArea;
class Index extends React.Component{
    render(){
        let {name,url} = this.props.storeState;
        return(
            <div className='add'>
                <div className='alert'>
                    <Card>
                        <p>
                            提示：
                            请输入完整的ssr链接，不要留空格，如果线路不可用，请直接删除。
                            进入 <a href="https://plus.google.com/communities/106442142549456855872/stream/62937124-015f-4f9c-81c9-914444653b8a">这里</a>，这是个ssr分享社区，可以在里面找
                            免费的ssr，注：需要翻墙才可进入。
                        </p>
                    </Card>
                </div>
                <h4>线路名称：</h4>
                <Input onChange={(e)=>this.props.dispatch({type:'handleChangeName',nameE:e})} value={name}/>
                <h4>线路链接：</h4>
                <TextArea
                    style={{margin:'10px 0'}}
                    autosize={{minRows:6,maxRows:16}}
                    placeholder='输入ssr链接'
                    onChange={(e)=>this.props.dispatch({type:'handleChangeUrl',urlE:e})}
                    value={url}
                />
                <Button
                    type='primary'
                    onClick={(names,urls)=>this.props.dispatch(handleAdd(name,url))}
                    className='add_btn'
                >
                    添加
                </Button>
            </div>
        )
    }
}
const mapStateToProps = state =>({storeState : state});
const Main = connect(
    mapStateToProps
)(Index);
export default ()=>
    <Provider store={store}>
        <Main/>
    </Provider>