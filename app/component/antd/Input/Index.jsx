import React from 'react';
import MyInput from './Input';
import store from './store'
import {Provider, connect} from 'react-redux';
class Index extends React.Component{
    render(){
        let props = this.props;
        return(
            <div>
                <MyInput {...props}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({storeState:state});
const Main = connect (
    mapStateToProps
)(Index);
export default ()=>
    <Provider store={store}>
        <Main/>
    </Provider>