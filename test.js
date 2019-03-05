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
localTime = d.getTime();

let localOffset = d.getTimezoneOffset() *60000 ;
console.log(localOffset);
let utc = localTime + localOffset;
let offsetCountryOne = countryOneVal;
let offsetCountryTwo = countryTwoVal;
console.log(offsetCountryOne)
;




/* d.setMinutes(d.getMinutes()+ utc_offset);
console.log("UTC: "+ d); */
/* d.setMinutes(d.getMinutes()+ phuket_offset);
console.log("Phuket: " + d); */




function submitConvert(){
    let resultCountryOne = utc +(3600000*countryOneVal);
let resultCountryTwo =  utc + (3600000*countryTwoVal)
let countryOneND = new Date(resultCountryOne);
let countryTwoND = new Date(resultCountryTwo);
 
let diff = (countryOneND - countryTwoND)/3600000;
   if(diff <= 0){
       diff *=-1;
   }
    result_h1.innerHTML = "Idag är det den:  " + countryOneND.toLocaleString() + " i "+ countryOne.options[countryOne.selectedIndex].text + "<br>" + "Idag är det den:  " + countryTwoND.toLocaleString() + " i "+ countryTwo.options[countryTwo.selectedIndex].text + "<br>" + "Tidsskillnaden är: "+ diff + " timmar."; 
    
    
    console.log(diff); 




    //RESET
    /* temp.setMinutes(temp.getMinutes() - (calcTime));

    temp2.setMinutes(temp2.getMinutes() - (calcTime)); */

}