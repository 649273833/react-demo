import React from 'react';
import {Provider, connect} from 'react-redux';
import store from './store';
import {list} from './action';
import List from './List';
import '../../../public/css/collapse.pcss'
class Index extends React.Component{
    componentDidMount(){
        this.props.dispatch(list())
    }
    render(){
        let props = this.props;
        return(
            <div className='main'>
                <div className='my-collapse'>
                    <List {...props}/>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({storeState: state});

const Main = connect(
    mapStateToProps
)(Index);

export default () =>
    <Provider store={store}>
        <Main/>
    </Provider>
;