
let Text = 'Hello World';
let name = "홍길동";

//참/거짓 boolean
let good = true;
let loading = false;

// 데이터가 없음을 의미한다 하지만 용도가 다르다
// null => 값이 없음
// undefined => 값이 설정되지 않음을 의미
let friend = null;  //고의 적인 설정
console.lod(friend)

let testUndefiend; // 설정하지 않았음을 의미한다.
console.log(testUndefiend);

// 1. 산술 연산자
// => +, -, *, /, ...
let a = 1 + 1
console.log(a);
a = 1 + 2 - (3 * 4) / 4;
console.log(a);

b++ //후위
++ㅠ //전위     
console.log(b);   //3
console.log(b++); //3
console.log(++b); //5

let b = 1;
b --;
console.log(b);  //0

//2. 복합 대입 연산자
let c = 1;
c = c + 1 ;
//이 코드를 복합 대입 연산자로
c  = 1;
c += 1;
console.log(c);
//다른 연산자도 가능함.
let d = 1;
d %= 10;
console.log(d);

// 논리 연산자 ...
// 논리 연산자는 Boolean을 위한 연산자 이다
// 반환 결과는 true 또는 false 이다.
//  
const e = !true;
console.log(e); //false

const f = true && true;
console.log(f); //true 
const g = true && false;
console.log(g); //false

let h = true || true;
console.log(h); //true

h = true || false;
console.log(h)

h = false || false;
console.log(h);


const value = !((true && false) || (true && false) || !false);
console.log(value);

//4. 비교 연산자
// ==, ===, !=, !==, >, <, >=, <=

const x = 1;
const y = 1;
const equals = x == y;
console.log(equals);

const notEquals = 'a' !== 'b';
console.log(notEquals);
console.log(1 < 1);
console.log(1 > 1);

//<, >, <=, >= 


//문자열 붙이기 
const t1 = '안녕';
const t2 = '하세요';
console.log(t1 + t2);