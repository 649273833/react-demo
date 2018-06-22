import React from 'react';
import {Card,Input} from 'antd';
const {Meta} = Card;
const tabList = [{
    key:'tab1',
    tab:'tab1'
},{
    key:'tab2',
    tab:'tab2'
}];
const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};
const tabListNoTitle = [{
    key:'article',
    tab:'article',
},{
    key:'app',
    tab:'app'
},{
    key:'project',
    tab:'project'
}];
const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

class Index extends React.Component{
    state={
        key:'tab1',
        noTitleKey:'app',
        uname:'',
        upwd:''
    };
    onTabChange = (key,type) =>{
        console.log(key,type);
        this.setState({[type]:key})
    }
    render(){
        const gridStyle ={
            width:'25%',
            textAlign:'center'
        };
        return(
            <div className='content-antd'>
                <div style={{ background: '#ECECEC', padding: '30px'}}>
                    <Card
                        title='card'
                        extra={<a href="#">more</a>}
                        style={{width:300}}
                        bordered={false}
                    >
                        <p>1234</p>
                        <p>1234</p>
                        <p>1234</p>
                    </Card>
                </div>
                <br/>
                <div>
                    <Card style={{width:300}}>
                        <p>1321321</p>
                        <p>1321321</p>
                        <p>1321321</p>
                        <p>1321321</p>
                    </Card>
                </div>
                <br/>
                <div>
                    <Card
                        hoverable
                        style={{width:200,display:'inline-block'}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title='图片card'
                            description='来自：www.instagram.com'
                        />
                    </Card>
                    <Card
                        hoverable
                        style={{width:200,display:'inline-block'}}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta
                            title='图片2'
                            description='这里就写点简单的介绍'
                        />
                    </Card>
                    <Card
                        hoverable
                        style={{width:200,display:'inline-block'}}
                        cover={<img src={require('../../../public/img/b2.jpg')} alt=""/>}
                    >
                        <Meta
                            title='背景图片'
                            description='这个是个背景图片'
                        />
                    </Card>
                </div>
                <div>
                    <Card title='card title'>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                        <Card.Grid style={gridStyle}>content</Card.Grid>
                    </Card>
                </div>
                <div>
                    <Card title='card title'>
                        <Card
                            title='sub tilte'
                            type='inner'
                            style={{marginTop:16}}
                            extra={<a href="#">more</a>}
                        >
                            content
                        </Card>
                        <Card
                            title='sub title'
                            style={{marginTop:16}}
                            type='inner'
                            extra={<a href="#">more</a>}
                        >
                            content
                        </Card>
                    </Card>
                </div>
                <div>
                    <Card
                        style={{width:'100%'}}
                        title='tab card'
                        extra={<a href="#">more</a>}
                        tabList={tabList}
                        onTabChange={(key) =>{this.onTabChange(key,'key')}}
                    >
                        {contentList[this.state.key]}
                    </Card>
                    <Card
                        style={{ width: '100%' }}
                        tabList={tabListNoTitle}
                        activeTabKey={this.state.noTitleKey}
                        onTabChange={(key) => { this.onTabChange(key, 'noTitleKey'); }}
                    >
                        {contentListNoTitle[this.state.noTitleKey]}
                    </Card>
                </div>

            </div>
        )
    }
}
export default Index;