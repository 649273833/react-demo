import React from 'react';
import {Provider ,connect} from 'react-redux';
import store from './store';
import ButtonSize from './Button';

class Index extends React.Component{
    render(){
        let props=this.props;
        return(
            <div className='content-antd'>
                <ButtonSize {...props}/>
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
