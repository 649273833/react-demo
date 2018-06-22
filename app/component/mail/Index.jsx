import React from 'react';
import '../../public/css/mail.pcss'
import 'antd/dist/antd.css';
import {Input,Button} from 'antd'
import {checkInput} from './mailL'

class Index extends React.Component{
    render(){
        return(
            <div className='mail-box'>
               <div className="bizmail_LoginBox clear" >
                   <h3>登录邮箱</h3>
                   <form name="form1" action="https://exmail.qq.com/cgi-bin/login" target="_self" method="post" onSubmit={checkInput}>
                       <Input type="hidden" name="firstlogin" value="false"/>
                       <Input type="hidden" name="errtemplate" value="dm_loginpage"/>
                       <Input type="hidden" name="aliastype" value="other"/>
                       <Input type="hidden" name="dmtype" value="bizmail"/>
                       <Input type="hidden" name="p" value="" />
                       <div className="bizmail_column clear">
                           <label>帐号:</label>
                           <div className="bizmail_inputArea">
                               <Input type="text" name="uin" className="text uin" />
                               <span className='hz'>@zzwio.com</span>
                               <Input type="hidden" name="domain" value="zzwio.com" />
                           </div>
                       </div>
                       <div className="bizmail_column clear">
                           <label>密码:</label>
                           <div className="bizmail_inputArea">
                               <Input type="password" name="pwd" className="text pwd" />
                           </div>
                       </div>
                       <div className='bizmail_column clear' style={{marginBottom:0}}>
                           <label>&nbsp;&nbsp;</label>
                           <div className="bizmail_SubmitArea">
                               <Button type='primary' htmlType="submit" className="submit" >登录</Button>
                               <a href="https://exmail.qq.com/cgi-bin/readtemplate?check=false&amp;t=bizmail_orz" target="_blank">忘记密码？</a>
                           </div>
                       </div>
                   </form>
               </div>
            </div>
        )
    }
}
export default Index