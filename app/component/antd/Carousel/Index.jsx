import React from 'react';
import {Provider,connect} from 'react-redux';
import MyCarousel from './MyCarousel';
import store from './store';

class Index extends React.Component{
    render(){
        let props = this.props;
        return(
            <div>
                <MyCarousel {...props}/>
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
