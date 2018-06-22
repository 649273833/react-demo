import React from 'react';
import {TimePicker,Button} from 'antd';
import moment from 'moment';
const format = 'HH:mm';
class Index extends React.Component{
    state = {
        open: false,
        value : null,
    };
    onChange = (time,timeString)=>{
        console.log(timeString)
        this.setState({value:time})
    }
    handleOpenChange = (open) => {
        this.setState({ open });
    }

    handleClose = () => {
        this.setState({ open: false })
    }
    render(){
        return(
            <div className='content-antd'>
                <TimePicker size='large'/>
                <TimePicker/>
                <TimePicker size='small'/>
                <br/>
                <TimePicker
                    defaultValue={moment('12:08',format)}
                    format={format}
                />
                <br/>
                <TimePicker
                    open={this.state.open}
                    onOpenChange={this.handleOpenChange}
                    addon={() => (
                        <Button size="small" type="primary" onClick={this.handleClose}>
                            Ok
                        </Button>
                    )}
                />
                <br/>
                <TimePicker
                    disabled
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <br/>
                <TimePicker
                    hourStep={1}
                    minunteStep={15}
                    secondStep={10}
                />
                <br/>
                <TimePicker
                    use12Hours
                    onChange={this.onChange}
                />
                <TimePicker
                    use12Hours
                    onChange={this.onChange}
                    format='h:mm:ss A'
                />
                <TimePicker
                    use12Hours
                    format={format + 'a'}
                    onChange={this.onChange}
                />
            </div>
        )
    }
}
export default Index;