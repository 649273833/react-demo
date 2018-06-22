import React from 'react'
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom'
import  {BundleFun} from "../../common/Bundle";
import Demo1 from './demo1/Demo1.bundle'
import Demo2 from './demo2/Demo2.bundle'

const Index=({match})=>
    <HashRouter>
        <div>
            <div className='nav'>
                <NavLink to='/Router/Demo1' activeClassName='selected'>demo1</NavLink>
                <NavLink to='/Router/Demo2' activeClassName='selected'>demo2</NavLink>
            </div>
            <Route exact path="/"
                   render={() => (<Redirect to="/Dome1"/>)}/>
            <Route path={`${match.url}/Demo1`} component={() => BundleFun(Demo1)}/>
            <Route path={`${match.url}/Demo2`} component={(props) => BundleFun(Demo2, props)}/>
        </div>
    </HashRouter>
export default Index