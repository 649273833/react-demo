import React from 'react'
import {Collapse,List,Avatar,Button,Spin,message} from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';
const Panel = Collapse.Panel;
const text = `
 手风琴效果
 手风琴效果
 手风琴效果
 手风琴效果
`;
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];
const data2 = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];
const apiUrl = [
    'https://api.uu20.top/api/ip.php',
    'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo',

];
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            iplist:[],
            loading:true,
            loadingMore:false,
            showLoadingMore:true,
            data3:[],
            data5:[],
            loading2:false,
            hasMore:true
        }
    }
    componentDidMount(){
        axios.get(apiUrl[0])
            .then((data)=>{
                let iplist = data.data;
                this.setState({iplist:iplist})
            })
        axios.get(apiUrl[1])
            .then(data=>{
                this.setState({
                    loading:false,
                    data3:data.data,

                })
            })
        axios.get(apiUrl[0])
            .then((data)=>{
                this.setState({ data5:data.data})
            })
    };
    onLoadMore = () =>{
        this.setState({loadingMore:true});
        axios.get(apiUrl[1])
            .then(data=>{
                const data4 = this.state.data3.concat(data.data);
                // const data4 = this.state.data
                this.setState({
                    data:data4,
                    loadingMore:false
                },()=>{
                    window.dispatchEvent(new Event('resize'))
                });
            });
    };
    handleInfiniteOnLoad = () =>{
        let data6 = this.state.data5;
        this.setState({loading2:true});
        if(data6.length > 19){
            message.warning('加载完成');
            this.setState({
                hasMore :false,
                loading2:false
            });
            return
        }
        axios.get(apiUrl[0])
            .then(res=>{
                data6 = data6.concat(res.data)
                this.setState({
                    data5:data6,
                    loading:false
                })
            })
    }
    render(){
        let iplist = this.state.iplist;
        let {loading,loadingMore,showLoadingMore,data3} = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
            </div>
        ) : null;
        const customPanelStyle = {
            background: '#f7f7f7',
            borderRadius: 4,
            marginBottom: 24,
            border: 0,
            overflow: 'hidden',
        };
        return (
            <div>
                <Collapse
                    accordion
                    bordered={false}
                    defaultActiveKey={['1']}
                    onChange={(key)=>console.log(key)}
                >
                    <Panel header='标题1' key='1' style={customPanelStyle}>
                        <p>aqwefsaf</p>
                    </Panel>
                    <Panel header="This is panel header 1" key="2">
                        <Collapse
                            accordion
                            bordered={false}
                            defaultActiveKey={['1']}
                            onChange={(key)=>console.log(key)}
                        >
                            <Panel header="This is panel nest panel" key="2-1">
                                <p>{text}</p>
                            </Panel>
                            <Panel header="This is panel nest panel" key="2-2">
                                <p>{text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header='标题3' key='3' showArrow={false} style={customPanelStyle}>
                        <p>aqwefsaf</p>
                    </Panel>
                </Collapse>
                <Collapse
                    accordion
                    defaultActiveKey={['1']}
                    onChange={(key)=>console.log(key)}
                >
                    {
                        iplist.map((data)=>
                            <Panel header={data.uid} key={data.uid}>
                                <p>{data.uptime}</p>
                            </Panel>
                        )
                    }
                </Collapse>
                <div>
                    <h3>list</h3>
                    <List
                        header={<div>header</div>}
                        footer={<div>footer</div>}
                        bordered
                        size='small'
                        dataSource={data}
                        renderItem={item =>(<List.Item>{item}</List.Item>)}
                    />

                </div>
                <div>
                    <List
                        itemLayout='horizontal'
                        dataSource={data2}
                        renderItem={item =>(
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description='带有头像的列表，类似bootstarp里面的媒体对象'
                                />
                            </List.Item>
                        )}
                    />
                </div>
                <div>
                    <List
                        className='demo-loadmore-list'
                        loading={loading}
                        itemLayout='horizontal'
                        loadMore={loadMore}
                        dataSource={data3}
                        renderItem={item =>(
                            <List.Item actions={[<a href="">edit</a>, <a href="">more</a>]}>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={<a href="">title</a>}
                                    description='antd design'
                                />
                                <div>content</div>
                            </List.Item>
                        )}
                    />
                </div>
                <div className="demo-infinite-container">
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={this.handleInfiniteOnLoad}
                        hasMore={!this.state.loading && this.state.hasMore}
                        useWindow={false}
                    >
                        <List
                            dataSource={this.state.data5}
                            renderItem={item =>(
                                <List.Item key={item.uid}>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.cname}</a>}
                                        description={item.cip}
                                    />
                                    <div>content</div>
                                </List.Item>
                            )}
                        />
                    </InfiniteScroll>
                </div>
            </div>
        )
    }
}
export default  Index;