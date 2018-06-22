import React from 'react';
import {Form,Input,DatePicker,Col,Row,TimePicker,Select,Cascader,Button,Checkbox,InputNumber} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const formItemLayout = {
    labelCol :{
        xs: {span : 24},
        sm: {span : 5},
    },
    wrapperCol:{
        xs: {span : 24},
        sm: {span : 12},
    }
};
class App extends React.Component{
    state = {
        checkNick:false
    }
    handleChangeGender = (value) =>{
        this.props.form.setFieldsValue({
            note : `Hi , ${value === 'man' ? '先生' : '女士'}`
        })
    }
    handleChangeNickname = (e) =>{
        this.setState({
            checkNick:e.target.checked
        },()=>{
            this.props.form.validateFields(['nickname'],{force:true})
            }
        )
    }
    check = ()=>{
        this.props.form.validateFields(
            (err)=>{
                if(!err){
                    console.info('success')
                }
            }
        )
    }
    render(){
        const {getFieldDecorator} = this.props.form;
        return(
            <div>
                <Form
                    // layout='vertical'
                    // layout='inline'
                    layout='horizontal'
                >
                    <FormItem
                        {...formItemLayout}
                        label='fail'
                        validateStatus='error'
                        help='应该是数字和字母组合'
                    >
                        <Input placeholder='unavailable' id='error'/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='warning'
                        validateStatus='warning'
                    >
                        <Input placeholder='warning' id='warnnig'/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='Validating'
                        hasFeedback
                        validateStatus='validating'
                        help='正在被确认'
                    >
                        <Input placeholder='正在确认信息' id='validating'/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='成功'
                        validateStatus='success'
                        hasFeedback
                    >
                        <Input placeholder='success' id='success'/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='warning'
                        hasFeedback
                        validateStatus='warning'
                    >
                        <Input placeholder="Warning" id="warning" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='fail'
                        hasFeedback
                        validateStatus='error'
                        help='应该是数字和字母组合'
                    >
                        <Input placeholder="unavailable choice" id="error" />
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='success'
                        validateStatus='success'
                        hasFeedback
                    >
                        <DatePicker style={{width:'100%'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='warning'
                        hasFeedback
                        validateStatus='warning'
                    >
                        <TimePicker style={{width:'100%'}}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='error'
                        hasFeedback
                        validateStatus='error'
                    >
                        <Select defaultValue='1'>
                            <Option value='1'>option1</Option>
                            <Option value='2'>option2</Option>
                            <Option value='3'>option3</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='Validating'
                        hasFeedback
                        validateStatus='validating'
                        help='正在确认'
                    >
                        <Cascader defaultValue={['1']} options={[]}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='inline'
                    >
                        <Row>
                            <Col span={11}>
                                <FormItem validateStatus='error' help='请选择'>
                                    <DatePicker/>
                                </FormItem>
                            </Col>
                            <Col span={2}>
                                <span style={{display:'inline-block',width:'100%',textAlign:'center'}}>-</span>
                            </Col>
                            <Col span={11}>
                                <FormItem>
                                    <DatePicker/>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='success'
                        hasFeedback
                        validateStatus='success'
                    >
                        <InputNumber style={{width:'100%'}}/>
                    </FormItem>
                    表单联动
                    <FormItem
                        {...formItemLayout}
                        label='性别'
                    >
                        {getFieldDecorator('gender',{
                            rules:[{required:true,message:'选择性别！'}]
                        })(
                            <Select
                                placeholder='选择性别。'
                                onChange={this.handleChangeGender}
                            >
                                <Option value='man'>man</Option>
                                <Option value='lady'>lady</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='欢迎'
                    >
                        {getFieldDecorator('note',{
                            rules:[{required:true,message:'请输入'}]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='nickname'
                    >
                        {getFieldDecorator('nickname',{
                            rules:[{
                                required:this.state.checkNick,
                                message:'请填写'
                            }]
                        })(
                            <Input placeholder="Please input your nickname"/>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Checkbox
                            value={this.state.checkNick}
                            onChange={this.handleChangeNickname}
                        >
                            Nickname is required
                        </Checkbox>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                    >
                        <Button type='primary' onClick={this.check}>check</Button>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='Select'
                        hasFeedback
                    >
                        {getFieldDecorator('select',{
                            rules:[{
                                required:true,message:'请选择'
                            }]
                        })(
                            <Select placeholder='请选择国家'>
                                <Option value='china'>china</Option>
                                <Option value='usa'>usa</Option>
                            </Select>
                        )}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label='multiple'
                    >
                        {getFieldDecorator('select-multiple',{
                            rules:[{required:true,message:'选一个吧'}]
                        })(
                            <Select mode='multiple' placeholder='可以多选，不能不选'>
                                <Option value='red'>red</Option>
                                <Option value='green'>green</Option>
                                <Option value='blue'>blue</Option>
                            </Select>
                        )}
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const ValidateStatus = Form.create()(App);
export default ValidateStatus;