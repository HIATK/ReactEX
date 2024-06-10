//var
var value = 'hello';

function myFunction(){
    var value = 'bye';
    if (true){
        var value = 'world';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('function scope')
    console.log(value); //호이스팅 발생 => if문에 value
}
myFunction();
console.log('global scope: ');
console.log('global scope: ');



//Hoisting
//자바 스크립트에서 아직 선언되지 않은 함수/변수를 끌어 올려서 사용할 수 있는 현상
//사용할 수 있는 자바스크립트의 작동 박식을 의미한다.
myFunctionHoisting();

function myFunctionHoisting(){
    console.log('hello');
}

console.log(number);
var number = 2;
/*
언디파인드 나온이유
var number;
console.log(number);
number = 2;
재선언 문제 해결 랙과 컨스트를 사용하면 된다
 */
