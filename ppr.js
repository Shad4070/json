var archivo=process.argv;
var fs=require("fs");
var mos=fs.readFileSync("status.json","utf-8");
var ip=JSON.parse(mos);
for(var i=0;i<ip.stations.lenght;i++){
	for(var j=0;j<ip.stations.items.lenght;j++){
		if (archivo[2]==ip.stations[i].items[j].name) {
			console.log(ip.stations[i].items[j]);
		}
	}
}
console.log("No se encontro");