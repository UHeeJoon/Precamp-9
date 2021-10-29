for(let i=0 ; i<3 ; i=i+1){
    console.log("안녕하세요!!!")
}
// 3VM4275:2 안녕하세요!!!
// undefined
const classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
for(let i=0; i<3; i++){
    console.log(classmates[i])
}
// VM5269:2 철수
// VM5269:2 영희
// VM5269:2 훈이
// undefined
for(let i=0; i<3; i++){
    console.log(classmates[i] + "입니다!!!")
}
// VM5355:2 철수입니다!!!
// VM5355:2 영희입니다!!!
// VM5355:2 훈이입니다!!!
// undefined
const classmates2 = [
    { name: "철수", age: 10, school: "다람쥐초등학교" },
    { name: "영희", age: 11, school: "공룡초등학교" }
]
// undefined
classmates2[0]
// {name: '철수', age: 10, school: '다람쥐초등학교'}
classmates2[0].school
// '다람쥐초등학교'
const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
// undefined

//const token = String(Math.floor/*소수점 절하*/ (Math.random()*1000000)).padStart(6,0) 인증번호 생성
