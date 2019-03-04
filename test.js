let countryOne = document.getElementById('country1');
let countryOneVal = countryOne.value;

let countryTwo = document.getElementById('country2');
let countryTwoVal = countryTwo.value;

let result_h1  = document.getElementById('result_time');
let countryOneLine= document.getElementById("countryone_line");
let countryTwoLine= document.getElementById("countrytwo_line");
function onchangeCountryOne(){
    countryOneVal = countryOne.value;

    switch(countryOneVal){
        case '-8':
            console.log(countryOneVal);

            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '73px';
            break;
        case '-7':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '92px';

            break;    
        case '-6':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '111px';

            break; 
        case '-3':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '169px';
            break; 
        case '0':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '226px';
            break; 
        case '1':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '245px';
            break; 
        case '2':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '264px';
            break; 
        case '3.5':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '292px';
            break; 
        case '4':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '302px';
            break; 
        case '6':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '340px';
            break; 
        case '8':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '359px';
            break; 
        case '9':
            console.log(countryOneVal);
            countryOneLine.style.opacity = 0.5;
            countryOneLine.style.left = '378px';
            break; 


    }
}
function onchangeCountryTwo(){
    countryTwoVal = countryTwo.value;
    switch(countryTwoVal){
        case '-8':
            console.log(countryTwoVal);

            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '73px';
            break;
        case '-7':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '92px';

            break;    
        case '-6':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '111px';

            break; 
        case '-3':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '169px';
            break; 
        case '0':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '226px';
            break; 
        case '1':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '245px';
            break; 
        case '2':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '264px';
            break; 
        case '3.5':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '292px';
            break; 
        case '4':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '302px';
            break; 
        case '6':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '340px';
            break; 
        case '8':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '359px';
            break; 
        case '9':
            console.log(countryTwoVal);
            countryTwoLine.style.opacity = 0.5;
            countryTwoLine.style.left = '378px';
            break; 


    }
}
let d = new Date();
console.log(d);

let utc_offset = d.getTimezoneOffset() ;
console.log(utc_offset);



/* d.setMinutes(d.getMinutes()+ utc_offset);
console.log("UTC: "+ d); */
/* d.setMinutes(d.getMinutes()+ phuket_offset);
console.log("Phuket: " + d); */




function submitConvert(){
   // HÄMTA TID FRÅN COUNTRY ONE
    let temp = d;
    if(countryOneVal <0 ){
        calcTime = countryOneVal * 60 -60;

    }else{
        calcTime = countryOneVal * 60;

    }

    temp.setMinutes(temp.getMinutes()+ (calcTime));
    console.log(temp)
    let countryoneTime = [temp.getHours(), temp.getMinutes()];
    console.log(countryoneTime);
    temp.setMinutes(temp.getMinutes() - (calcTime));

    // HÄMTA TID FRÅN COUNTRY TWO
    let temp2 = d;
    if(countryTwoVal <0 ){
        calcTime = countryTwoVal * 60 -60;

    }else{
        calcTime = countryTwoVal * 60 -60;

    }

    temp2.setMinutes(temp2.getMinutes()+ (calcTime));
    console.log(temp2)

    let countrytwoTime = [temp2.getHours(), temp2.getMinutes()];
    console.log(countrytwoTime);
let resultTime;

    //räkna ut skillnaden i timmar
    if(countryoneTime[0] > countrytwoTime[0]){
       resultTime= countryoneTime[0] - countrytwoTime[0];

    }else{
        /* let tempcountry = countrytwoTime[0];
        countrytwoTime[0] = countryoneTime[0];
        countryoneTime[0] = tempcountry; */
        resultTime =  countrytwoTime[0] - countryoneTime[0];
    }
    console.log(resultTime)
    result_h1.innerHTML= "Klockan är : "+ countryoneTime + " i "+ countryOne.options[countryOne.selectedIndex].text + "<br>" +"Klockan är : "+ countrytwoTime + " i " + countryTwo.options[countryTwo.selectedIndex].text + "<br>" + "Tidsskillnaden är: "+resultTime+" timmar.";





    //RESET
    temp.setMinutes(temp.getMinutes() - (calcTime));

    temp2.setMinutes(temp2.getMinutes() - (calcTime));

}