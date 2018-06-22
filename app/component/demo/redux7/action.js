import axios from 'axios'
const list = () => (dispatch) =>{
    axios.get('https://api.uu20.top/api/ip.php')
        .then(res => {
            console.log(res.data);
            dispatch({type:'LIST',list:res.data});
        })
        .catch(err =>{
            console.log(err)
        })
};

export {list}