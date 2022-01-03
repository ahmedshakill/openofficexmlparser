var {XMLParser, XMLBuilder, XMLValidator}=require('fast-xml-parser');
var fxp=new XMLParser();

var fs=require('fs');
const { stringify } = require('querystring');


var data1="";
var data2="";
try{
    data1 = fs.readFileSync('./slide1.xml','utf8');
    data2 = fs.readFileSync('./slide2.xml','utf8');
}catch(err){
    console.error(err);
}

function iterate(obj) {
    for (var property in obj) {
        // console.log(property)
        if(property=="a:prstGeom"){
            console.log(typeof obj[property])
            console.log(obj[property])
        }
        if (obj.hasOwnProperty(property)) {
            // console.log(obj[property])                
            if (typeof obj[property] == "object"){
                iterate(obj[property]);
            }
            else if(property=="a:t"){
                // console.log(property + "   " + obj[property]);
                console.log( obj[property]);
            }
            
        }
    }
}

var parsed1=fxp.parse(data1);
var parsed2=fxp.parse(data2);
console.log("\nSlide1\n")
iterate(parsed1)
console.log("\nSlide2\n")
iterate(parsed2)
console.log("\n")
// iterate(parsed1)
// console.log(Object.keys(parsed1['p:sld']['p:cSld']['p:spTree']['p:sp'][0]).length)
// console.log((parsed1['p:sld']['p:cSld']['p:spTree']['p:sp'][0]['p:txBody']['a:p']['a:r']['a:t']))
// console.log((parsed1['p:sld']['p:cSld']['p:spTree']['p:sp'][1]['p:txBody']['a:p']['a:r']['a:t']))
// console.log(fxp.parse(data))