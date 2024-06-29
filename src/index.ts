
// string

let Ename: string = "Roy";
let message: string = `Welcome ${Ename}`;
console.log(message); // Welcome Roy

// number

let n: number = 100;

let count: number = 5;
let price: number = 99.99;
let temperature: number = -15;
let distance: number = 3.4e-1;

let total: number = count * price;
console.log(total); // 495
let average: number = total / count;
console.log(average); // 99.5

let infinity: number = Infinity;
let negativeInfinity: number = -Infinity;
let notANumber: number = NaN;
console.log(infinity); // Infinity


// boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if(isOpen) {
    console.log("The eyes are open");
}
if(isCompleted) {
    console.log("My life is not completed");
}

// null

let user: string | null = null;

function login(userName: string){
    user = userName;
}
function logout(){
    user = null;
}
login("John Doe");
logout();

//null : 값이 비어있다 / undefined : 값이 할당 되지 않았다

//any : 이 타입의 사용을 최소화, 타입정보가 부족 할 때 으쩔 수 읎이 사용, 임시맨
let value: any = "Hello";
value = 10;
value = true;


