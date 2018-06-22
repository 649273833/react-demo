import React from 'react';
import {Card} from 'antd';
class Ios extends React.Component{
    render(){
        return(
            <div className='ios'>
                <div className='alert'>
                    <Card>
                        IOS 版本 <a href="https://pan.baidu.com/s/1lGYBleN8jtJC0-Sbs9WGNQ">Shadowrocket</a>
                        <br/>
                        需要下载到电脑端，通过其他软件安装到手机上，比如PP助手，爱思助手等等。
                        <br/>
                        或者使用美区Apple id 下载另外一款软件
                        <a href="https://itunes.apple.com/us/app/potatso-lite/id1239860606?mt=8">Potatso Lite</a>
                        <br/>
                        Apple ID：aqpnhwe@icloud.com
                        <br/>
                        密码：Openvpn123..
                    </Card>
                </div>
            </div>
        )
    }
}

export default Ios