import React from 'react'
import '../../public/css/index.pcss'
import '../../public/css/shop.pcss'
import  {urlParam,isMobile} from '../../public/js/utils'
import apiRequest from '../../public/js/apiRequest'

class Index extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,title:'前端1'},
                {id:2,title:'前端2'},
                {id:3,title:'前端3'},
                {id:4,title:'前端4'},
                {id:5,title:'前端5'},
                {id:6,title:'前端6'},
                {id:7,title:'前端7'},
                {id:8,title:'前端8'},
            ],
           isMobile:'',
        }
        this.handleChange=this.handleChange.bind(this)

    }
    componentDidMount(){

        apiRequest.get('getip', {

        }, data => this.setState({list:data.list}), data => console.log(data.code))
        // fetch('https://api.uu20.top/api/ip.php',{
        //     method:'GET',
        //     mode:'cors'
        // }).then(function (response) {
        //     console.log(response)
        // })
    }
    handleItemDel(id){
        let list =this.state.list;
        list.splice(list.findIndex(data => data.id == id),1 )
        this.setState({lsit:list})
    }
    handleChange(e){
        this.setState({isMobile:e.target.value})
    }
    render(){
        let list=this.state.list
        let isMobileVal=this.state.isMobile
        let urlParameter=""
        urlParameter="name"
        return(
            <div className='content'>

                <div>获取url中参数{urlParameter}的值：{urlParam(urlParameter)}</div>
                <div>
                    <input type="text" value={this.state.isMobile} onChange={this.handleChange}/>
                    {isMobileVal}{isMobile(isMobileVal) ? "是" : "不是"}手机号。
                </div>
                {
                    list.map((data)=>{
                        return (
                            <li key={data.id}>{data.title}
                                <button onClick={()=>this.handleItemDel(data.id)}>删除</button>
                            </li>
                        )
                    })
                }

            </div>
        )
    }
}
export default Index;