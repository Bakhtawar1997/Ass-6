//***chp 21-25 tasks 1 */
// var a = prompt("Enter Your First Name");
// var b = prompt("Enter Your Last Name");
// var c = a + b;
// document.write(c + ' ')
//////////// TASKS 1 ///////////////////
// var arr1 = prompt("Enter Your First Name");
// var arr2 = prompt("Enter Your Last Name");
// var c = arr1.concat('  ' + arr2);
// document.write(c)

//*** tasks 2 */
// var arr1 = prompt("Enter Your favorite mobile phone ")
// var arr2 = arr1.length;
// document.write('My Favourite Phone is ' + arr1 + "<br>")
// document.write('Length of String is ' + arr2)

//*** tasks 3 */
// var str = "Pakistani.";
// document.write('string : ' + str + '<br>')
//document.write('Index of n is : ' + str.indexOf('n'))


//*** tasks 4 */
// var a = 'Hello World';
// var b = a.lastIndexOf('l');
// document.write('string : ' + a + '<br>')
// document.write('Last index of l is: ' + b)
 
// //*** tasks 5 */
// var a = 'pakistani';
// document.write('string ; ' + a + '<br>')
// document.write('Character at index 3 : ' + a[3])

//*** tasks 6 */
// var str1 = 'Hello'
// var str2 = 'World!'
// var result = str1.concat(" " + str2)
// alert(result)

//*** tasks 7 */
// var str = 'Hyderabad';
// var b = str.replace(/Hyderabad/, 'Islamabad')
// document.write('string : ' + str + '<br>')
// document.write('After Replacement : ' + b)
 
//*** tasks 8 */
// var message ="Ali and Sami are best friends They play cricket and football together.";
// var str = message.replace(/and/g, '&');
// document.write(str)

//*** tasks 9 */
// var a = '472';
// document.write(a + '<br>')
// document.write(typeof a + '<br>' )
// var b = 472;
// document.write(b + '<br>')
// document.write(typeof b)

//*** tasks 10 */
// var a = 'peanut';
// var b = a.toUpperCase();
// document.write(b)
////////TASK 10///////
// var a = prompt("Enter Your Letter")
// var result = a.toUpperCase();
// document.write(result)

//*** Task 11 */
// var a = prompt("Enter Your Letter");
// var firstChar = a.slice(0, 1);
// var secondchar = a.slice(1);
// firstChar = firstChar.toUpperCase();
// secondchar = secondchar.toLowerCase();
// var b = firstChar + secondchar;
// document.write(b)


// ///TASKS 11////
// var a = 'javascript'
// var b = a.slice(0, 1);
// var c = a.slice(1);
// b = b.toUpperCase();
// c = c.toLowerCase();
// var r = b + c;
// document.write(r)

//*** task 12 */
// var a = '35.36';
// var b = a.replace('.', '');
// document.write(b)
/////TASKS 12 /////
// var d = 35.36;
// var s = d + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write('Number : ' + d + '<br>')
// document.write('Result : ' + s);


//***task 13 */

// var username = prompt("Enter Your Password")
// var b = username.charCodeAt();
// var flag = false;
// for (var i = 0 ; i <=username.length ; i++){
//     if(username.slice(i, i+1) == String.fromCharCode(64)||
//        username.slice(i, i+1) == String.fromCharCode(46)||
//        username.slice(i, i+1) == String.fromCharCode(44)||
//        username.slice(i, i+1) == String.fromCharCode(33)){
//            flag = true;
//            break
//         }
// }
// if (flag){
//     alert('enter a valid username');
// }else{
//     alert('sucess')
// }




//*** task 14 */
// var a = ['cake', 'apple pie', 'cookies','chips','patties'];
//  var x = prompt("What do you want to order sir/ma'am?");
// x = x.toLowerCase();
// for (var i = 0 ; i < a.length ; i++){
//     if (a[i] === x){
//         console.log(x + ' is available at index ' + [i]  + ' in our bakery'  )
//         break

//     }
//   }  
//////////////tasks 14 ////////////////
// var array = ['cake', 'apple pie', 'cookies','chips','patties'];
// var items = prompt("What do you want to order sir/ma'am?");
// items = items.toLowerCase();
// var bakitems = array.indexOf(items)
// if (array.indexOf(items) != -1){
//     console.log(items + ' is available at index ' + bakitems + ' in our bakery')

// }
// else{
//     console.log(items + ' is not avaliable in our bakery ')
// }



//*** task 15 */
// var pass = prompt('Enter a Valid Password \n a. It should contain alphabets and numbers \n b. It should not start with a number \n  c. It must at least 6 character long');
// if (pass.length >= 6){
//    if (pass.slice(0, 1) <= String.fromCharCode(65)){
//         alert('Paaword can not begin with a number')
//     }
// else {
//     alert('Success')
//   }
// }
// else {
//     alert('Password must be a character Long')
// }
//*** tasks 16 */
// var university = 'University of Karachi';
// var arr = university.slice()
// for(var i = 0 ; i< arr.length ; i ++){
//     document.write(arr[i] + '<br>')
// }
//// TASKS 16////
// var uni = 'unversity of karachi'
// var a = uni.split("")
// for(i =0 ; i < uni.length; i++){
//     document.write(a[i] + '<br>')
// }
// //*** tasks 17 */
// var a = 'Pakistan'
// var b = a.charAt(7)
// document.write('User input ' + a + '<br>')
// document.write('Last Character of input : ' + b)

//***tasks 18 */
// var count = 0;
// var str = 'The quick brown fox jumps over the lazy dog';
// for(var i = 0 ; i<str.length ; i++){
//     if(str.toLowerCase().slice(i,i+3) === 'the'){
//         count++;
//     }
// }
// document.write('text : ' + str + '<br> There are ' + count + ' occurrence of the word the ')

//***chp 26-30 task 1 */
// var num = prompt("Enter positive integar")
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write('Number : ' + num + '<br>')
// document.write('Round off Value : ' + num1 + '<br>')
// document.write('Floor value : ' + num2 + '<br>')
// document.write('Ceil value : ' + num3 + '<br>')

//*** tasks 2 */
// var num = prompt("Enter Negative floating integar")
// var num1 = Math.round(num);
// var num2 = Math.floor(num);
// var num3 = Math.ceil(num);
// document.write('Number : ' + num + '<br>')
// document.write('Round off Value : ' + num1 + '<br>')
// document.write('Floor value : ' + num2 + '<br>')
// document.write('Ceil value : ' + num3 + '<br>')

//*** tasks 3 */
// var a = prompt('Enter your Absolute Value')
// var b = Math.abs(a)
// alert(b)

//***task 4 */
// var ran = Math.random()*4;
// var ran1 = ran.toFixed()
// document.write('Random dice value : ' + ran1 + '<br>')
// var ranA = Math.random()*8;
// var ranB = ranA.toFixed();
// document.write('Random dice value : ' + ranA)

//*** task 5 */
// var a = Math.random()*4;
// var b = Math.floor(a)
// console.log(a)
// if(b === 1){
//     alert(b + ' Random coin value Head')
// }else if(b === 2){
//     alert(b  + ' Random coin value Tail ')
// }
// else{
//     alert(b + ' Try Again')
// }

//***task 6 */
// var a = Math.random()*101;
// var b = Math.floor(a)
// console.log('The Random numer between 1 to 100 is : ' + b)

//***task 7 */
// var weigth = prompt("Enter Your Weigth");
// var abc = parseFloat(weigth);
// document.write('The weigth of user is ' + abc +'Kilograms')

//*** task 8 */
// var a = prompt("Enter you Number 1 to 10");
// var x = (Math.random()*11);
// var y = x.toFixed();
// console.log(y)
// if (a === y){
//     document.write('CONGRATULATION!')

// }
// else
// {
//     document.write('TRY AGAIN')
// }



//***task 31-34 */
// var date = new Date();
// alert(date)

//***task 2 */
// var a = new Date();
// var b = a.toString();
// var c = b.slice(3, 7)
// document.write('Current month is : ' + c)

//***task 3 */
// var a = new Date();
// var b = a.toString();
// var c = b.slice(0, 3)
//  document.write('ToDay is : ' + c)

//*** task 4 */
// var arr = ['Sunday','Monday','Tuesday','Wednesday','Thurseday','Firday','Saturday'];
// var a = new Date();
// var b = a.getDay();
// var c = arr[b];
// if (c === 'Saturday'|| c === 'Sunday'){
//     document.write("It's Fun Day")
// }
// else{
//     document.write('Busy Day')
// }

//***task 5 */
// var dATE = new Date();
// var x = dATE.getDate();
// if (x < 16){
//     document.write('First Fifteen Days of the Month')

// }else{
//     document.write('Last Days of Month')
// }

//****task 6 */
// var x = new Date();
// var a = x.getTime();
// var totalMin = (a)/(1000*60*60);
// document.write('current Date : ' + x + '<br>');
// document.write('Elapsed Millisecond since January 1, 1979 : ' + a + '<br>' )
// document.write('Elapsed mintues since January 1, 1970 : ' + totalMin)



//***task 7 */
// var a = new Date();
// var b = a.getTime();
// if (b >12){
//     alert("It's PM")

// }else if (b <12){
//     alert("It's AM")
// }

//*** task 8 */
// var Laterdate  = new Date('dec 31 2020');
// alert('Laterdate ; ' + Laterdate)

//***task 9 */
// var a = new Date('Apr 24 2020');
// var b = a.getTime();
// var x = new Date();
// var y = x.getTime();
// var k = x.getFullYear();
// var result = y - b;
// var z = result/(1000*60*60*24);
// var m = Math.round(z)

// document.write(m + ' days have passed since 1st Ramadan ' + k)

//*** task 10 */
// var a = new Date('jan 1, 2015');
// var x = a.getTime();
// var b = new Date('dec 5, 2015 00:00:00')
// var y = b.getTime();
// var r = x - y;
// var v = r/(1000*60)
// v = Math.floor(v) 
// document.write(' On the reference Date ' + b + v + ' second had passed since begining of 2015')

//*** task 11 */
// var date = new Date();
// var a = new Date();
// a.setHours(-0);
// document.write('current date : ' + date + '1 hour ago , it was ' + a)

//*** task 12 */
// var date = new Date();
// var b = new Date();
// b.setFullYear(1920)
// document.write('Current date : ' + date + '100 years back , it was ' + b)


//*** task 13 */
// var d = prompt('Enter your age')
// var a = new Date();
// var t = a.getFullYear()-d
// document.write('Your age : ' + d + '<br>')
// document.write('Your Birth Year is ' + t)

//***task 14 */



//*** chp 35-38 task 1 */
// function date(){
//     var a = new Date();
//     alert(a)
// }
// date();


//**task 2 */
// function greets(firstnam,secondnam){
//     var a = firstnam.concat(secondnam)
//     alert(a)
// }
// greets('Sunny ',' Yousuf');

//***task 3 */
// function suM(val1, val2){
//     var m = val1 + val2;
//     return m
// }
// var s = suM(+prompt('Enter first number'),+prompt('Enter second number'))
// document.write(s)

//*** task 4 */
// function calc(val1,opr,val2){
//     if (opr === '+'){
//         return val1 + val2
//     }
//     else if (opr === '-'){
//         return val1 - val2
//     }
//     else if (opr === '*'){
//         return val1 * val2
//     }else{
//         return 'invalid operater'
//     }
// }
// var result = calc(6,'+',8)
// var result1 = calc(7,'-',4)
// var result2 = calc(3,'*',9)
// console.log(result)
// console.log(result1)
// console.log(result2)

//*** task 5 */
// function myFunction() {
//     var a = Math.sqrt(3,5);
//     console.log(a)
//   }
// myFunction()
////////task 5//
// function myFunction(a,b){
//     return a**b

// }
// var x = myFunction(3,5)
// document.write(x)

//*** task 6 */
// function factorial(s){
//     if(s==0 && s<=1){
//     return 1

// }
// else{
//     return s* factorial(s-1)

//  }
// }
// document.write(factorial(4))

//***task 7 */
// function count(a,y){
//     for(a= 1 ; a<= 50; a++){
//         document.write(a + ' ')
//     }
// }
// count(50)

//*** task 8 */
//***task 9 */
// function abc(heigth,width){
//     var m = heigth*width
//     return  m
// }
// var s = abc(10,6)
// document.write(s)
////////////////task 9///////
// function abc(heigth,width){
//     return heigth*width
// }
// console.log(abc(10,6))

//*** task 10 */
// function p(){
//     var x = prompt('Enter your word');
//     var y = '';
//     for(var i = x.length -1; i>= 0; i--){
//         y += x[i]
//     }
//     if(x === y){
//         console.log(x + ' is palindrome word')
//     }else{
//         console.log(x + ' is not palindrome word')
//     }
// }
// p();

//*** task 11 */
// function a(word = 'the quick brown fox'){
// var x = word.toLowerCase().split(' ');
// for(var i = 0 ; i< x.length ; i++){
//     x[i]=x[i].charAt(0).toUpperCase() + x[i].substring(1);
//     var m = x.join(' ');

// }
// document.write(m)
// }
// a()

//*** task 12 */
// function abc(str)
// {
//   var m = str.match(/\w[a-z]{0,}/gi);
//   var res = m[0];

//   for(var x = 1 ; x < m.length ; x++)
//   {
//     if(res.length < m[x].length)
//     {
//     res = m[x];
//     } 
//   }
//   return res;
// }
// console.log(abc('Web Development Tutorial'));


//*** tasks 13 */
// function count(str, letter) 
// {
//  var a = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == letter) 
//       {
//       a += 1;
//       }
//   }
//   return a;
// }

// console.log(count('w3resource.com', 'o'));

