import React from 'react';
import {Switch,Icon} from 'antd'
class Index extends React.Component{
    state = {
        value:0,
    }
    handleChecked= (value) => {
        this.setState({ value:value });
    }
    render(){
        return(
           <div>
               <Switch defaultChecked onChange={checked => console.log(`switch to ${checked}`)}/>
               <br/>
               <Switch
                   checkedChildren='开'
                   unCheckedChildren='关'
               />
               <br/>
               <Switch checkedChildren='1' unCheckedChildren='0'/>
               <br/>
               <Switch
                   checkedChildren={<Icon type='check'/>}
                   unCheckedChildren={<Icon type='cross'/>}
               />
               <br/>
               <Switch loading disabled/>
               <br/>
               <Switch size='small'/>

           </div>
        )
    }
}
export default Index