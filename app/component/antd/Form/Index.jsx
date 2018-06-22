import React from 'react';
import {Provider,connect,Redirect} from 'react-redux';
import WrappedHorizontalLoginForm from './MyForm';
import store from './store';
class Index extends React.Component{
    render(){
        let props = this.props;
        return(
            <div>
                <WrappedHorizontalLoginForm {...props}/>
            </div>
        )
    }
}
const mapStateToProps = state =>({storeState:state});
const Main = connect (
    mapStateToProps
)(Index);
export default ()=>
    <Provider store={store}>
        <Main/>
    </Provider>