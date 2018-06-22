let titleFun = function(chunkName,title){
    let titleDef = '神经病摇摇欲坠';
    if(chunkName.indexOf('index') !==-1){
        return titleDef;
    }else{
        return title + '-' + titleDef;
    }
};
module.exports = {
    titleFun:titleFun
};
// 356702089856174    8
// 355337082446177    7