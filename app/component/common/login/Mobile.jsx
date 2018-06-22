import  React from 'react'

const Mobile = ({status,
                loginStatus,
                handleLoginClassName,
                handleLogin,
                handleChangeUname,
                handleChangeUpwd,
                handleOut,
                headerimg,
                uname}
) =>
    <div className='mobile'>
        <div>
            <h4>用户中心</h4>
            <div>
                {
                    loginStatus  ?
                        <div>
                            <div className='headerimg'>
                                <img src={headerimg} className='img-responsive center-block' alt=""/>
                            </div>
                            <div className='login'>{uname}</div>
                            <div className='outlogin' onClick={handleOut}>退出登录</div>
                        </div>
                :
                <form action="" onSubmit={handleLogin}>
                    <div className='def-head-ico'>
                        <img src="" alt=""/>
                    </div>
                    <div className='mobile-uname'>
                        <input type="text" placeholder='账号' onChange={handleChangeUname}/>
                    </div>
                    <div className='mobile-upwd'>
                        <input type="password" placeholder='密码' onChange={handleChangeUpwd} />
                    </div>

                    <button type="submit" className='btn btn-info btn-block'>登录</button>
                </form>
                }
            </div>
        </div>
    </div>
export default Mobile