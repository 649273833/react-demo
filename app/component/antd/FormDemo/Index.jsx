import React from 'react';
import {Form,Select,Input} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
let isMobile =(val)=>{
    let reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(val)
};


class Demo extends React.Component{
    validateIsMobileVal = (rule,value,callback) =>{
        const form=this.props.form;
        let newVal=form.getFieldValue('phone');
        if(!isMobile(newVal)){
            callback('这不是手机号！')
        }else {
            callback()
        }
    };
    componentDidMount (){
        const form=this.props.form;
        form.setFieldsValue({'phone':'123456789'})
    }
    render(){
        const { getFieldDecorator,} = this.props.form;
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
        const prefixSelector = getFieldDecorator('prefix',{
            initialValue:'86',
        })(
            <Select style={{width:70}}>
                <Option value='86'>+86</Option>
                <Option value='87'>+87</Option>
            </Select>
        );
        return(
            <div>
                <Form>
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
                </Form>
            </div>
        )
    }
}
const FormDemo = Form.create()(Demo);
export default FormDemo;