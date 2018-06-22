import React from 'react';
import {Calendar,Alert} from 'antd';
import moment from 'moment';
class Index extends React.Component{
    state = {
        selectedValue: '',
    }
    componentDidMount (){
        this.getDate()
    }
    getDate = ()=>{
        let mydate = new Date()
        let heng = '-'
        let year=mydate.getFullYear()
        let month=mydate.getMonth() + 1
        let day=mydate.getDate()
        if(month >=1 && month<=9){
            month = '0' + month
        }
        if(day >=0 && day <= 9){
            day = '0' +day
        }
        let nowdate = year + heng + month + heng + day
        this.setState({
            selectedValue:moment(nowdate)
        })
    }
    onSelect = (value) =>{
        this.setState({
            selectedValue:value
        })
    }
    onPanelChange = (value) =>{
        this.setState({
            selectedValue:value
        })
    }
    render(){
        const {selectedValue} = this.state;
        return(
            <div className='content-antd' style={{ width: 302, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Alert message={`你选择的日期是：${selectedValue && selectedValue.format('YYYY-MM-DD')}`}></Alert>
                <Calendar
                    fullscreen={false}
                    value={selectedValue}
                    onSelect={this.onSelect}
                    onPanelChange={this.onPanelChange}
                />
            </div>
        )
    }
}
export default Index;