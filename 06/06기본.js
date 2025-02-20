// 배열 선언 
let arr = [] ;                      //빈 배열
let arr1 = [1,2,3,4] ;              //초기값이 있는 배열

let arr2 = new Array() ;            //Array 객체


// console.log(arr) ;
// console.log(arr1) ;
// console.log(arr2) ;

//배열 추가
arr.push(10) ;
arr.push(20) ;
arr.push(30) ;
console.log(arr) ;

//배열 수정
arr[0] = 1;
console.log(arr) ;

//배열 삭제
arr.pop();
console.log(arr) ; 

arr.length = 0 ;
console.log(arr) ;

//배열 순회
arr = [1,2,3,4,5] ;

console.log("기본반복") ;
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log("in 반복") ;
for(let i in arr){
    console.log(arr[i]);
}

console.log("of 반복") ;
for(let i of arr){
    console.log(i);
}

console.log("of 반복2") ; // 구조분해 // : 변수에 각각 값을 할당
for(let [i, item] of arr.entries()){
    console.log(i)
}

//구조분해 할당
for(let [i, item] of arr.entries()){
    console.log(i, item)
}

console.log("forEach 메소드") ; // 콜백함수 // : 인수에 함수가 들어감 #함수를 먼저 만들어라 #인수를 줄때는 주로 화살표 함수를 사용함
arr.forEach((item, i) => {
    console.log(i, item) ;
});

//map()
console.log("Map 메소드") ;
let arrMap = arr.map((item) => {
    console.log(item);

    return item*2 ;
});
console.log(arrMap) ;

console.log("Map 메소드2") ;
arrMap = arrMap.map(item => item*2 );
console.log(arrMap) ;

console.log("Map 메소드3") ;
arrMap = arrMap.map((item, i) => item*i );
console.log(arrMap) ;

//filiter()
console.log("Filter 메소드") ;
let arrFilter = arr.filter((item) => {
    console.log(item) ;
    return item % 2 == 0 ;});
console.log(arrFilter) ;

console.log("Filter 메소드2") ;
arrfilter = arr.filter(item =>  item % 2 == 0 );
console.log(arrFilter) ;

//map() + filter()
let arrmf = arr.map((item, i) => item*i)
            .filter(item => item % 3 ==0);
console.log(arrmf) ; 

//랜덤수 생성 
//1에서 6까지 Math.floor(Math.random()*6)+1
//for문으로 랜덤수 생성
let arrRand = []
for(let i =0; i<6; i++){
    arrRand.push(Math.floor(Math.random()*6)+1);
}
console.log(arrRand) ;

//map으로 랜덤수 생성
arrRand = arrRand.map( item => Math.floor(Math.random()*6)+1);
console.log(arrRand) ;

//오름차순
arrRand.sort((a, b) => a-b ) ;
console.log(arrRand) ;

//내림차순
arrRand.sort((a, b) => b-a ) ;
console.log(arrRand) ;

//배열 순서를 반대로 뒤집음
console.log(arrRand.reverse) ;

//모든 요소를 문자열로 결합하여 반환
console.log(arrRand.join(''));
console.log(arrRand.concat(arr));

//요소확인, 중복x
console.log(arrRand.indexOf(10));
console.log(arrRand.includes(10));

//전개연산자
console.log(`arr = ${arr}`) ;
let arrCp ;
// arrCp = arr.map(item => item) ;
// console.log(`arrCopy = ${arrCopy}`) ;

arrCopy = {...arr, ...arrRand};
console.log(`arrCopy = ${arrCopy}`) ;
