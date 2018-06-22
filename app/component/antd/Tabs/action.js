import axios from 'axios';
const PaneData = () => (dispatch) =>{
    axios.get('https://api.uu20.top/api/ip.php')
        .then(res=>{
            dispatch({type:'PaneData',TabPaneData:res.data})
        })
};
export {PaneData}