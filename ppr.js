var archivo=process.argv[2];
var reem="";
for(var z=0;z<archivo.length;z++){
		reem+=(archivo.charAt(z)=="-")?" ":archivo.charAt(z);
}
var fs=require("fs");
var mos=fs.readFileSync("status.json","utf-8");
var ip=JSON.parse(mos);
for(var i=0;i<ip.stations.length;i++){
	for(var j=0;j<ip.stations[i].items.length;j++){

		if (reem==ip.stations[i].items[j].name.toLowerCase()) {
			console.log(ip.stations[i].items[j]);
		}
	}
}
