import React from 'react';
import {Provider ,connect} from 'react-redux';
import store from './store';
import MyTree from './MyTree';

class Index extends React.Component{
    render(){
        let props = this.props;
        return (
            <div className='content-antd'>
                <MyTree {...props}/>
            </div>
        )
    }
}
const mapStateToProps = state =>({storeState : state});
const Main = connect (
    mapStateToProps
)(Index);
export default () =>
    <Provider store={store}>
        <Main/>
    </Provider>;
