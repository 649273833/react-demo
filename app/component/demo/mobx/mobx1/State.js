import {observable,action} from 'mobx';

class State {
    @observable num = 0;
    @action addNum = () => {
        this.num++
    };
    @action reductionNum = () =>{
        this.num--
    }
}
export default State