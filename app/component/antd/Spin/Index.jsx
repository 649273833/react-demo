import React from 'react';
import {Spin,Alert,Icon,Switch,Anchor,BackTop,Divider} from 'antd';
import {MyAnchor} from '../../../public/js/utils';
const { Link } = Anchor;
class Index extends React.Component{
    state = {
        loading:false
    }
    toggle = (value) =>{
        this.setState({loading:value})
    }
    render(){
        const antIcon = <Icon type='loading' spin style={{fontSize:24}} />
        return(
            <div className='content-antd'>
                <BackTop/>
                <div>
                    <a onClick={()=>MyAnchor('spin1')}>spin1</a>
                    <a onClick={()=>MyAnchor('spin2')}>spin2</a>
                </div>
                <div className='example'>
                    <Spin/>
                </div>
                <Spin tip='loading...' >
                    <Alert
                        type='info'
                        message='alert message title'
                        description='内容内容内容内容内容内容内容'
                    />
                </Spin>
                <div className='example' id='spin1' >
                    <Spin size='small' indicator={antIcon}/>
                </div>
                <div style={{height:800}}>
                    kong
                </div>

                <Spin delay={500}  spinning={this.state.loading} tip='加载中'>
                    <div>
                        <p>123</p>
                        <p>123</p>
                        <p>123</p>
                    </div>
                </Spin>

                <div id='spin2'>
                   改变状态，500ms后加载 <Switch checked={this.state.loading} onChange={this.toggle}></Switch>
                </div>
                <div style={{height:800}}>
                    kong
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi sit vero! Eos eum magnam numquam odit perferendis quod rerum vero. Est in libero quos sed tempora! Et nisi, unde.</p>
                    <Divider/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aliquid amet consectetur debitis in natus perferendis placeat, quia, quod rerum, saepe tempore. Atque consequatur inventore labore molestias qui quibusdam.</p>
                    <Divider>标题</Divider>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque, dolore ea est exercitationem explicabo harum illo inventore ipsa minus necessitatibus nemo neque nobis officiis placeat quia sapiente, sit tempore.</p>
                    <Divider dashed/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dicta dolores ducimus ea fugiat id perspiciatis placeat quae suscipit voluptates. Accusamus beatae ipsa itaque molestiae odit perferendis, quibusdam quisquam ratione.</p>
                    <Divider orientation='left'>标题在左边</Divider>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae commodi, dignissimos doloribus ea excepturi minima necessitatibus nisi, possimus quae quaerat qui sunt, tenetur totam ullam. Earum eos ex quasi?</p>
                    <Divider orientation='right'>标题在右边</Divider>
                    <br/><br/>

                    <a href="">Link</a>
                    <Divider type='vertical'/>
                    <a href="">Link</a>
                    <Divider type='vertical'/>
                    <a href="">Link</a>
                </div>
            </div>

        )
    }
}
export default Index;