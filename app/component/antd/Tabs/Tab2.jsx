import React from 'react';
import {Tabs,Button} from 'antd';
const TabPane = Tabs.TabPane;
class Index extends React.Component{
    constructor(props){
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
            { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
            { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
        ];
        this.state= {
            activeKey:panes[1].key,
            panes,
        }
    }
    onChange = (activeKey)=>{
        console.log('activeKey:',activeKey);
        this.setState({activeKey})
    };
    onEdit = (targetKey,action)=>{
        console.log('targetKey:',targetKey)
        this[action](targetKey)
    };
    add=()=>{
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title:`newTab${this.newTabIndex}`,content:`Content of new Tab${this.newTabIndex}`,key:activeKey})
        this.setState({panes,activeKey})
    };
    remove= (targetKey)=>{
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((data,i)=>{
            if(data.key === targetKey ){
                lastIndex = i ;
                console.log(lastIndex)
            }
        });
        const panes = this.state.panes.filter(data => data.key !== targetKey);
        if(lastIndex >= 0 && activeKey === targetKey){
            activeKey = panes[lastIndex].key;
        }
        this.setState({panes,activeKey});
    }
    render(){
        return(
            <div>
                <div style={{marginBottom:16}}>
                    <Button onClick={this.add}>add</Button>
                </div>
                <Tabs
                    hideAdd
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    type='editable-card'
                    onEdit={this.onEdit}
                >
                    {this.state.panes.map(data =>
                        <TabPane
                            tab={data.title}
                            key={data.key}
                            closable={data.closable}
                        >
                            {data.content}
                        </TabPane>)}
                </Tabs>
            </div>
        )
    }
}
export default Index;