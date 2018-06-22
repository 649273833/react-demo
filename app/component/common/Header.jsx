import React from 'react';
import '../../public/css/common.pcss';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import {Route,NavLink} from 'react-router-dom'
import Login from './login/Login'
import axios from "axios/index";
import Mobile from './login/Mobile'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            menuActiveType:1,
            loginActiveType:1,
            loginStatus:false,
            uname:'',
            upwd:'',
            headerimg:''
        }
        this.pathname=window.location.pathname
    }
    handleNavClassName =(name,index)=>{
        if(this.pathname.indexOf(name+ '.html')!==-1){
            return 'selected'
        }else {
            return null
        }
    }
    componentDidMount(){
        let uname=localStorage['uname']
        uname ? this.setState({uname:uname,loginStatus:true,loginActiveType:1,menuActiveType:1})
            :
            null
    }
    handleMenuClassName=()=>{
        let status=this.state.menuActiveType
        status ? this.setState({menuActiveType:0,loginActiveType:1})
            :
            this.setState({menuActiveType:1})
    }
    handleLoginClassName=()=> {
        let login=this.state.loginActiveType
        login ? this.setState({loginActiveType:0,menuActiveType:1})
            :
            this.setState({loginActiveType:1})
    }
    handleChangeUname=(e)=>{
        this.setState({uname:e.target.value})
    }
    handleChangeUpwd=(e)=>{
        this.setState({upwd:e.target.value})
    }
    handleLogin=(e)=>{
        e.preventDefault()
        let uname=this.state.uname
        let upwd=this.state.upwd
        console.log(uname,upwd)
        axios.get('https://api.uu20.top/api/login.php',{
            params:{
                uname:uname,
                upwd:upwd
            }
        })
            .then(data=>{
                if(data.data){
                    console.log(data.data)
                    alert("登录成功！")
                    let headerimg=data.data.headerimg
                    this.setState({loginStatus:true,loginActiveType:1,menuActiveType:1,headerimg:headerimg})
                    localStorage['uname']=data.data.uname
                }else {
                    alert('账号或密码错误')
                    console.log(data.data)
                }
            })
            .catch(error=>{
                console.log(error)
            })
        // fetch('https://api.uu20.top/api/login.php',{
        //     method:'POST',
        //     headers: new Headers({
        //         'Content-Type' : 'application/x-www-form-urlencoded'
        //     }),
        //     body:new URLSearchParams([['uname',uname],['upwd',upwd]]).toString()
        // })
        //     .then(res =>{
        //         //return res.text()  //返回字符串格式数据
        //         return res.json()   // 返回json格式数据
        //     })
        //     .then(res =>{
        //         console.log(res)
        //     })
        //     .catch(() =>{
        //         console.log("账号或者密码错误")
        //     })
    }
    handleOut=()=>{
        localStorage.clear('uname')
        this.setState({loginStatus:false,loginActiveType:1,menuActiveType:1})
        alert('退出成功')
    }
    render(){
        let status=this.state.menuActiveType
        let login=this.state.loginActiveType
        let loginStatus=this.state.loginStatus
        let uname=this.state.uname
        let headerimg=this.state.headerimg

        return(
            <div className='header'>
                <div className='nav container hidden-xs'>
                    <a href="/index.html" className='ico-header-logo'></a>
                    <a href="/index.html" className={this.handleNavClassName('index',1)}>首页</a>
                    <a href="/shop.html" className={this.handleNavClassName('shop')}>商城</a>
                    <a href="/demo.html" className={this.handleNavClassName('demo')}>案例</a>
                    <a href="/antd.html" className={this.handleNavClassName('antd')}>antd</a>
                    <a href="/mail.html" className={this.handleNavClassName('mail')}>mail</a>
                    <a href="/QQMusic.html" className={this.handleNavClassName('QQMusic')}>QQMusic</a>
                    <a href="javascript:void (0)" className='center ico-user-center'>
                        <div className='user-center-info'>
                            {
                                loginStatus ?
                                    <div>
                                        <div className='headerimg'>
                                            <img src={headerimg} className='img-responsive center-block' alt=""/>
                                        </div>
                                        <div className='login'>{uname}</div>
                                        <div className='outlogin' onClick={this.handleOut}>退出登录</div>
                                    </div>
                                    :
                                    [
                                        <div className='login' onClick={this.handleLoginClassName} key='login'>登录组件</div>,
                                        <div className='reg' key='reg'>注册组件</div>
                                    ]

                            }
                        </div>
                    </a>
                </div>
                <Login status={login}
                       loginStatus={loginStatus}
                       handleLoginClassName={this.handleLoginClassName}
                       handleLogin={this.handleLogin}
                       handleChangeUname={this.handleChangeUname}
                       handleChangeUpwd={this.handleChangeUpwd}
                />
                <div className='mobile-nav visibility-xs clear'>
                    <span className='title-mobile'>这就是一个React Demo</span>
                    <div className='ico-header-login' onClick={this.handleLoginClassName} >

                    </div>
                    <div className={login === 0 ? 'login-body-bg active' : 'login-body-bg'} onClick={this.handleLoginClassName}></div>
                    <div className={login === 0 ? 'login-body active' : 'login-body'} >
                        <Mobile
                            status={login}
                            uname={uname}
                            headerimg={headerimg}
                            loginStatus={loginStatus}
                            handleLoginClassName={this.handleLoginClassName}
                            handleLogin={this.handleLogin}
                            handleChangeUname={this.handleChangeUname}
                            handleChangeUpwd={this.handleChangeUpwd}
                            handleOut={this.handleOut}
                        />
                    </div>
                    <div className='ico-header-menu' onClick={this.handleMenuClassName} type={this.state.menuActiveType}>
                        <div className={status === 0 ? 'menu-body active' : 'menu-body'} >
                            <a href="/index.html" className={this.handleNavClassName('index',1)}>首页</a>
                            <a href="/shop.html" className={this.handleNavClassName('shop')}>商城</a>
                            <a href="/demo.html" className={this.handleNavClassName('demo')}>案例</a>
                            <a href="/antd.html" className={this.handleNavClassName('antd')}>antd</a>
                            <a href="/mail.html" className={this.handleNavClassName('mail')}>mail</a>
                            <a href="/center.html" className={this.handleNavClassName('center')}>个人中心</a>
                            <a href="/QQMusic.html" className={this.handleNavClassName('QQMusic')}>个人中心</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Header;