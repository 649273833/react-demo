import React from 'react';
import {HashRouter, Route, NavLink} from 'react-router-dom'
import Router from './router/Index'
import ReFast from './refast/Index'
import Flux from './flux/Index'
import Redux from './redux/Index'
import Redux4 from './redux4/Index'
import Redux5 from './redux5/Index'
import Redux6 from './redux6/Index'
import Redux7 from './redux7/Index'
import Mobx from './mobx/Index'
import '../../public/css/demo.pcss'

const Index = () =>
    <HashRouter>
        <div className="content clear">
            <div className="nav navleft">
                <NavLink to="/Router" activeClassName="selected">router</NavLink>
                <NavLink to="/ReFast" activeClassName="selected">refast</NavLink>
                <NavLink to="/Flux" activeClassName="selected">Flux</NavLink>
                <NavLink to='/Redux' activeClassName='selected'>redux</NavLink>
                <NavLink to='/Redux4' activeClassName='selected'>redux4</NavLink>
                <NavLink to='/Redux5' activeClassName='selected'>redux5</NavLink>
                <NavLink to='/Redux6' activeClassName='selected'>redux6</NavLink>
                <NavLink to='/Redux7' activeClassName='selected'>redux7</NavLink>
                <NavLink to='/Mobx' activeClassName='selected'>mobx</NavLink>
            </div>
            <br/>
            <Route path="/Router" component={Router}/>
            <Route path="/ReFast" component={ReFast}/>
            <Route path="/Flux" component={Flux}/>
            <Route path='/Redux' component={Redux}/>
            <Route path='/Redux4' component={Redux4}/>
            <Route path='/Redux5' component={Redux5}/>
            <Route path='/Redux6' component={Redux6}/>
            <Route path='/Redux7' component={Redux7}/>
            <Route path='/Mobx' component={Mobx}/>
        </div>
    </HashRouter>
;

export default Index;