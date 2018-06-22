import React from 'react';
import {Provider, connect} from 'react-redux';
import store from './store';
import Progress from './Progress'

class Index extends React.Component{
    componentDidMount(){

    }
    render(){
        let props = this.props;
        return(
            <div>
                <Progress {...props}/>
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