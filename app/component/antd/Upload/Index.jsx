import React from 'react';
import {Upload,message,Button,Icon,Modal} from 'antd';
import axios from 'axios';
const Dragger = Upload.Dragger;
const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    multiple:true,
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功！`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败！`);
        }
    },
    defaultFileList:[{
        uid:1,
        name:'124.jpg',
        status:'done',
        reponse:'Server Error 500',
        url:'https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/124.jpg?2'
    },{
        uid:2,
        name:'125.jpg',
        status:'done',
        url:'https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/124.jpg?2'
    },{
        uid:3,
        name:'zz.jpg',
        status:'error',
        response:'图片错误，服务器请求失败。',
        url:'http://www.baidu.com/zzz.png'
    }]
};
const fileList3 = [{
    uid:-2,
    name:'xxx.png',
    status:'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
},{
    uid: -3,
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];
const props3 ={
    action:'https://api.uu20.top/api/ip.php',
    listType:'picture',
    // defaultFileList:[...fileList3],
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 上传成功！`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 上传失败！`);
        }
    },
    className:'upload-list-inline'

}
class Index extends React.Component{
    state = {
        fileList2:[{
            uid:-1,
            name:'xxx.png',
            status:'done',
            url:'http://www.baidu.com/xxx.png',
        }],
        loading:false,
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: -1,
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }],
        uploading:false,
        fileList5:[]
    };
    handleChange2 = (info) =>{
        //上传列表数量的限制。
        let fileList2 = info.fileList;
        fileList2 = fileList2.slice(-4);
        this.setState({fileList2:fileList2})
    }
    getBase64 = (img,callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load',()=>callback(reader.result))
        reader.readAsDataURL(img)
    }
    beforeUpload =(file) =>{
        const isJPG =
            file.type === 'image/png'
        ||
            file.type === 'image/jpeg'
        ;
        if(!isJPG){
            message.error('只能选择jpg/png格式的图片！')
        }
        const isLt2M = file.size / 1024 /1024 < 2;
        if(!isLt2M){
            message.error('头像大小不能超过2M')
        }
        return isJPG && isLt2M
    }
    handleChange64 = (info)=>{
        if(info.file.status === 'uploading'){
            this.setState({loading:true})
            return
        }
        if(info.file.status === 'done'){
            this.getBase64(info.file.originFileObj,imageUrl=>this.setState({
                imageUrl,
                loading:false
            }))
        }
    }
    handleCancel = () => this.setState({ previewVisible: false })
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }
    handleChangePreview = ({ fileList }) => this.setState({ fileList })
    handleUpload = () =>{
        const {fileList5} = this.state;
        const formData = new FormData();
        fileList5.forEach((file)=>{
            formData.append('files[]',file);
        })
        this.setState({uploading:true})
        axios.post('https://api.uu20.top/api/ip.php',{
            params:{
                data:formData
            }
        })
            .then( res=>{
                this.setState({
                    fileList5:[],
                    uploading:false
                })
                console.log(res.data)
            })
    }
    render(){
        const props2 ={
            action:'https://api.uu20.top/api/ip.php',
            onChange:this.handleChange2,
            multiple:true
        }
        const uploadButton= (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'}/>
                <div className='ant-upload-text'>上传头像</div>
            </div>
        )
        const { previewVisible, previewImage, fileList,uploading } = this.state;
        const uploadButton2 = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        const props5 = {
            action:'//jsonplaceholder.typicode.com/posts/',
            onRemove : (file) =>{
                this.setState(({fileList5})=>{
                    const index = fileList5.indexOf(file);
                    const newFileList = fileList5.slice();
                    newFileList.splice(index,1)
                    return {
                        fileList5:newFileList
                    };
                });
            },
            beforeUpload :(file)=>{
                this.setState(({fileList5})=>({
                    fileList5: [...fileList5, file],
                }));
                return false;
            },
            fileList5:this.state.fileList5,
        };
        return(
            <div className='content-antd clearfix'>
                <Upload {...props}>
                    <Button>
                        <Icon type='upload'/>click to upload
                    </Button>
                </Upload>
                <br/>
                <Upload
                    {...props2}
                    fileList={this.state.fileList2}
                >
                    <Button>
                        <Icon type='upload'/>上传图片,最多四张
                    </Button>
                </Upload>
                <br/>
                <Upload {...props3}>
                    <Button type='primary'>
                        <Icon type='upload'/>显示略缩图
                    </Button>
                </Upload>
                <br/>
                <Upload
                    name='avatar'
                    listType='picture-card'
                    className='avatar-uploader'
                    showUploadList={false}
                    action='https://api.uu20.top/api/ip.php'
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange64}
                    style={{width:128,height:102,maxWidth:128,maxHeight:102}}
                >
                    {imageUrl ? <img src={imageUrl} alt=""/> : uploadButton}
                </Upload>
                <br/>
                <Upload
                    action="https://api.uu20.top/api/ip.php"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChangePreview}
                >
                    {fileList.length >= 3 ? null : uploadButton2}

                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
                <Dragger {...props}>
                    <p className='ant-upload-drag-icon'>
                        <Icon type='inbox'/>
                    </p>
                    <p className='ant-upload-text'>点击/拖拽上传</p>
                    <p className='ant-upload-hint'>支持单个上传或者多个上传</p>
                </Dragger>
                <br/>
                <Upload {...props5}>
                    <Button>
                        <Icon type='upload'/>选择文件
                    </Button>
                </Upload>
                <Button
                    className='upload-demo-start'
                    type='primary'
                    onClick={this.handleUpload}
                    disabled={this.state.fileList5.length === 0}
                    loading={uploading}
                >
                    {uploading ? '添加文件' : '开始上传'}
                </Button>
            </div>
        )
    }
}
export default Index;