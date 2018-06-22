import axios from 'axios'
const formValSubmit = (userName,password) => (dispatch) =>{
    console.log(userName,password)
    axios.get('https://api.uu20.top/api/login.php',{
        params:{
            uname:userName,
            upwd:password
        }
    })
        .then(res =>{
            if(res.data){
                let data=res.data;
                console.log(data);
                dispatch({type:'formVal',formVal:data})
            }else {
                console.log('err')
            }
        })
        .catch(err=>{
            console.log(err.msg)
        })
};
export {formValSubmit}


