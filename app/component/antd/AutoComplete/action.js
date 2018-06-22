import axios from 'axios';
const KwSearch = (valueSelect) => (dispatch)=>{
    axios.get('http://www.zhuogao.club/data/search.php',{
        params:{
            kw:valueSelect
        }
    })
        .then(res =>{
            console.log(res.data);
            dispatch({type:'onSelect',valueSelect:valueSelect})
        })
        .catch(err =>{
            console.log(err)
        })
};
export {KwSearch}