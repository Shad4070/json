var archivo=process.argv;
var fs=require("fs");
var mos=fs.readFileSync("status.json","utf-8");
var ip=JSON.parse(mos);
console.log(ip.stations.length);
console.log(ip.stations[1]);