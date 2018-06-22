import React from 'react';
import {HashRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Flux1 from './flux1/Index';
import Flux2 from './flux2/Index';

const Index = ({match}) =>
    <HashRouter>
        <div>
            <div className="nav">
                <NavLink to="/Flux/Flux1" activeClassName='selected'>Flux1</NavLink>
                <NavLink to='/Flux/Flux2' activeClassName='selected'>flux2</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                   render={() => (<Redirect to={`${match.url}/Flux1`}/>)}/>
            <Route path={`${match.url}/Flux1`} component={Flux1}/>
            <Route path={`${match.url}/Flux2`} component={Flux2}/>
        </div>
    </HashRouter>
;

export default Index;