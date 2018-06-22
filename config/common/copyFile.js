const fs=require('fs');
const path=require('path')

const filePath=path.resolve()

const copy =function (src,dst) {
    if(fs.existsSync(src)){
        fs.readdir(src,function (err,files) {
            if(err){console.log(err);return}
            files.forEach(function (filename) {
                var url=path.join(src,filename),
                    dest=path.join(dst,filename)
                console.log(url)
                console.log(dest)
                fs.stat(path.join(src,filename),function (err,stats) {
                    if(err) throw err;
                    if(stats.isFile()){
                        readable=fs.createReadStream(url)
                        writable=fs.createWriteStream(dest,{encoding:'utf-8'})
                        readable.pipe(writable)
                    }else if(stats.isDirectory){
                        exists(url,dest,copy)
                    }
                })
            })
        })
    }else {
        console.log("目录不存在，无法读取")
        return
    }
}
function exists(url,dest,callback) {
    fs.exists(dest,function (exists) {
        if(exists){
            callback && callback(url,dest)
        }else {
            fs.mkdir(dest,0777,function (err) {
                if(err) throw err;
                callback && callback(url,dest)
            })
        }
    })
}
module.exports=copy