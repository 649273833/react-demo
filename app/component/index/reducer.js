import axios from "axios/index";

export default (state ={
    iplist:[]
}, action)=>{
    let iplist=state.iplist
    switch (action.type){
        case 'ITEM':
            axios.post('https://api.uu20.top/api/ip.php')
                .then((data)=>{
                    console.log(data.data)
                    let iplist=data.data
                    iplist=iplist
                    return {iplist}
                })
                .catch((err)=>{
                    console.log(err)
                    return state
                })

    }
}