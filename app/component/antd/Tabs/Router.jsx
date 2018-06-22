import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import {BundleFun} from "../../common/Bundle";
import Tab1 from './Tab1';
class MyRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <div className='content-antd'>
                    <div className='nav-antd'>
                        <NavLink to='/Tabs/Tab1' activeClassName='selected'>tab1</NavLink>
                    </div>
                    <Route exact path='/'
                           render={()=>(<Redirect to='/Tabs/Tab1'/>)}/>
                    <Route path='/Tabs/Tab1' component={(props)=>BundleFun(Tab1,props)}/>
                </div>
            </HashRouter>
        )
    }
}
export default MyRouter