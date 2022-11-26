var oxSat= 96
let pulseRate = 96
function isOxygenSaturationNormal(oxSat){
    if (oxSat >= 96){
        console.log("O2Sat result : Normal reading");
    }else if (oxSat===95){
        console.log("O2Sat result : Acceptable to continue home monitoring.");
    }else if ((oxSat>92 && oxSat<95)){
        console.log("O2Sat result : Seek advice from health professionals.");
    }else if(oxSat <= 92){
        console.log("O2Sat result : Seek urgent medical advice.");
    }else {
        console.log("O2Sat result : The value is not valid");
    }
}
function isPulserateNormal(pulseRate){
    if (pulseRate >39 && pulseRate<101){
        console.log("Pulse Rate result : Normal reading");
    }else if (pulseRate >100 && pulseRate<110){
        console.log("Pulse Rate result : Acceptable to continue home monitoring.");
    }else if ((pulseRate >109 && pulseRate<131)){
        console.log("Pulse Rate result : Seek advice from health professionals.");
    }else if(pulseRate >= 131){
        console.log("Pulse Rate result : Seek urgent medical advice.");
    }else {
        console.log("Pulse Rate result : The value is not valid");
    }
}
isOxygenSaturationNormal(oxSat)
isPulserateNormal(pulseRate)
