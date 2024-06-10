// 단축 평가 논리 계산법
true && true; // true
true && false; // false
true || false; // true
false || false; // false

const dog = {
    name : '멍멍이'
};

function getName(animal) {
    // if(animal){
    //     return animal && animal.name;
    // }
    return animal && animal.name;
}
const name = getName(dog);
console.log(name); // 멍멍이

// ||연산자로 코드 단축하기
const namelessDog={
    name:''
};

function getName2(animal){
    const name = animal && animal.name;
    if(!name){
        return '이름이 없는 동물 입니다.';
    }
    return name;
}
const name2 = getName2(namelessDog);
console.log(name2); // 이름이 없는 동물 입니다.
