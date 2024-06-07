//객체
const dog= {
    name : '돌쇠',
    age :17
};
console.log(dog);

/*
  키에 해당하는 부분은 공백이 없어야 한다.
만약엥 공백을 사용해야 하는 경우 ''("")로 묶어 줘야한다.
//  */
// const sample = {
//     'key with space' : ture
// };
// console.log(sample);
// console.log(sample["key with space"]);
// console.log(dog[name]);

//함수에서 객체를 파라미터로 받기
const ironMan = {
    name:'토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const captainAmerica = {
    name:'스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

function print(hero){
    const text = `${hero.alias}(${hero.name})
     역할을 하는 배우는 ${hero.actor} 입니다.`;
     console.log(text);
}

print(ironMan);
print(captainAmerica);


function print2(hero){
    const{alias,name,actor} = hero;
    const text = `${alias}(${name})
    역할을 하는 배우는 ${actor} 입니다.`;
}

console.log('객체 비구조화 할당');
print2(ironMan);

function print3({alias,name,actor}){
    const text = `${alias}(${name})
    역할을 하는 배우는 ${actor} 입니다.`;
    console.log(text);
}
print3(captainAmerica);

//객체 안에 함수 넣기
const dog2 = {
    name : '멍멍이',
    sound : '멍멍!',
    say : function.log(this,sound);
}