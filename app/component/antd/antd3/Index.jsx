import React from 'react';
import axios from "axios";
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isshow:false,
            isdocument:false
        };
        document.onclick=function () {
            console.log('qqq');
            if(this.state.isshow){//只有为true时才把isdocument改为true，这个时候才可以点击任何地方取消modal
                setTimeout(()=>{
                    this.setState({isdocument:true})
                },1)//延时设置是为了不让document点击事件立即生效发生冲突
            }else {
                this.setState({isdocument:false})
            }
            if(this.state.isdocument){
                console.log('www');
                this.setState({isshow:!this.state.isshow});//设置modal转态
                setTimeout(()=>{
                    this.setState({isdocument:false})
                },1)//完了isdocument后重新初始为false状态
            }
        }.bind(this)
    }
    isShow = () =>{
        this.setState({
            isshow:!this.state.isshow//设置显示modal
        });
       console.log(1)
    };
    nodocument = () =>{
        this.setState({isdocument:false})//点击modal的时候设置isdocument为false，所以点modal里面的东西，modal不会消失
    };
    componentDidMount(){
        // axios.get('http://182.150.24.194:44444/web/rest/out/fetchSiteAllNodes')
        //     .then(res =>{
        //         console.log(res.data)
        //     })
        //     .catch(error =>{
        //         console.log(error.errmsg)
        //     })
        fetch('http://182.150.24.194:44444/web/rest/out/fetchSiteAllNodes'
            // ,{
            //     method:'GET',
            //     headers : new Headers({
            //         'Content-Type':'Access-Control-Allow-Origin:*'
            //     })
            // }
        )
            .then(res =>{
                return res.json()
            })
            .then(res =>{
                console.log(res)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render() {
        let isshow=this.state.isshow
        return (
            <div>
                <button onClick={this.isShow}>
                    {
                    isshow ? '1' : '0'
                    }
                </button>
                {
                    isshow ?
                        <div className='testmodal' onClick={this.nodocument}>
                            <ul>
                                <li>111111111</li>
                                <li>222222222</li>
                                <li>333333333</li>
                                <li>444444444</li>
                                <li>555555555</li>
                            </ul>
                        </div>
                        : null
                }
            </div>
        );
    }
}

export default App