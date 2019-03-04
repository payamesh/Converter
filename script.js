//-------------   VARIABLES   ------------//

let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let valVal = val1.value;
let res = document.getElementById('result_currency');
let paramOne = document.getElementById('param1');
let paramOneVal = paramOne.value;
let paramTwo = document.getElementById('param2');
let paramTwoVal = paramTwo.options[paramTwo.selectedIndex].value;


// -----       RESETA SÅ ATT JS FATTAR ATT OPTION ÄR BYTT-----//
function onchangeParamOne(){
    paramOneVal = paramOne.value;
    console.log(paramOneVal);

}
function onchangeParamTwo(){
    paramTwoVal = paramTwo.value;
console.log(paramTwoVal);
}
function onChangeInput(){
valVal = val1.value;
console.log(valVal);
}

/*     ---------------currency Converters---------------*/
function sekToUsd(val){

   let sekToUsd= 0.1073;  
    val = val * sekToUsd;
    console.log(val);
    return val;
}
function sekToEur(val){
   let sekToEur= 0.09453;  
    val = val * sekToEur;
    console.log(val);
    return val;
}
function sekToPound(val){
   let sekToPound= 0.08215;  
    val = val * sekToPound;
    console.log(val);
    return val;
}
function eurToSek(val){
    let eurToSek= 10.5775;  
    val = val * eurToSek;
    console.log(val);
    return val;
}
function eurToUsd(val){
    let eurToUsd= 1.1356;  
    val = val * eurToUsd;
    console.log(val);
    return val;
}
function eurToPound(val){
    let eurToPound= 0.8686;  
    val = val * eurToPound;
    console.log(val);
    return val;
}
function usdToSek(val){
    let usdToSek= 9.3110;  
    val = val * usdToSek;
    console.log(val);
    return val;
}
function usdToEur(val){
    let usdToEur= 0.8805;  
    val = val * usdToEur;
    console.log(val);
    return val;
}
function usdToPound(val){
    let usdToPound= 0.7649;  
    val = val * usdToPound;
    console.log(val);
    return val;
}
function poundToSek(val){
    let poundToSek= 12.1710;  
    val = val * poundToSek;
    console.log(val);
    return val;
}
function poundToUsd(val){
    let poundToUsd= 1.3072;  
    val = val * poundToUsd;
    console.log(val);
    return val;
}
function poundToEur(val){
    let poundToEur= 1.1511;  
    val = val * poundToEur;
    console.log(val);
    return val;
}
/*           ----------------------------------------       */



//-------------------IF ELSE SATS BEROENDE PÅ VILKEN VALUTA SOM ÄR VALD------------------//

function exchangeNotice(){
   
    if(paramOneVal == paramTwoVal){
        res.innerHTML = 'Du kan inte välja samma valutor';
    }
    else if(paramOneVal == 'sek' && paramTwoVal == 'usd'){
       let exchanged = Math.floor(sekToUsd(valVal));
       val2.value = exchanged;

        console.log('SEK to USD');
    }

    else if(paramOneVal == 'sek' && paramTwoVal == 'eur'){
         let exchanged = Math.floor(sekToEur(valVal));
       val2.value = exchanged;
        

        console.log('SEK to eur');
    }
    else if(paramOneVal == 'sek' && paramTwoVal == 'pound'){
         let exchanged = Math.floor(sekToPound(valVal));
       val2.value = exchanged;
        

        console.log('SEK to pound');
    }
    else if(paramOneVal == 'usd' && paramTwoVal == 'sek'){
         let exchanged = Math.floor(usdToSek(valVal));
       val2.value = exchanged;
        

        console.log('USD to SEK');
    }
    else if(paramOneVal == 'usd' && paramTwoVal == 'eur'){
         let exchanged = Math.floor(usdToEur(valVal));
       val2.value = exchanged;
        

        console.log('USD to eur');
    }
    else if(paramOneVal == 'usd' && paramTwoVal == 'pound'){
         let exchanged = Math.floor(usdToPound(valVal));
       val2.value = exchanged;
        

        console.log('USD to pound');
    }
    else if(paramOneVal == 'eur' && paramTwoVal == 'sek'){
         let exchanged = Math.floor(eurToSek(valVal));
       val2.value = exchanged;
        

        console.log('eur to SEK');
    }
    else if(paramOneVal == 'eur' && paramTwoVal == 'usd'){
         let exchanged = Math.floor(eurToUsd(valVal));
       val2.value = exchanged;
        

        console.log('eur to USD');
    }
    else if(paramOneVal == 'pound' && paramTwoVal == 'sek'){
         let exchanged = Math.floor(poundToSek(valVal));
       val2.value = exchanged;
        

        console.log('pound to SEK');
    }
    else if(paramOneVal == 'pound' && paramTwoVal == 'usd'){
         let exchanged = Math.floor(poundToUsd(valVal));
       val2.value = exchanged;
        

        console.log('pound to usd');
    }
    else if(paramOneVal == 'pound' && paramTwoVal == 'eur'){
         let exchanged = Math.floor(poundToEur(valVal));
       val2.value = exchanged;
        

        console.log('pound to eur');
    }
    console.log(paramOneVal);
    console.log(paramTwoVal);
}