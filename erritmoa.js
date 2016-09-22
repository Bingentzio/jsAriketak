var distantzia = process.argv[2];
var denbora = process.argv[3];

if (process.argv.length !== 4) {
console.log(process.argv[3]);
    console.error('bi argumentu distantzia km-tan (x) eta denbora (o:m:s):: adb=>  10 0:41:34');
    process.exit(1);
}
var den=denbora.split(":");
var orduak = den[0];
var minutuak =den[1];
var segunduak = den[2];

if(den.length !== 3){
    console.error('denbora honela ipini=> o:m:s ');
    process.exit(1);
}

if(minutuak<60 & segunduak <60){

var segTot= parseInt(segunduak) +  parseInt(minutuak*60) +  parseInt(orduak*360);
var erritSeg= segTot / distantzia;
var m =  parseInt(erritSeg/60);
var s =  parseInt(erritSeg % 60);
if (m <10) { m = "0" + m}
if (s <10) { s = "0" + s}

console.log(m+":"+s+" min/km");

}
else{
    console.error('minutu eta segunduak 0-59 artean!');
    process.exit(1);
}

