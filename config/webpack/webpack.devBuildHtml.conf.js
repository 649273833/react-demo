const fs=require('fs')
const nodeCommon=require('../common/nodeCommon')
const webpackFile=require('./webpack.file.conf')
const entryBuild=require('../entry/entry')
const webpackComConf=require('./webpack.com.conf')

nodeCommon.deleteFile(webpackFile.devDirectory)

fs.mkdirSync(webpackFile.devDirectory)
webpackFile.copyObj.map((data)=>{
    let to=webpackFile.devDirectory+data.to.substring(1,data.to.length)
    if(data.to !=='./'){
        fs.mkdirSync(to)
    }
    nodeCommon.copyFile(data.from,to)
})

let htmlCont = fs.readFileSync('index.html','utf-8')

let scriptInsert=`
    <script type=text/javascript src=js/manifest.js></script>
    <script type=text/javascript src=js/vendor.js></script>
    <script type=text/javascript src=js/common.js></script>
    <script type=text/javascript src=js/key.js></script>
`
htmlCont = htmlCont.replace('</body>', scriptInsert+'</body>')
entryBuild.map((data) => {
    fs.writeFile(webpackFile.devDirectory + '/' + data.name + '.html',
        htmlCont.replace('js/key.js', 'js/' + data.name + '.js').replace('<%= htmlWebpackPlugin.options.title %>', webpackComConf.titleFun(data.name,data.title)),
        'utf8',
        function (err) {
            if (err) {
                return console.log(err);
            }
        });
});