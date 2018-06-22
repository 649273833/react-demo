import React from 'react';
import {Provider,connect} from 'react-redux';
import store from './store';
import {Tabs,Icon,Radio,Button} from 'antd';
import {PaneData} from "./action";

const TabPane = Tabs.TabPane;
class Index extends React.Component{
    componentDidMount (){
        this.props.dispatch(PaneData())
    }
    render(){
        const operations = <Button type='primary'>这里可以有其他操作</Button>
        const {mode,TabPaneData,size} = this.props.storeState;
        return(
            <div>
                <Radio.Group
                    value={size}
                    size={size}
                    onChange={(e)=>this.props.dispatch({type:'ChangeSize',e:e})}
                >
                    <Radio.Button value='large'>large</Radio.Button>
                    <Radio.Button value='default'>default</Radio.Button>
                    <Radio.Button value='small'>small</Radio.Button>
                </Radio.Group>
                <Tabs defaultActiveKey='1'
                      onChange={(key)=>this.props.dispatch({type:'callback',key:key})}
                      tabBarExtraContent={operations}
                      size={size}
                >
                    <TabPane tab='tab 1' key='1'>tab 1 的内容</TabPane>
                    <TabPane disabled tab='tab 2' key='2'>tab 2 的内容</TabPane>
                    <TabPane tab={<span><Icon type='apple'/> tab 3</span>} key='3'>tab 3 的内容</TabPane>
                    <TabPane tab={<span><Icon type='android'/>tab 4</span>} key='4'>tab 4 的内容</TabPane>
                </Tabs>

                <hr/>
                <Radio.Group
                    onChange={(e)=>this.props.dispatch({type:'ChangeMode',e:e})}
                    value={mode}
                    style={{ marginBottom: 8 }}
                    size={size}
                >
                    <Radio.Button value='top'>横向上下</Radio.Button>
                    <Radio.Button value='bottom'>横向下上</Radio.Button>
                    <Radio.Button value='left'>纵向左右</Radio.Button>
                    <Radio.Button value='right'>纵向右左</Radio.Button>
                </Radio.Group>
                <Tabs
                    defaultActiveKey='5'
                    style={{height:200}}
                    tabPosition={mode}
                    size={size}
                >
                    {
                        TabPaneData.map((data)=>
                            <TabPane key={data.uid} tab={<span><Icon type='apple'/>{data.uid}</span>}>{data.cip}</TabPane>
                        )
                    }
                </Tabs>
                <Tabs type='card'>
                    <TabPane tab='tb1' key='1'>tab1</TabPane>
                    <TabPane tab='tb2' key='2'>tab2</TabPane>
                    <TabPane tab='tb3' key='3'>tab3</TabPane>
                </Tabs>
            </div>
        )
    }
}
const mapStateToProps = state =>({storeState:state});
const Main = connect (
    mapStateToProps
)(Index);
export default () =>
    <Provider store={store}>
        <Main/>
    </Provider>
