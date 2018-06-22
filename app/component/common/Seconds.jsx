import React from 'react'
import SecondsBottom from './SecondsBottom';
import SecondsTop from './SecondsTop'
import {BrowserRouter as Router, Link ,Route,Switch} from 'react-router-dom'
import MyCard from '../antd/Card/Index'
import Antd from '../antd/Index';
import MyButton from '../antd/Button/Index';
import MyAvatar from '../antd/Avatar/Index';
import MyUpload from '../antd/Upload/Index';
import {Toast} from '../common/layer/Index'
import axios from 'axios'
class Seconds extends React.Component{
    constructor(props){
        super(props);
        this.state={
            seconds:0,
            iplist:[],
            tabuid:5,
            showTab:''
        }
    }
    tick(){
        this.setState(prevState=>({
            seconds:prevState.seconds+1
        }))
    }
    componentDidMount(){
        this.interval=setInterval(()=>this.tick(),1000);

        axios.post('https://api.uu20.top/api/ip.php')
            .then((data)=>{
                console.log(data.data);
                let iplist=data.data;
                this.setState({
                    iplist:iplist,
                    showTab:iplist[this.state.tabuid-5].uid
                })
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    handleClick = (key) =>{
      this.setState({
          tabuid:key,
          showTab:this.state.iplist[key-5].uid
      })
    };
    render(){
        let state=this.state.seconds;
        let iplist=this.state.iplist;
        let tabuid=this.state.tabuid;
        let showTab=this.state.showTab;
        const tabStyle = {
            width:'60px',
            height:'30px',
            textAlign:'center',
            border:'1px solid #ccc',
            float:'left',
            lineHeight:'30px',
            listStyle:'none',
            cursor:'pointer'
        };
        return(
            <div className='cont'>
                <SecondsTop {...this.props}/>
                <SecondsBottom {...state}/>

                <div>
                    {
                        iplist.map((data)=>
                            <li key={data.uid}>
                                {data.uid} : {data.cip}
                            </li>
                        )
                    }
                </div>
                <ul style={{padding:0,marginLeft:50}} className='clearfix'>
                    {
                        iplist.map((data)=>
                            <li style={tabStyle}
                                key={data.uid}
                                onClick={(key)=>{this.handleClick(data.uid)}}
                            >
                                {data.uid}
                            </li>
                        )
                    }
                </ul>
                <div>
                    {showTab}
                </div>
                <div>
                    <Router>
                        <div>
                            <ul>
                                <li><Link to='/Antd'>Antd</Link></li>
                                <li><Link to='/Antd#/Antd/MyCard'>card</Link></li>
                                <li><Link to='/Antd#/Antd/Button'>button</Link></li>
                                <li><Link to='/Antd#/Antd/MyAvatar'>avatar</Link></li>
                                <li><Link to='/Antd#/Antd/MyUpload'>upload</Link></li>
                            </ul>
                            <hr/>
                            <Switch>
                                <Route exact path='/Antd' component={Antd}/>
                                <Route exact path='/MyCard' component={MyCard}/>
                                <Route exact path='/Button' component={MyButton}/>
                                <Route path='/MyAvatar' component={MyAvatar}/>
                                <Route path='/MyUpload' component={MyUpload}/>
                            </Switch>
                        </div>
                    </Router>
                </div>
                <div>

                </div>
            </div>
        )
    }
}

export default  Seconds;