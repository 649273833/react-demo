import React from 'react';
import jsonp from 'fetch-jsonp';
class Footer extends React.Component{
    state = {
        ip:'',
        pro:'',
        city:''
    };
    Addip =() => {
        jsonp('http://whois.pconline.com.cn/ipJson.jsp')
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    ip : res.ip,
                    pro : res.pro,
                    city : res.city
                })
                jsonp('https://api.uu20.top/api/ip_add.php',{
                    param:{
                        cip:res.ip,
                        cid:res.city,
                        cname:res.pro
                    }
                })
                    .then(res=>res.json())
                    .then(res=>console.log(res.code))
                    .catch(err=>console.log(err))
            })
            .catch(err=>console.log(err))
    };
    componentDidMount(){
        // this.Addip()
    }
    render(){
        let {pro,city,ip} = this.state;
        return(
            <div className='footer'>
                {/*<p>*/}
                    {/*来自：{pro}-{city}-{ip}*/}
                {/*</p>*/}
                <p>
                    本网站仅提供数据分享服务，您应该对使用数据，分享的结果自行承担风险。
                    如出现任何后果，本网站不承担任何法律责任。
                </p>
            </div>
        )
    }
}

export default Footer;