import axios from 'axios';
import {message} from 'antd';
let confirm = (id) =>(dispath)=>{
    axios.get('https://api.uu20.top/api/delxianlu.php',{
        params:{id:id}
    })
        .then(res=>{
            if(res.data.code > 0){
                dispath({type:'afterConfirm',id:id});
                message.success('删除成功！');
                getXianLu()
            }else if(res.code == -1){
                message.warning('没有获取到对应数据！')
            }else if(res.code == -2){
                message.warning('删除失败，请重试！')
            }
        })
        .catch(()=>{
            console.log('del err')
        })
};
let  getXianLu =() =>(dispatch) =>{
    axios.get('https://api.uu20.top/api/getxianlu.php')
        .then(res=>{
            if(res.data){
                dispatch({type:'getXianlu',obj:{getdata:res.data,getloading:false}})
            }else{
                message.warning('获取失败，请刷新！')
            }
        })
        .catch(res=>{
            message.warning('网络错误，请稍后重试！')
        })
};
let  handleAdd =(names,urls) =>(dispatch)=>{
    if(!names){
        names = '默认线路'
    }
    if(urls){
        axios.get('https://api.uu20.top/api/addxianlu.php',{
            params:{
                name:names,
                url:urls
            }
        })
            .then(res=>{
                if(res.data.code > 0){
                    dispatch({type:'afterAdd'});
                    message.success('添加成功！')
                }else {
                    console.log(res.data.msg);
                    message.warning('内容严重错误或者网络错误，请稍后重试！')
                }
            })
            .catch(res=>{
                message.warning('err')
            })
    }else {
        message.warning('您还没有输入链接')
    }
}
export {confirm,getXianLu,handleAdd}