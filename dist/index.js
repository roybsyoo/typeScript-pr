"use strict";
// string
let Ename = "Roy";
let message = `Welcome ${Ename}`;
console.log(message); // Welcome Roy
// number
let n = 100;
let count = 5;
let price = 99.99;
let temperature = -15;
let distance = 3.4e-1;
let total = count * price;
console.log(total); // 495
let average = total / count;
console.log(average); // 99.5
let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;
console.log(infinity); // Infinity
// boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log("The eyes are open");
}
if (isCompleted) {
    console.log("My life is not completed");
}
// null
let user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("John Doe");
logout();
//null : 값이 비어있다 / undefined : 값이 할당 되지 않았다
//any : 이 타입의 사용을 최소화, 타입정보가 부족 할 때 으쩔 수 읎이 사용, 임시맨
let value = "Hello";
value = 10;
value = true;
