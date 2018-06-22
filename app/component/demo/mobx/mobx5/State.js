import {observable,action,runInAction} from 'mobx';
import apiRequestAsync from '../../../../public/js/apiRequestAsync';
import axios from 'axios'
class State {
    @observable list=[];
    @observable iplist=[];
    @observable citylist=[]
    @action postList = async() => {
        let todoList = await apiRequestAsync.post('todoList');
        runInAction(() => {
            this.list = todoList.list;
        })
    };
    @action ipList = () =>{
        axios.get('https://api.uu20.top/api/ip.php')
            .then(res =>{
                console.log(res.data);
                runInAction(() =>{
                    this.iplist=res.data
                })
            })
            .catch(err =>{
                console.log(err)
            })
    };
    @action cityList = () =>{
        axios.get('https://api.uu20.top/api/ip.php')
            .then(res =>{
                runInAction(()=>{
                    this.citylist = res.data
                })
            })
    }
    @action add = (title) => {
        if(title){
            this.list.push({id:this.list.length+1, title:title ,status :1})
        }else {
            alert('不能为空！')
        }
    };
    @action edit = (obj) => {
        let {id, status} = obj;
        this.list.find(data => data.id === id ).status = status
    }

}
export  default State;