import React from 'react';
import store from './store';
import {Provider,connect} from 'react-redux';
import ValidateStatus from './ValidateStatus'
class Index extends React.Component{
    render(){
        let props=this.props;
        return(
            <div>
                <ValidateStatus {...props}/>
            </div>
        )
    }
}
const mapStoreToProps = state =>({storeState:state});
const Main = connect (
    mapStoreToProps
)(Index);
export   default ()=>
    <Provider store={store}>
        <Main/>
    </Provider>