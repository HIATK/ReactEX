//변수와 상수
//자바스크립트 변수 : var(옛날부터), let, const 
// var -> let,const 권장 이유는 호이스팅 때문이다
//프로그램은 순자적으로 들어가는데 호이스팅은 끌어오는것이다 
//let,const는 블럭 변수이다. 
// {
//     let a = 1;
//     function A (){
//         console.log(a);
//     }
// }

// let 
// 변수선언 바뀔 수 있는 값을 지정할 떄 사용 한다.
// 재선언이 가능하다.

// //재할당
// let value = 1;
// console.log(value);
// value = 2;
// console.log(value); 

// //재선언 안된다.
// let value = 1;
// let value = 2;

// 상수 선언이고 Const는 한번 선언하고 바뀌지 않는 값이다
// 재할당과 재선언이 안된다

//const 상수 선언 

// const a = 1;
// a = 2; //error
// console.log(a);

// 1. 숫자(number)
// 2. 문자열(String)
// 작은 따옴표 혹은 큰 따옴표를 사용하여 표현한다.