import React from 'react'
import TodoList from './TodoList'
import {Route,NavLink,Redirect,Link} from 'react-router-dom'

const Index = ({match}) =>
    <div>
        <div className='nav'>
            <NavLink to={`${match.url}/demo2-1`} activeClassName='selected' exact>demo2-1</NavLink>
            {/*<NavLink to='/demo2/demo2-2' activeClassName='selected' exact>demo2-2</NavLink>*/}
           <NavLink to={{
               pathname:`${match.url}/demo2-2`,
               serach:'?sort=this-sort',
               hash:'#the-hash',
               state:{fromDashboard:'222'}
           }} activeClassName='selected'>demo2-2</NavLink>


        </div>
        <Route path={`${match.url}`} exact render={()=>(<Redirect to={`${match.url}/demo2-1`}/>)}/>
        <Route path={`${match.url}/demo2-1`} component={TodoList}/>
        <Route path={`${match.url}/demo2-2`} component={TodoList}/>
    </div>

export default Index