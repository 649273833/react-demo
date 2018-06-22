import React from 'react';
import axios from 'axios';
import jsonp from 'fetch-jsonp';
import huatong  from '../../img/huatong.png';
import close  from '../../img/Close.png';
class Index extends React.Component{
    state = {
        isSearch : false,
        searchData:''
    }
    changeSearch = (e) =>{
        let val = e.target.value;
        this.setState({searchData:val})
        if(val){
            this.setState({isSearch:true})
        }else {
            this.setState({isSearch:false})
        }
    }
    handleCloseSearch = () =>{
        this.setState({isSearch:false,searchData:''})
    }
    onKeyup = (e) =>{
        if(e.keyCode === 0){
            console.log('keyup');
            let str = this.state.searchData;
            let urlString = 'http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=10&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8¬ice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w='+str
            jsonp(urlString)
                .then(res=>res.json())
                .then(res=>{
                    console.log(res.data)
                })
                .catch(res=>{
                    console.log('err')
                })
        }
    }
    render(){
        let toggleShowSearch = this.props.toggleShowSearch;
        let {isSearch,searchData} = this.state;
        return(
            <div className='search-content'>
                <nav className='nav'>
                    <input
                        type="text"
                        ref='searchInput'
                        value={searchData}
                        onKeyPress={this.onKeyup}
                        onChange={this.changeSearch}
                        placeholder='搜索音乐、MV、歌单、歌手、用户'
                    />
                    <span className='search-icon'>
                        {
                            isSearch ?
                                <img src={close} alt="" onClick={this.handleCloseSearch}/>
                                :
                                <img src={huatong} onClick={()=>console.log('语音搜索')} alt=""/>
                        }
                    </span>
                    <span onClick={toggleShowSearch}>取消</span>
                </nav>

            </div>
        )
    }
}
export default Index;