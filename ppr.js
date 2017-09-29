var archivo=process.argv[2];
var fs=require("fs");
var mos=fs.readFileSync("status.json","utf-8");
var ip=JSON.parse(mos);
for(var i=0;i<ip.stations.length;i++){
	for(var j=0;j<ip.stations[i].items.length;j++){
		if (archivo==ip.stations[i].items[j].name.toLowerCase()) {
			console.log(ip.stations[i].items[j]);
		}
	}
}
