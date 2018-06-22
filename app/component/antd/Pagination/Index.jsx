import React from 'react';
import {Provider, connect} from 'react-redux';
import store from './store';
import MyPage from './Pagination';
import {pageNumber} from "./action";

class Index extends React.Component{
    componentDidMount(){
        this.props.dispatch(pageNumber())
    }
    render(){
        let props = this.props;
        return(
            <div>
                <MyPage {...props}/>
            </div>
        )
    }
}
const mapStateToProps = state =>({storeState:state});
const Main = connect (
    mapStateToProps
)(Index);

export default () =>
    <Provider store={store}>
        <Main/>
    </Provider>