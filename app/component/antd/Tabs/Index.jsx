import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
const Index = ({match})=>
    <div>
        <HashRouter>
            <div className='content-antd'>
                <div className='nav-antd'>
                    <NavLink to={`${match.url}/Tab1`} activeClassName='selected'>tab1</NavLink>
                    <NavLink to={`${match.url}/Tab2`} activeClassName='selected'>tab2</NavLink>
                </div>
                <Route exact path={`${match.url}`}
                       render={()=>(<Redirect to={`${match.url}/Tab1`}/>)}/>

                <Route path={`${match.url}/Tab1`} component={Tab1}/>
                <Route path={`${match.url}/Tab2`} component={Tab2}/>
            </div>
        </HashRouter>
    </div>;
export default Index;