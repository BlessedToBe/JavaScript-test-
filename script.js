// alert (true || true);
// alert (false || true);
// alert (true || false);
// alert (false || false);

// if (1 || 0) {
//     alert('True!');
// }

// let hour = 9;

// if (hour < 10 || hour > 18){
//     alert('Офис закрыт.');
// }

// let johnHasCar = false;

// if (johnHasCar == false){
//     johnHasCar = "John doesn't have car?";
// }

// alert(johnHasCar);

// let manufacturer = "";

// if (manufacturer == false){
//     manufacturer = "Unknown manufacturer";
// }

// alert(manufacturer);

// alert( true && true );
// alert( false && true );
// alert( true && false );
// alert(false && false );

// alert( null || 2 || undefined );

//alert( alert(1) || 2 || alert(3) );

//alert( 1 && null && 2 );

// alert(alert(1) && alert(2));

// let age = 5;

// if ( age >= 14 && age <= 90 ){
//     alert('true!');
// }else {
//     alert('false!');
// }

// if ( age < 14 || age > 90 ){
//     alert('True!');
// }else{
//     alert('False!');
// }

// if ( !(age >= 14 && age <= 90) ){
//     alert('true!');
// }else{
//     alert('false!');
// }

// let login;

// let password;

// login = prompt('What is your login?', '');

// if (login == '' || login == null ){
//     alert('Cancel');
// }else if(login == "Admin"){
//     password = prompt('What is your password?', '');

//     if(password == 'I am boss'){
//         alert('Hello!');
//     }else if(password == '' || password == null){
//         alert('Cancel');
//     }else{
//         alert('Invalid password');
//     }
// }else{
//     alert('I dont know who you are');
// }

// let city = null;

// city ??= "Berlin";
// city ??= null;
// city ??= "Cologne";
// city ??= "Hamburg";

// alert(city);

// let user = 'Ivan';

// alert(user ?? 'Guest');

// let num1 = 10,
//     num2 = 20,
//     result;

// result ??= num1 ?? num2 ?? result;

// alert(result);

// let i = 2;
//
// while(i >=2 && i <=10 ) {
//     if ( i % 2 == 0 ) {
//         alert(i);
//         i++;
//     }else{
//         i++;
//     }
// }

// for( let i = 2 ; i <= 10 ; i++){
//     if( i % 2 == 0){
//         alert(i);
//     }
// };
//
// alert ( 'End!' );

// for(let i =0; i < 3; i++){
//     alert(`number ${i}!`);
// };

// let i = 0;
//
// while ( i < 3){
//     alert(`number ${i}!`);
//     i++;
// }
//
// alert('End!');

// let num = prompt('Enter a number greater than 100', '');
//
// while ( num < 100 && num !== null){
//    num= prompt('Try again!', '');
// }
//
// alert("END");

// let num;
//
// do {
//     num = prompt('Enter a number greater than 100!', '');
// }while(num < 100 && num !== null);

// let n = 10;
// let i;
// let c = 0;
//
// while (n >1 && n <= 10){
//     for (i = 10; i != 0; i--){
//         if (n % i == 0){
//             c++;}
//     }
//
//     if (c == 2){
//         alert(n);
//     }
//
//     n--;
//     i = 10;
//     c = 0;
// }
//
// alert('End');

// let a = 2 + 2;
//
// switch(a){
//     case 3:
//         alert('Not enough!');
//         break;
//     case 4:
//         alert('Absolutely right!');
//         break;
//     case 5:
//         alert('Too much!');
//         break;
//     default:
//         alert('No such values');
// }

// let a = "1";
// let b = 0;
//
// switch(+a){
//     case b + 1:
//         alert('1');
//         break;
//
//     default:
//         alert("2");
// }

// let browser;
//
// if (browser === 'Edge'){
//     alert("You've got the Edge!");
// }else if(browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
//     alert('Okay we support these browsers too');
// }else{
//     alert('We hope that this page looks ok!');
// }

// const number = +prompt('Enter a number between 0 and 3', '');
//
// switch(number){
//     case 0:
//         alert('You enter number 0');
//         break;
//
//     case 1:
//         alert('You enter number 1');
//         break;
//
//     case 2:
//     case 3:
//         alert('You enter number 2 or 3');
//         break;
// }

// function showMessage(){
//     alert('Hello everyone!');
// }
//
// showMessage();

// function showMessage(){
//     let message = "Hello, I am JavaScript!";
//     alert(message);
// }
//
// showMessage();
//
// alert(message); // Будет ошибка

//let userName = 'Vasya';

// function showMessage(){
//     let message = 'Hello, ' + userName;
//     alert(message);
// }
//
// showMessage();

// let userName = 'Vasya';
//
// function showMessage(){
//     userName = "Petya";
//     let message = 'Hello, ' + userName;
//     alert(message);
// }
//
// alert(userName);
//
// showMessage();
//
// alert(userName);

// function showMessage(from, text){
//     alert(from + ': ' + text);
// }
//
// showMessage('Anna', 'Hello!');
// showMessage('Anna', 'How are you?');

// function showMessage(from, text){
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }
//
// let from = 'Anna';
//
// showMessage(from,'Hello');
//
// alert(from);

// function sum(a,b){
//     return a + b;
// }
//
// let result = sum(1,2);
// alert(result);

// function checkAge(age){
//     if (age >= 18){
//         return true;
//     }else{
//         return confirm('Does parents allow?');
//     }
// }
//
// let age = prompt('How old are you', 18);
//
// if (checkAge(age)){
//     alert('Access granted');
// }else{
//     alert('Access denied');
// }

// function showPrimes(n){
//     nestPrime: for (let i = 2; i < n; i++){
//         for (let j = 2; j < i; j++){
//             if( i % j == 0) continue nestPrime;
//         }
//
//     alert(i);
//     }
// }

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }else{
//         return confirm('Does parents allow?');
//     }
// }

// function checkAge(age){
//     if(age > 18){
//         return true;
//     }
//     return confirm('Does parents allow?');
// }
//
// checkAge(10);

// function checkAge(age){
//     return (age > 18) ? true : confirm('Does parents allow?');
// }

// let a;
// let b;
//
// function min(a,b){
//     a = prompt('a= ?', '');
//     b = prompt('b= ?', '');
//     if (a < b){
//         return a;
//     }else{
//         return b;
//     }
// }
//
// alert (min());

// let x;
// let n;
//
// function pow(){
//     x = prompt('x=?', '');
//     n = prompt('n=?', '');
//     if (x >= 1){
//         return Math.pow(x,n);
//     }
// }
//
// alert(pow());

function pow(x,n){
    let result = x;
    for(i = 1; i < n; i++){
        result = result * x;
    }
    return result;
}

let x = prompt('x=?', '');
let n = prompt('n=?', '');

if (x > 0 && x % 1 == 0){
    alert(pow(x, n));
}else{
    alert('incorrect number of x');
}















