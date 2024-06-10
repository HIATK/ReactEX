//삼한 연산자 연습
const array = [];
let text = '';
if(array.length === 0){
    text = '배열이 비어 있습니다.'
}else {
    '배열이 비어있지 않습니다.';
}

console.log(text);

if (array.length >=0? '배열이 비어 있습니다' : '배열이 비어있지 않습니다.');

let text = array.length === 0
?'배열이 비어있습니다.'
    : '배열이 비어있지 않습니다.';

console.log(text);

//삼항 연산자 중첩 사용 예시
const conditional = false;
const conditional2 = false;

const value = conditional
?'와우'
    :conditional2
?'비비디'
        :'바비디 부';
console.log(value);
console.log(array.length === 0 ? '배열이 비어 있습니다' : '배열이 비어있지 않습니다.');

