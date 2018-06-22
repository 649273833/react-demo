import React from 'react';
import {Modal,Button} from 'antd';
const confirm = Modal.confirm;
function showConfirm() {
    confirm({
        title:'do you want to delete these item ? ',
        content:'when clicked the ok button,1秒后关闭',
        okText:'确认',
        cancelText:'取消',
        onOk(){
            // return new Promise ((resolve ,reject)=>{
            //     setTimeout(Math.random()>0.5? resolve : reject,1000)
            // }).catch(()=>console.log('Oops errors'))
            console.log(1111)
        },
        onCancel(){}
    })
}
function showDeleteConfirm() {
    confirm({
        title:'confirm 风格modal',
        content:'这里是内容',
        okText:'确认',
        okType:'danger',
        cancelText:'取消',
        onOk(){
            console.log('onok')
        },
        onCancel(){
            console.log('oncancel')
        }
    })
}
class Index extends React.Component{
    state = {
        visible:false,
        loading:false
    }
    showModal = () =>{
        this.setState({visible:true})
    }
    handleOk = (e) =>{
        console.log(e)
        this.setState({loading:true})
        setTimeout(()=>{this.setState({loading:false,visible:false})},1000)
    }
    handleCancel = (e) =>{
        console.log(e)
        this.setState({visible:false})
    }
    render(){
        return(
            <div>
                <Button type='primary' onClick={this.showModal}>open</Button>
                <Modal
                    title='基本的modal'
                    // okText='确认'
                    // cancelText='取消'
                    closable
                    style={{top:20}}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key='back' onClick={this.handleCancel}>取消</Button>,
                        <Button key='submit' type='pirmary' loading={this.state.loading} onClick={this.handleOk}>确认</Button>
                    ]}
                >
                    <p>内容</p>
                    <p>内容</p>
                    <p>内容</p>
                </Modal>
                <Button onClick={showConfirm}>
                    confirm
                </Button>
                <Button type='dashed' onClick={showDeleteConfirm}>
                    dashed
                </Button>
            </div>
        )
    }
}
export default Index