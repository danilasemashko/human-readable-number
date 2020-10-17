module.exports = function toReadable (number) {
  var stroka = "";
  var ed = 0;
  var des = 0;
  var sot = 0;
  var desed = 0;
  let arr = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
   let arr1 =["","", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
   if (number === 0){
   	stroka = "zero";
   	return(stroka);
   }
   if (number<21){
   	stroka = arr[number];
   }
   if(number > 20 && number < 100){
   ed = number % 10;
   des = Math.floor(number/10);
   if (ed === 0){
   		stroka =arr1[des];
   } else 
    	{
    	stroka =arr1[des];
   		stroka = stroka + " " + arr[ed];
   		}
   }
    if(number >99){
    	ed = number % 10;
    	desed = number % 100;
    	number = Math.floor(number/10);
    	des = number % 10;
    	sot =Math.floor(number/10);
    	if(des === 0 && ed === 0){
         	stroka = arr[sot] + " " + "hundred";
         	return(stroka);
         } 
         if (desed<21){
         	stroka = arr[sot] + " " + "hundred" + " " + arr[desed];
         	return(stroka);
         }
         	if (ed === 0){
         		stroka = arr[sot] + " " + "hundred" + " " + arr1[des];
         		return(stroka);
         	}
    	stroka = arr[sot] + " " + "hundred" + " " + arr1[des] + " " +arr[ed];
    }
   return(stroka);
}
