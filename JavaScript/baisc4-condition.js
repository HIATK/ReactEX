//조건문...
//if
const a = 1;
if (a + 1 === 2){
    console.log('a + 1이 2 입니다.')
}

const b = 10;
if(a > 15 ){
    console.log('a가 15보다 큽니다.')
}else{
    console.log('a가 15보다 크지 않습니다.')
}

if(b === 5){
    console.log('5입니다.')
}else if (b === 10){
    console.log('10입니다.')
}else{
    console.log('5도 아니고 10도 아닙니다.')
}

// switch/case 

const device = 'iphone';
switch(device){
    case 'iphone':
        console.log('아이폰');
        break;

    case 'ipad':
        console.log('아이패드');
         break;

    case 'galaxy':
         console.log('갤럭시');
         break;

    default:
        console.log('없는 기종입니다.');
}