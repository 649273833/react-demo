let checkInput = () =>{
    var b=document.form1.uin,a=document.form1.pwd;
    console.log(a,b)
    if(0==b.value.length){
        b.focus();
        return false;
    }if(0==a.value.length){
        a.focus();
        return false;
    }
    // document.form1.submit();
    setTimeout(" document.form1.pwd.value = '' ",500);
    return false;
}
export {checkInput}