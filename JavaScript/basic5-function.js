// // 함수
// // 함수란, 특정 코드를 하나의 명령으로 실행할 수 있게 하는 기능이다

// // 두 수를 더하는 함수 
// function add(a, b) {
//     return a + b;
// }

// const num = add(10,20);
// console.log(num); 

// function hello(name){
//     console.log('Hello',name+'!')
//     console.log(`Hello ${name}!`)
// }
// hello('홍길동')

// ES6 템플릿 리터럴 문법
// 회살표 함수
// 함수를 선언하는 방식 중 또 다른 방법
// const add = (a,b)=>{
//     return a+b;
// };
// console.log(add(10,20));

// //바로 반환하는 값이 나오는 경우...
// const add2 = (a,b)=> a + b;
// console.log(add(10,20));
// console.log(add2(10,20));

// 화살표 함수와 function 함수의 차이는 this가 가리키는 것이 다르다
// function의 this는 자신의 종속된 객체를,
// 화살표 함수의 this는 상위 범위에 this 를 가리킨다.