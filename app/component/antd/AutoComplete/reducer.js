import axios from "axios/index";

export default (state = {
    dataSource: [],
    dataSource2: ['Burns Bay Road', 'Downing Street', 'Wall Street'],
    dataSource3: [],
    dataSource4: [{
        title: '话题',
        children: [{
            title: 'AntDesign',
            count: 10000,
        }, {
            title: 'AntDesign UI',
            count: 10600,
        }],
    }, {
        title: '问题',
        children: [{
            title: 'AntDesign UI 有多好',
            count: 60100,
        }, {
            title: 'AntDesign 是啥',
            count: 30010,
        }],
    }, {
        title: '文章',
        children: [{
            title: 'AntDesign 是一个设计语言',
            count: 100000,
        }],
    }],
    result: [],
    evl:''
},action)=>{
    let result=state.result;
    let dataSource=state.dataSource;
    let dataSource2=state.dataSource2;
    let dataSource3=state.dataSource3;
    let dataSource4=state.dataSource4;
    let evl=state.evl;
    switch (action.type){
        case 'handleSearch':
            let valueSearch=action.valueSearch;
            let dataSource=action.dataSource;
            dataSource=!valueSearch ? [] : [
                valueSearch,
                valueSearch + valueSearch,
                valueSearch + valueSearch + valueSearch,
            ];
            return {evl,result,dataSource,dataSource2,dataSource3,dataSource4};
        case 'onSelect':
            let valueSelect=action.valueSelect;
            console.log('selectkw:'+valueSelect);
            axios.get('http://www.zhuogao.club/data/search.php',{
                params:{
                    kw:valueSelect
                }
            })
                .then(res =>{
                    console.log(res.data);
                })
                .catch(err =>{
                    console.log(err)
                });

            return state;
        case 'handleSearch2':

            let valueSearch2=action.valueSearch2;
            if(!valueSearch2 || valueSearch2.indexOf('@')>=0){
                result = []
            }else {
                result = ['gmail.com','163.com','qq.com','uu20.top','vip.qq.com']
                    .map(domain => `${valueSearch2}@${domain}`)
            }
            result=result
            return {evl,result,dataSource,dataSource2,dataSource3,dataSource4};
        case 'onSelect2':
            let valueSelect2 = action.valueSelect2;
            console.log('selectemail:'+valueSelect2);
        case 'handleKeyPress':
            let ev=action.ev;
            console.log('ev:'+ev);
        case 'handleSearch3':
            let valueSearch3=action.valueSearch3;
            let dataSource3=action.dataSource3;
            dataSource3=!valueSearch3 ? [] : [
                valueSearch3,
                valueSearch3 + valueSearch3,
                valueSearch3 + valueSearch3 + valueSearch3,
            ];
            return {evl,result,dataSource,dataSource2,dataSource3,dataSource4};
        case 'onSelect3':
            let valueSelect3=action.valueSelect3;
            console.log('selecttext:'+valueSelect3);
            return state;
        case 'onSelect4':
            let tarevl=action.evl.target.value;
            evl=tarevl;
            return {evl,result,dataSource,dataSource2,dataSource3,dataSource4};
        case 'onClick4':
            let newevl=state.evl;
            console.log('selectkw4:'+newevl);
            axios.get('http://www.zhuogao.club/data/search.php',{
                params:{
                    kw:newevl
                }
            })
                .then(res =>{
                    console.log(res.data);
                })
                .catch(err =>{
                    console.log(err)
                });
            return state
        default:
            return state;
    }
}