import React from 'react';
import {HashRouter,Redirect,Route,NavLink} from 'react-router-dom';
import Tree1 from './Tree1';
import Tree2 from './Tree2';
import Tree3 from './Tree3';
import Tree4 from './Tree4';
const Index = ({match}) =>
    <HashRouter>
        <div className='content-antd'>
            <div className='nav-antd'>
                <NavLink to={`${match.url}/Tree1`} activeClassName='selected'>Tree1</NavLink>
                <NavLink to={`${match.url}/Tree2`} activeClassName='selected'>Tree2</NavLink>
                <NavLink to={`${match.url}/Tree3`} activeClassName='selected'>Tree3</NavLink>
                <NavLink to={`${match.url}/Tree4`} activeClassName='selected'>Tree4</NavLink>
            </div>
            <Route exact path={`${match.url}`}
                render={()=>(<Redirect to={`${match.url}/Tree1`}/>)}
            />
            <Route path={`${match.url}/Tree1`} component={Tree1}/>
            <Route path={`${match.url}/Tree2`} component={Tree2}/>
            <Route path={`${match.url}/Tree3`} component={Tree3}/>
            <Route path={`${match.url}/Tree4`} component={Tree4}/>
        </div>
    </HashRouter>;
            export default Index