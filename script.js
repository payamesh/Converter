//-------------   VARIABLES   ------------//

let val1 = document.getElementById('val1');
let valVal = val1.value;
let res = document.getElementById('result');
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
        res.innerHTML = val1.value +' SEK blir '+ exchanged + ' USD.';
        console.log('SEK to USD');
    }

    else if(paramOneVal == 'sek' && paramTwoVal == 'eur'){
         let exchanged = Math.floor(sekToEur(valVal));
        res.innerHTML = val1.value +' SEK blir '+ exchanged + ' Eur.';

        console.log('SEK to eur');
    }
    else if(paramOneVal == 'sek' && paramTwoVal == 'pound'){
         let exchanged = Math.floor(sekToPound(valVal));
        res.innerHTML = val1.value +' SEK blir '+ exchanged + ' Pound.';

        console.log('SEK to pound');
    }
    else if(paramOneVal == 'usd' && paramTwoVal == 'sek'){
         let exchanged = Math.floor(usdToSek(valVal));
        res.innerHTML = val1.value +' USD blir '+ exchanged + ' SEK.';

        console.log('USD to SEK');
    }
    else if(paramOneVal == 'usd' && paramTwoVal == 'eur'){
         let exchanged = Math.floor(usdToEur(valVal));
        res.innerHTML = val1.value +' USD blir '+ exchanged + ' Euro.';

        console.log('USD to eur');
    }
    else if(paramOneVal == 'usd' && paramTwoVal == 'pound'){
         let exchanged = Math.floor(usdToPound(valVal));
        res.innerHTML = val1.value +' USD blir '+ exchanged + ' Pound.';

        console.log('USD to pound');
    }
    else if(paramOneVal == 'eur' && paramTwoVal == 'sek'){
         let exchanged = Math.floor(eurToSek(valVal));
        res.innerHTML = val1.value +' Euro blir '+ exchanged + ' SEK.';

        console.log('eur to SEK');
    }
    else if(paramOneVal == 'eur' && paramTwoVal == 'usd'){
         let exchanged = Math.floor(eurToUsd(valVal));
        res.innerHTML = val1.value +' Euro blir '+ exchanged + ' USD.';

        console.log('eur to USD');
    }
    else if(paramOneVal == 'pound' && paramTwoVal == 'sek'){
         let exchanged = Math.floor(poundToSek(valVal));
        res.innerHTML = val1.value +' Pound blir '+ exchanged + ' SEK.';

        console.log('pound to SEK');
    }
    else if(paramOneVal == 'pound' && paramTwoVal == 'usd'){
         let exchanged = Math.floor(poundToUsd(valVal));
        res.innerHTML = val1.value +' Pound blir '+ exchanged + ' USD.';

        console.log('pound to usd');
    }
    else if(paramOneVal == 'pound' && paramTwoVal == 'eur'){
         let exchanged = Math.floor(poundToEur(valVal));
        res.innerHTML = val1.value +' Pound blir '+ exchanged + ' Euro.';

        console.log('pound to eur');
    }
    console.log(paramOneVal);
    console.log(paramTwoVal);
}