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

let num1 = 10,
    num2 = 20,
    result;

result ??= num1 ?? num2 ?? result;

alert(result);
