import React from 'react'


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
        }
    }


    render(){
        let status=this.props.status
        let handleLoginClassName=this.props.handleLoginClassName
        let handleLogin=this.props.handleLogin
        let handleChangeUname=this.props.handleChangeUname
        let handleChangeUpwd=this.props.handleChangeUpwd
        let uname=this.state.uname
        let upwd=this.state.upwd
        return(
            <div>
                <div className={status === 0 ? 'login-modal-bg active hidden-xs' : 'login-body-bg hidden-xs'} onClick={handleLoginClassName}></div>
                <div className={status ===0 ? 'login-modal active hidden-xs' : 'login-modal hidden-xs'}>
                    <form onSubmit={handleLogin}>
                        <div className='colse-modal'>
                            <div className='svg-header'>
                                <img src={require('../../../public/img/svg-header.svg')} className='img-responsive center-block' alt=""/>
                            </div>
                            <div className='close' onClick={handleLoginClassName}></div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-name">账号</span>
                            </div>
                            <input type="text" className="form-control"
                                   placeholder="账号"
                                   aria-label="Username"
                                   aria-describedby="basic-name"
                                   ref='uname'
                                   value={uname}
                                   onChange={handleChangeUname}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-pwd">密码</span>
                            </div>
                            <input type="password" className="form-control"
                                   placeholder="密码"
                                   aria-label="Userpwd"
                                   aria-describedby="basic-pwd"
                                   ref='upwd'
                                   value={upwd}
                                   onChange={handleChangeUpwd}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input type="submit" value='登录'  className="btn btn-block btn-success"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login