import axios from 'axios';
const pageNumber = () => (dispatch)=>{
    axios.get('http://ow.uu20.top/data/count.php')
        .then(res =>{
            let page=res.data[0].c
            page=Number(page)
            dispatch({type:'PAGENUMBER',pageNumber:page})
        })
        .catch(err =>{
            console.log(err)
        })
};
export {pageNumber}