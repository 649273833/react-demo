import React from 'react';
import {Provider, connect} from 'react-redux';
import store from './store'
import IPList from './IPList'
import CityList from './CityList'
import {cityList,ipList,loading} from "./action";
class Index extends React.Component {
    componentDidMount(){
        this.props.dispatch(loading());
        this.props.dispatch(cityList());
        this.props.dispatch(ipList());
    }
    render() {
        let props = this.props;
        return (
                <div className="todoList" >
                    <div>
                        {
                            this.props.storeState.loading ? 1 : 0
                        }
                        <button onClick={()=>this.props.dispatch({type:'LOADING'})}>+</button>
                    </div>
                     <div className="cont clear">
                        <div className='box'>
                            全部IP
                            <IPList {...props}/>
                        </div>
                        <div className='box'>
                            全部省份
                            <CityList {...props}/>
                        </div>
                    </div>
                </div>

        );
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