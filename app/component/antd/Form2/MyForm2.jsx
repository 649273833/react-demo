import React from 'react';
import {Button,Modal,Form,Input,Radio,Icon} from 'antd';
const FormItem = Form.Item;

class CollectionCreateForm extends React.Component{
        render(){
            const {visible,onCancel,onCreate,form} = this.props;
            // const {getFieldDecorator} = form;
            return(
            <div>
                <Modal
                    visible={visible}
                    title='create a new collection'
                    okText='确认'
                    cancelText='取消'
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    {/*<Form*/}
                        {/*layout='vertical'*/}
                    {/*>*/}
                        {/*<FormItem label='title'>*/}
                            {/*{getFieldDecorator('title',{*/}
                                {/*rules:[{required:true,message:'请输入标题！'}]*/}
                            {/*})(*/}
                                {/*<Input/>*/}
                            {/*)}*/}
                        {/*</FormItem>*/}
                        {/*<FormItem label='Description'>*/}
                            {/*{getFieldDecorator('description')(<Input/>)}*/}
                        {/*</FormItem>*/}
                        {/*<FormItem className='collection-create-form_last-form-item'>*/}
                            {/*{getFieldDecorator('modified',{*/}
                                {/*initialValue:'public',*/}
                            {/*})(*/}
                                {/*<Radio.Group>*/}
                                    {/*<Radio value='public'>public</Radio>*/}
                                    {/*<Radio value='private'>private</Radio>*/}
                                {/*</Radio.Group>*/}
                            {/*)}*/}
                        {/*</FormItem>*/}
                    {/*</Form>*/}
                </Modal>
            </div>
            )
        }
    }

let uuid=0;
class CollectionsPage extends React.Component{
    state={
        visible:false,
    };
    showModal = () =>{
        this.setState({visible: true})
    };
    handleCancel = () =>{
        this.setState({visible:false})
    };
    handleCreate = () =>{
        const form = this.formRef.props.form;
        form.validateFields((err,values)=>{
            if(err){
                return
            }
            console.log(values);
            form.resetFields();
            this.setState({visible:false})
        })
    };
    saveFormRef = (formRef) =>{
        this.formRef = formRef;
    };
    remove = (k) =>{
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        if(keys.length == 1){
            return;
        }
        form.setFieldsValue({
            keys:keys.filter(key =>key !==k)
        })
    }
    add = () =>{
        const {form} = this.props;
        const keys = form.getFieldValue('keys');
        const nextKeys = keys.concat(uuid)
        uuid++
        form.setFieldsValue({
            keys:nextKeys
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(err){
                return
            }
            console.log(values)
        })
    }

    render(){
        const {form} = this.props;
        const { getFieldDecorator, getFieldValue } = form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('keys',{initialValue:[]});
        const keys= getFieldValue('keys');
        const formItems = keys.map((k,index)=>{
            return(
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? 'passengers' : ''}
                    required={false}
                    key={k}

                >
                    {getFieldDecorator(`names[${k}]`,{
                        validateTrigger:['onChange','onBlur'],
                        rules:[{
                            required:true,
                            whitespace:true,
                            message:'请输入'
                        }]
                    })(
                        <Input style={{width:'60%', marginRight: 8}}/>
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className='dynamic-delete-button'
                            type='minus-circle-o'
                            disabled={keys.length === 1}
                            onClick={()=>this.remove(k)}
                        />
                    ):null}
                </FormItem>
            )
        })
        return(
            <div>
                <Button type='primary' onClick={this.showModal}>New Collection</Button>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <Form onSubmit={this.handleSubmit}>
                    {formItems}
                    <FormItem {...formItemLayoutWithOutLabel}>
                        <Button type='dashed' onClick={this.add}  style={{ width: '60%' }}>
                            submit
                        </Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
const CollectionsPages = Form.create()(CollectionsPage)
export default CollectionsPages