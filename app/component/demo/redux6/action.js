
import axios from 'axios';
const loading = () => (dispatch) => {
  dispatch({type:'LOADING'});

};
const cityList = () => (dispatch,getState) =>{
    axios.get('https://api.uu20.top/api/ip.php')
        .then(res => {
            // console.log(1,getState());
            dispatch({type:'CITY_LIST',citylist:res.data});
        })
        .catch(err =>{
            console.log(err)
        })
};
const ipList = () => (dispatch,getState) =>{
    axios.get('https://api.uu20.top/api/ip.php')
        .then(res => {
            // console.log(2,getState());
            dispatch({type:'IP_LIST',iplist:res.data});
        })
        .catch(err =>{
            console.log(err)
        })
};
export {cityList,ipList,loading}