import './login.less';
import React, { Component } from 'react';
import { Button, Form, Input, Icon, message } from 'antd';
import { Captcha } from '../../common/captcha/captcha';
import axios from '../../util/axios';
import { SIGN_IN_API } from '../../service/api.url';

const FormItem = Form.Item;

export class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            captchaName: null,
            captchaValue: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!this.state.captchaName) {
                message.error('请选择图片验证码');
                return;
            }
            if (!err) {
                const fieldName = this.state.captchaName;
                values.captcha = {};
                values.captcha[fieldName] = this.state.captchaValue;
                axios.post(SIGN_IN_API, values).then(res => {
                    message.success('登录成功！');
                    sessionStorage.setItem('token', res.data.access_token);
                    this.props.history.push('index/index');
                });
            }
        });
    };

    handleSelectedCaptchaElement = (value, name) => {
        this.setState({captchaName: name, captchaValue: value});
    }

    render() {

        const {getFieldDecorator} = this.props.form;

        return (
            <div className="login">
                <h2 className="title">
                    电磁防护智能监测与管理服务平台
                </h2>
                <div className="form">
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem>
                            {getFieldDecorator('name', {
                                rules: [{required: true, message: '请输入用户名'}]
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                       placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码'}]
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                       placeholder="密码"/>
                            )}
                        </FormItem>
                        <Captcha onSelectedElement={this.handleSelectedCaptchaElement}></Captcha>
                        <FormItem>
                            <Button type="primary" htmlType="submit" style={{width: 100 + '%'}}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
}

Login = Form.create()(Login);