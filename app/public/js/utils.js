// 获取地址栏的参数
let urlParam=(name,url)=>{
    let reg =new RegExp(".*[&?]" + name + "=([^&]*)(&|$)");
    let r;
    if(!url){
        r=window.location.search.match(reg)
    }else {
        r=url.match(reg)
    }
    if(r) return decodeURIComponent(r[1]);
    return
}

// 判断手机号码
let isMobile =(val)=>{
    let reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(val)
}

let MyAnchor = (anchorName) =>{
    if (anchorName) {
        let anchorElement = document.getElementById(anchorName);
        if(anchorElement) { anchorElement.scrollIntoView(); }
    }
}
export {urlParam,isMobile,MyAnchor}