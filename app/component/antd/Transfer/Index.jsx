import React from 'react';
import {Transfer} from 'antd';
const mockData = [];
for(let i = 0 ; i < 20 ; i++){
    mockData.push({
        key: i.toString(),
        title:`content${i}`,
        description : `description of content${i}`,
        disabled: i % 3 < 1
    })
}
const targetKeys = mockData
    .filter(item => +item.key % 3 > 1)
    .map(item => item.key);

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // targetKeys,
            // selectedKeys:[],
            mockData2:[],
            targetKeys2:[],
        }
    }
    componentDidMount() {
        this.getMock();
    }
    getMock = () => {
        const targetKeys2 = [];
        const mockData2 = [];
        for (let i = 0; i < 20; i++) {
            const data = {
                key: i.toString(),
                title: `content${i}`,
                description: `description of content${i}`,
                chosen: Math.random() * 2 > 1,
            };
            if (data.chosen) {
                targetKeys2.push(data.key);
            }
            mockData2.push(data);
        }
        this.setState({ mockData2, targetKeys2 });
    }
    handleChange2 = (targetKeys2, direction, moveKeys) => {
        console.log(targetKeys2, direction, moveKeys);
        this.setState({ targetKeys2 });
    }
    renderItem = (item) => {
        const customLabel = (
            <span className="custom-item">
            {item.title} - {item.description}
      </span>
        );

        return {
            label: customLabel, // for displayed item
            value: item.title, // for title and filter matching
        };
    }
    handleChange = (nextTargetKeys,direction,moveKeys) =>{
        this.setState({targetKeys:nextTargetKeys});
        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };
    handleSelectChange = (sourceSelectedKeys,targetSelectedKeys) =>{
        this.setState({selectedKeys:[...sourceSelectedKeys,...targetSelectedKeys]})
        console.log('sourceSelectedKeys: ', sourceSelectedKeys);
        console.log('targetSelectedKeys: ', targetSelectedKeys);
    };
    handleScroll = (direction,e) =>{
        console.log('direction',direction);
        console.log('target',e.target)
    }
    render(){
        const state = this.state;
        return(
            <div className='content-antd'>
                <Transfer
                    dataSource={mockData}
                    title={['Source','Target']}
                    targetKeys={state.targetKeys}
                    selectedKeys={state.selectedKeys}
                    onChange={this.handleChange}
                    onSelectChange={this.handleSelectChange}
                    // onScroll={this.handleScroll}
                    render={item => item.title}
                />
                <br/>
                <Transfer
                    dataSource={this.state.mockData2}
                    listStyle={{width:300,height:300}}
                    targetKeys={this.state.targetKeys2}
                    onChange={this.handleChange2}
                    render={this.renderItem}
                />
            </div>
        )
    }
}
export default Index;