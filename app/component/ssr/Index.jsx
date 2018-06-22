import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import '../../public/css/ssr.pcss'
import 'antd/dist/antd.css'
import XianLu from './XianLu';
import XianLu2 from './xianLu2';
import Add from './Add';
import Add2 from './add2';
import Footer from './Footer';
import Ios from './Ios'
const Index = () =>
    <div>
        <HashRouter>
            <div>
                <div className='nav-ssr'>
                    <NavLink to='/XianLu' activeClassName='selected'>线路列表</NavLink>
                    <NavLink to='/Add' activeClassName='selected'>添加线路</NavLink>
                    <NavLink to='/Ios' activeClassName='selected'>ios</NavLink>
                </div>
                <Route exact path='/'
                       render={()=>(<Redirect to='/XianLu2'/>)}
                />
                <Route path='/XianLu' component={XianLu2}/>
                <Route path='/Add' component={Add2}/>
                <Route path='/Ios' component={Ios}/>
            </div>
        </HashRouter>
        <Footer/>
    </div>;
export default Index