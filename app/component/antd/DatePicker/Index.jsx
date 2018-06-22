import React from 'react'
import { LocaleProvider, DatePicker, message,Radio } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
const {MonthPicker,RangePicker,WeekPicker} = DatePicker
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:'',
            size:'default',
            startValue:null,
            endValue:null,
            endOpen:false,
        };
    }
    handelChange=(date)=>{
        message.info('您选择的日期是：' + date.toString());
        console.log(date)
        date = date.toString()
        this.setState({date:date})
    }
    onChange = (date,dateString) =>{
        console.log(date,dateString)
    }
    handleSizeChange = (e) =>{
        this.setState({size:e.target.value})
        console.log('value:'+e.target.value)
    }
    disabledStartDate = (startValue)=>{
        const endValue = this.state.endValue;
        if(!startValue || !endValue){
            return false
        }
        return startValue.valueOf() > endValue.valueOf();
    };
    disabledEndDate = (endValue) =>{
        const startValue = this.state.startValue;
        if(!endValue || !startValue){
            return false
        }
        return endValue.valueOf() <= startValue.valueOf()+1;
    };
    onChangeSE = (field,value)=>{
        this.setState({
            [field]:value,
        })
    };
    onStartChange = (value) =>{
        this.onChangeSE('startValue',value);
    };
    onEndChange = (value) =>{
        this.onChangeSE('endValue',value);
    }
    handleStartOpenChange = (open) =>{
        if(!open){
            this.setState({endOpen:true})
        }
    };
    handleEndOpenChange = (open) =>{
        this.setState({endOpen:open})
    }

    render(){
        let {size,startValue,endValue,endOpen}=this.state
        return(
            <div>

                <LocaleProvider size={size} locale={zhCN}>
                    <div style={{width:400,margin:'100px auto'}}>
                        <DatePicker onChange={value => this.handelChange(value)}/>
                        <div style={{marginTop:20}}>
                            当前日期：{this.state.data}
                        </div>
                    </div>
                </LocaleProvider>
                <div>
                    <Radio.Group size={size} value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large">Large</Radio.Button>
                        <Radio.Button value="default">Default</Radio.Button>
                        <Radio.Button value="small">Small</Radio.Button>
                    </Radio.Group>
                </div>
                <DatePicker size={size} onChange={(date,dateString)=>this.onChange(date,dateString)} placeholder='选择日期'/>
                <br/>
                <MonthPicker size={size} onChange={(date,dateString)=>this.onChange(date,dateString)} placeholder='选择月份'/>
                <br/>
                <RangePicker size={size} onChange={(date,dateString)=>this.onChange(date,dateString)} placeholder='选择时间段'/>
                <br/>
                <WeekPicker size={size} onChange={(date,dateString)=>this.onChange(date,dateString)} placeholder='选择周'/>
                <br/>
                <DatePicker size={size} defaultValue={moment('2018-04-06','YYYY-MM-DD')} disabled/>

                <br/>
                <div>
                    <DatePicker
                        disabledDate={this.disabledStartDate}
                        showTime
                        format='YYYY-MM-DD HH:mm:ss'
                        value={startValue}
                        placeholder='开始时间'
                        onChange={this.onStartChange}
                        onOpenChange={this.handleStartOpenChange}
                    />
                    <DatePicker
                        disabledDate={this.disabledEndDate}
                        showTime
                        format='YYYY-MM-DD HH:mm:ss'
                        value={endValue}
                        placeholder='结束时间'
                        onChange={this.onEndChange}
                        open={endOpen}
                        onOpenChange={this.handleEndOpenChange}
                    />
                </div>
                <div style={{borderBottom:'1px soild #ccc',height:30}}></div>
                <DatePicker renderExtraFooter={()=>'这是自定义底部显示'}/>
                <br/>
                <DatePicker renderExtraFooter={()=> <a href="https://re.uu20.top">首页</a>} showTime/>
                <br/>
                <RangePicker renderExtraFooter={()=>'footer'}/>
                <br/>
                <RangePicker renderExtraFooter={() =>'footer'} showTime />
                <br/>
                <MonthPicker renderExtraFooter={()=>'还是footer'} placeholder='选择月份'/>
            </div>
        )
    }
}

    export default Index;