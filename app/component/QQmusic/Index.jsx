import React from 'react';
import {HashRouter,Redirect,Route,NavLink} from 'react-router-dom';
import './css/music.pcss'
import My from './common/My/Index';
import Find from './common/Find/Index';
import Pavilion from './common/Pavilion/Index';
import Footer from './common/Footer/Index';
import Search from './common/My/Serach';
import menu from './img/menu.png'
import plus from './img/plus.png'
import search from './img/search.png'
import coverImg from './img/cover.png'
class Index extends React.Component{
    state = {
        showSearch:false,
        cover:true,
    }
    componentDidMount () {
        setTimeout(()=>this.setState({cover:false}),1500)
    }
    toggleShowSearch = () =>{
        this.setState({showSearch:!this.state.showSearch})
    }
    render(){
        let {showSearch,cover} = this.state;
        return(
            <div className='music-nav'>
                    <HashRouter>
                        <div>
                            {
                                cover ?
                                    <img src={coverImg} className='cover'/>
                                    : null
                            }
                            <div className='nav clear'>
                                <div className='menu'>
                                    <img src={menu} />
                                </div>
                                <div className='nav-music'>
                                    <div  className='nav-music-link'>
                                        <NavLink to='/Music/My' activeClassName='selected'>我的</NavLink>
                                        <NavLink to='/Music/Pavilion' activeClassName='selected'>音乐馆</NavLink>
                                        <NavLink to='/Music/Find' activeClassName='selected'>发现</NavLink>
                                    </div>
                                </div>
                                <div className='plus'>
                                    <img src={plus} />
                                </div>
                                <div className='search'>
                                    <div onClick={this.toggleShowSearch}><img src={search} alt=""/>搜索</div>
                                    {
                                        showSearch ?  <Search toggleShowSearch={this.toggleShowSearch}/> : null
                                     }
                                </div>
                            </div>

                            <div className='music-content'>
                                <Route exact path='/' render={()=>(<Redirect to='/Music/My'/>)}/>
                                <Route path='/Music/My' component={My}/>
                                <Route path='/Music/Pavilion' component={Pavilion}/>
                                <Route path='/Music/Find' component={Find}/>
                            </div>
                        </div>
                    </HashRouter>
                <Footer/>
            </div>
        )
    }
}
export default Index