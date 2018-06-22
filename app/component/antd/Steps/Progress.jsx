import React from 'react';
import {Steps,Icon,Button,message} from 'antd';
const Step=Steps.Step;

class Progress extends React.Component{
    render(){
        let {steps} = this.props.storeState;
        let {current} = this.props.storeState;
        let {add} = this.props.storeState;
        console.log(current)
        console.log(add)
        console.log(steps)
        return(
            <div>
                <Steps size='small' direction='vertical' status='error' current={2}>
                    {/*竖着显示*/}
                    <Step title='完成了' description='This is a description.'/>
                    <Step title='正在做' description='description'/>
                    <Step title='出错了' description='等下吃了饭再来'/>
                    <Step title='未完成' description='等下吃了饭再来'/>
                </Steps>
                <Steps size='small' >
                    <Step title='完成了' description='This is a description.'/>
                    <Step title='正在做' description='description'/>
                    <Step status='error' title='出错了' description='等下吃了饭再来'/>
                    <Step title='未完成' description='等下吃了饭再来'/>
                </Steps>
                <Steps>

                    <Step status='finish' title='login' icon={<Icon type='user'/>}/>
                    <Step status='finish' title='Verification' icon={<Icon type='solution'/>}/>
                    <Step status='process' title='pay' icon={<Icon type='loading'/>}/>
                    <Step status='wait' title='done' icon={<Icon type='smile-o'/>}/>
                </Steps>
                <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <div className='steps-content'>{steps[current].content}</div>
                <Button onClick={()=>this.props.dispatch({type:'add'})}>{current}</Button>
                <Button>{steps.length - 1}</Button>
                <div className='steps-action'>
                    {
                        current < steps.length - 1
                        &&
                            <Button type='primary' onClick={()=>this.props.dispatch({type:'next'})}>next</Button>
                    }
                    {
                        current === steps.length - 1
                        &&
                            <Button type='priamry' onClick={()=>message.success('没有下一条了')}>Done</Button>
                    }
                    {
                        current > 0
                        &&
                            <Button style={{ marginLeft: 8 }} onClick={()=>this.props.dispatch({type:'prev'})}>
                                Previous
                            </Button>
                    }
                </div>
                <div>
                    <Steps current={1} progressDot>
                        <Step title='finished' description='完成'/>
                        <Step title='in progress' description='在做了'/>
                        <Step title='waiting' description='等等吧'/>
                    </Steps>
                </div>
            </div>
        )
    }
}
export default Progress