import React from 'react';
import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
import Tags1 from './Tags1';
const Index = ({match}) =>
    <div>
        <HashRouter>
            <div>
                <div className='nav-antd'>
                    <NavLink to={`${match.url}/Tages1`} activeClassName='selected'>Tags1</NavLink>
                </div>
                <Route exact path={`${match.url}`}
                       render={()=>(<Redirect to={`${match.url}/Tags1`} />)}
                />
                <Route path={`${match.url}/Tags1`} component={Tags1}/>
            </div>
        </HashRouter>
    </div>;
export default Index