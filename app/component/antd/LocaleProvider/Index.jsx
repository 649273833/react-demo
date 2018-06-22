import React from 'react';
import {LocaleProvider,Pagination,DatePicker,Radio} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('en')
class App extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Pagination defaultCurrent={1} total={50} showSizeChanger/>
                </div>
                <div>
                    <DatePicker/>
                </div>
            </div>
        )
    }
}
class Index extends React.Component{
    state = {
        locale:null
    }
    handleChangeLocale = (e) =>{
        console.log(e.target.value)
        let localeValue = e.target.value
        this.setState({
            locale:localeValue
        })
        if(!localeValue){
            moment.locale('en')
        }else {
            moment.locale('zh-cn')
        }
    }
    render(){
        return(
            <div>
                <div>
                    <Radio.Group defaultValue={undefined} onChange={this.handleChangeLocale}>
                        <Radio.Button key='en' value={undefined}>English</Radio.Button>
                        <Radio.Button key='zh-cn' value={zh_CN}>中文</Radio.Button>
                    </Radio.Group>
                </div>
                <LocaleProvider locale={this.state.locale}>
                    <App/>
                </LocaleProvider>
            </div>
        )
    }
}

export default Index