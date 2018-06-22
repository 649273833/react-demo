import React from 'react';
import {Progress,Button} from 'antd';
const ButtonGroup = Button.Group;
class Index extends React.Component{
    state = {
        percent:0
    };
    decline = () =>{
       let percent = this.state.percent - 10;
       if(percent < 0){
           percent = 0
       }
       this.setState({percent})
    };
    add = () =>{
        let percent = this.state.percent + 10;
        if(percent > 100){
            percent = 100
        }
        this.setState({percent})
    };
    render(){
        let {percent} = this.state
        return(
            <div>
                <div>
                    <Progress size='small' percent={30}/>
                    <Progress percent={50} size='small' status='active'/>
                    <Progress percent={70} status='exception'/>
                    <Progress percent={100}/>
                    <Progress percent={50} showInfo={false}/>
                </div>
                <div>
                    <Progress
                        type='circle'
                        percent={percent}
                        format={percent=>`${percent}天`}
                        width={60}
                        type='dashboard'
                    />
                    <br/><br/>
                    <Progress
                        type='circle'
                        percent={percent}
                        format={percent=>`${100-percent}天`}
                        width={80}
                    />
                    <br/><br/>
                    <Progress percent={percent} status='active'/>
                    <br/><br/>
                    <ButtonGroup>
                        <Button
                            icon='minus'
                            disabled={percent <= 0 ? true : false}
                            onClick={this.decline}
                        />
                        <Button
                            icon='plus'
                            disabled={percent >= 100 ? true : false}
                            onClick={this.add}
                        />
                    </ButtonGroup>
                </div>
            </div>
        )
    }
}
export default Index;