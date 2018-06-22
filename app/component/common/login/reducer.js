import axios from 'axios'
export default (state ={
    menuActiveType:1,
    loginActiveType:1,
    loginStatus:false,
    uname:'',
    upwd:'',
    headerimg:'',
    pathname:window.location.pathname
},action)=>{
    let status=state.menuActiveType
    let login=state.loginActiveType
    let uname=state.uname
    let upwd=state.upwd
    let loginStatus=state.loginStatus
    let headerimg=state.headerimg
    let pathname=state.pathname
    switch (action.type){
        case 'handleNavClassName':
            let {name,index}=action.handleNavClassNameObj
            if(pathname.indexOf(name+ '.html')!==-1){
                 return 'selected'
             }else {
                 return null
             }
        case 'handleMenuClassName':
            if(status){
                status=0,login=1
                return state
            }else {
                status=0
                return state
            }
        case 'handleLoginClassName':
            if(login){
                status=1,login=0
                return state
            }else {
                login=1;
                return state
            }
        case 'handleChangeUname':
            let e=action.handleChangeUnameObj;
            uname=e.target.value;
            return state;
        case 'handleChangeUpwd':
            let e2=action.handleChangeUpwdObj;
            upwd=e2.target.value;
            return state;
        case 'handleLogin':
            let e3=action.handleLoginObj;
            e3.preventDefault()
            let uname=state.uname
            let upwd=state.upwd
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
                        (   loginStatus=true,
                            login=1,
                            status=1,
                            headerimg=headerimg
                        )
                        return state
                        localStorage['uname']=data.data.uname
                    }else {
                        alert('账号或密码错误')
                        console.log(data.data)
                        return state
                    }
                })
                .catch(error=>{
                    console.log(error)
                    return state
                })
        case 'handleOut':
            localStorage.clear('uname')
            (loginStatus=false,login=1,status=1)
            alert('退出成功')
            return state
        default:
            return state
    }


}
