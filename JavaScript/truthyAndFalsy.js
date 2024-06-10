//자바스크립트 문법은 아니지만 알아야 할 개념이다.
function print(person){
    //if(person === undefined || person === null){
    if(!person){ //undefuined 거나 또는 nulll이면 falsy

        console.log('person이 없습니다.');
        return;
    }
    console.log(person.name);
}

const person = null;

print(null);

//falsy 값
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);  //NaN -> Not a Number 문자열을 숫자로 변환할때 parseInt()

