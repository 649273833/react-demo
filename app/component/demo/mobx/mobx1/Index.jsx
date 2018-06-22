import React from 'react';
import {useStrict} from 'mobx';
import {observer} from 'mobx-react';
import State from './State';

useStrict(true);
const newState = new State();
@observer

class Index extends React.Component{
    render(){
        return(
            <div>
                <p>{newState.num}</p>
                <button onClick={newState.addNum}>+1</button>
                <button onClick={newState.reductionNum}>-1</button>
            </div>
        )
    }
}
export default Index