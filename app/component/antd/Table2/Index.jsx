import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab4 from './Tab4';
import Tab5 from './Tab5';
import Tab6 from './Tab6';
import Tab7 from './Tab7';
import Tab8 from './Tab8';
import Tab9 from './Tab9';
const Index = ({match})=>
    <div>
        <HashRouter>
            <div className='content-antd'>
                <div className='nav-antd'>
                    <NavLink to={`${match.url}/Tab1`} activeClassName='selected'>tab1</NavLink>
                    <NavLink to={`${match.url}/Tab2`} activeClassName='selected'>tab2</NavLink>
                    <NavLink to={`${match.url}/Tab3`} activeClassName='selected'>tab3</NavLink>
                    <NavLink to={`${match.url}/Tab4`} activeClassName='selected'>tab4</NavLink>
                    <NavLink to={`${match.url}/Tab5`} activeClassName='selected'>tab5</NavLink>
                    <NavLink to={`${match.url}/Tab6`} activeClassName='selected'>tab6</NavLink>
                    <NavLink to={`${match.url}/Tab7`} activeClassName='selected'>tab7</NavLink>
                    <NavLink to={`${match.url}/Tab8`} activeClassName='selected'>tab8</NavLink>
                    <NavLink to={`${match.url}/Tab9`} activeClassName='selected'>tab9</NavLink>
                </div>
                <Route exact path={`${match.url}`}
                    render={()=>(<Redirect to={`${match.url}/Tab1`}/>)}/>

                <Route path={`${match.url}/Tab1`} component={Tab1}/>
                <Route path={`${match.url}/Tab2`} component={Tab2}/>
                <Route path={`${match.url}/Tab3`} component={Tab3}/>
                <Route path={`${match.url}/Tab4`} component={Tab4}/>
                <Route path={`${match.url}/Tab5`} component={Tab5}/>
                <Route path={`${match.url}/Tab6`} component={Tab6}/>
                <Route path={`${match.url}/Tab7`} component={Tab7}/>
                <Route path={`${match.url}/Tab8`} component={Tab8}/>
                <Route path={`${match.url}/Tab9`} component={Tab9}/>
            </div>
        </HashRouter>
    </div>;

    export default Index;