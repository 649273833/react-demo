import React from 'react'
import { Form, Icon, Input,DatePicker,Radio, Button, Checkbox ,Tooltip, Cascader, Select, Row ,Col,AutoComplete} from 'antd';
import {formValSubmit} from "./action";
import {isMobile} from "../../../public/js/utils";
const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
    componentDidMount() {
        // To disabled submit button at the beginning.
        // this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                let userName=values.userName;
                let password=values.password;
                this.props.dispatch(formValSubmit(userName,password))
            }
        });
    };
    handleRegSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err,fieldsValues) =>{
            if(err){
                return
            }
            const values = {
                fieldsValues,
                'date-picker':fieldsValues['date-picker'].format('YYYY-MM-DD')
            }
            console.log(values)
        })
    };
    compareToFirstPassword = (rule,value,callback) =>{
        const form=this.props.form;
        if(value && value !==form.getFieldValue('password')){
            callback('两次密码不一样！')
        }else {
            callback()
        }
    };
    validateIsMobileVal = (rule,value,callback) =>{
        const form=this.props.form;
        let newVal=form.getFieldValue('phone');
        if(!isMobile(newVal)){
            callback('这不是手机号！')
        }else {
            callback()
        }
    };
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        let {confirmDirty,autoCompleteResult,options,currency } = this.props.storeState;
        const validateToNextPassword = (rule, value, callback) => {
            const form = this.props.form;
            if (value && confirmDirty) {
                form.validateFields(['confirm'], { force: true });
            }
            callback();
        }

        const filter = (inputValue, path) =>{
            return (path.some(option => (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1));
        }
        const formItemLayout = {
            labelCol:{
                xs:{span:24},
                sm:{span:8},
            },
            wrapperCol:{
                xs:{span:24},
                sm:{span:16},
            },
        };
        const  tailFormItemLayout = {
            wrapperCol:{
                xs:{span : 24,offset : 0},
                sm:{span :16 ,offset : 8},
            },
        };
        const prefixSelector = getFieldDecorator('prefix',{
            initialValue:'86',
        })(
            <Select style={{width:70}}>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option>
            </Select>
        );
        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };
        return (
           <div>
               <div style={{width:256}}>
                   <Form layout="inline" onSubmit={this.handleSubmit}>
                       <FormItem
                           validateStatus={userNameError ? 'error' : ''}
                           help={userNameError || ''}
                       >
                           {getFieldDecorator('userName', {
                               rules: [{ required: true, message: 'Please input your username!' }],
                           })(
                               <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                           )}
                       </FormItem>
                       <FormItem
                           validateStatus={passwordError ? 'error' : ''}
                           help={passwordError || ''}
                       >
                           {getFieldDecorator('password', {
                               rules: [{ required: true, message: 'Please input your Password!' }],
                           })(
                               <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                           )}
                       </FormItem>
                       <FormItem>
                           <Button
                               type="primary"
                               htmlType="submit"
                               disabled={hasErrors(getFieldsError())}
                           >
                               Log in
                           </Button>
                       </FormItem>
                   </Form>
                   <Form onSubmit={this.handleSubmit}
                         className='login-form'>
                       <FormItem>
                           {getFieldDecorator('userName',{
                               rules :[{required : true , message : '请输入账号'}]
                           })(
                               <Input prefix={<Icon type='user'/>} placeholder='账号'/>
                           )}
                       </FormItem>
                       <FormItem>
                           {getFieldDecorator('password',{
                               rules : [{required :true , message : '请输入账号'}]
                           })(
                               <Input prefix={<Icon type='lock'/>} type="password" placeholder='密码'/>
                           )}
                       </FormItem>
                       <FormItem>
                           {getFieldDecorator('remember',{
                               valuePropName : 'checked',
                               initialValue :true,
                           })(
                               <Checkbox>记住密码</Checkbox>
                           )}
                           <a href=""  style={{float:'right'}} className='login-form-forgot'>忘记密码</a>
                           <br/>
                           <Button type="primary" style={{display:'block',width:'100%'}} htmlType="submit" className="login-form-button">
                               登录
                           </Button>
                           或者
                           <a href="" style={{float:'right'}}>现在注册！</a>
                       </FormItem>
                   </Form>

               </div>
               <div style={{width:380}}>
                   <Form onSubmit={this.handleRegSubmit}>
                       <FormItem
                           {...formItemLayout}
                           label='邮箱'
                       >
                           {getFieldDecorator('email',{
                               rules:[{
                                   type:'email',message:'邮箱格式错误！'
                               },{
                                   required : true, message:'请填写邮箱！'
                               }]
                           })(
                               <Input/>
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label='密码'>
                           {getFieldDecorator('password',{
                               rules :[{
                                   required : true ,message : '请输入密码！'
                               },{
                                   validator : validateToNextPassword,
                               }]
                           })(
                               <Input type='password'/>
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label='确认密码'>
                           {getFieldDecorator('confirm',{
                               rules :[{
                                   required : true ,message :'请再次确认密码！'
                               },{
                                   validator: this.compareToFirstPassword
                               }]
                           })(
                               <Input type='password' onBlur={(confirmE)=>this.props.dispatch({type:'handleConfirmBlur',confirmE:confirmE})}/>
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label={
                           <span>
                               昵称&nbsp;
                               <Tooltip title='给你自己取一个好听的昵称。' >
                                   <Icon type='question-circle-o'/>
                               </Tooltip>
                           </span>
                       }>
                           {getFieldDecorator('nickname',{
                               rules:[{
                                   required :true,message :'昵称不能为空！'
                               }]
                           })(
                               <Input/>
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label='性别'>
                           {getFieldDecorator('sex',{
                               rules:[{required:true,message:'请选择性别'}]
                           })(
                               <Radio.Group>
                                   <Radio value='nan' >男</Radio>
                                   <Radio value='nv'>女</Radio>
                               </Radio.Group>
                           )}
                       </FormItem>
                       <FormItem
                           {...formItemLayout}
                           label="DatePicker"
                       >
                           {getFieldDecorator('date-picker', config)(
                               <DatePicker />
                           )}
                       </FormItem>
                       <FormItem
                           {...formItemLayout}
                           label='学历'
                       >
                           {getFieldDecorator('xueli',{
                               rules:[{
                                   required:true,message:'选择学历！'
                               }]
                           })(
                                <Select>
                                    <Option value='bs'>博士</Option>
                                    <Option value='bk'>本科</Option>
                                    <Option value='zk'>专科</Option>
                                </Select>
                           )}

                       </FormItem>
                       <FormItem {...formItemLayout} label='选择地址'>
                           {getFieldDecorator('residence',{
                               initalValue :['chengdu','gaoxinqu','fuhuayuan'],
                               rules :[{
                                   required :true ,message :'请选择地址！'
                               }]
                           })(
                               <Cascader options={options} showSearch={{filter}} />
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label='手机号码'>
                           {getFieldDecorator('phone',{
                               rules :[{
                                   required : true ,message :'请输入手机号码！'
                               },{
                                   validator:this.validateIsMobileVal
                               }]
                           })(
                               <Input
                                   addonBefore={prefixSelector}
                                   style={{width:'100%'}}
                                   maxLength={11}
                               />,
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label='博客网址'>
                           {getFieldDecorator('website',{
                               rules :[{
                                   required : true ,message :'请输入网址'
                               }]
                           })(
                               <AutoComplete
                                dataSource={websiteOptions}
                                onChange={(websiteVal)=>this.props.dispatch({type:'handleWebsiteChange',websiteVal:websiteVal})}
                               />
                           )}
                       </FormItem>
                       <FormItem {...formItemLayout} label='验证码'
                        extra='我们必须知道你不是机器人！'
                       >
                           <Row gutter={8}>
                               <Col span={14}>
                                   {getFieldDecorator('captcha',{
                                       rules :[{
                                           required : true , message : '请输入验证码！'
                                       }]
                                   })(
                                       <Input maxLength={6} minLength={6}/>
                                   )}
                               </Col>
                               <Col span={10}>
                                   <Button type='primary'>获取验证码</Button>
                               </Col>
                           </Row>
                       </FormItem>
                       <FormItem {...tailFormItemLayout}>
                           {getFieldDecorator('agreement',{
                               valuePropName : 'checke',
                               rules :[{required:true,message:'确定同意该条款吗？'}]
                           })(
                               <Checkbox>我已阅读 <a href="">同意</a>所有条款</Checkbox>
                           )}
                       </FormItem>
                       <FormItem {...tailFormItemLayout}>
                           <Button type='primary' htmlType='submit'>注册</Button>
                       </FormItem>
                   </Form>
               </div>
           </div>

        );
    }
}

const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);
export default WrappedHorizontalLoginForm