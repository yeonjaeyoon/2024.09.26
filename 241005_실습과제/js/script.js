// 객체 실습
// 실습 1
var cat = {
    img_: "cat_01.gif",
    name_: "모모냥",
};

document.write(`<img src="./img/${cat.img_}" /><br />`);
document.write(`<h3>${cat.name_}</h3>`);
document.write(`<hr/>`);

// 실습 2
var num1 = "12,000";
var num2 = "24,000";
sum = (parseInt(num1.replace(",","")) + parseInt(num2.replace(",","")));

document.write(`<h3>두 수의 합산 결과 : ${sum}원</h3><hr/>`);


// 실습 3
var mol = Math.ceil(Math.random()*8);

document.write(`<img src="./img/molang${mol}.jpg" style="width:200px;">`);
document.write(`<hr/>`);

// 제어문 실습
// 실습 1
var fourNum = prompt('세자리 이상의 정수를 입력하시요');
var num = Number(fourNum);

if (num % 4 == 0) {
    document.write(`${num}는 4의 배수입니다.`);
} else {
    document.write(`${num}는 4의 배수가 아닙니다.`);
}
document.write(`<hr/>`);

// 실습 2
var studentName = prompt('학생의 이름 :');
var studentScore = prompt('학생의 점수 :');

if(95 >= studentScore || studentScore <= 100){
    document.write(`${studentName}의 등급은 A+`);
} else if(90 >= studentScore || studentScore < 95) {
    document.write(`${studentName}의 등급은 A`);
} else if(85 >= studentScore || studentScore < 90) {
    document.write(`${studentName}의 등급은 B+`);
} else if(80 >= studentScore || studentScore < 85) {
    document.write(`${studentName}의 등급은 B`);
} else if(75 >= studentScore || studentScore < 80) {
    document.write(`${studentName}의 등급은 C+`);
} else if(70 >= studentScore || studentScore < 75) {
    document.write(`${studentName}의 등급은 C`);
} else if(65 >= studentScore || studentScore < 70) {
    document.write(`${studentName}의 등급은 D+`);
} else if(60 >= studentScore || studentScore < 65) {
    document.write(`${studentName}의 등급은 D`);
} else {
    document.write(`${studentName}의 등급은 F`);
}
document.write(`<hr/>`);

// 실습 3
for(var $num = 1; $num <= 12; $num++){
	document.write(`${$num}, `);
}
document.write(`<hr/>`);

// 실습 4
for(var ins = 1; ins <= 12; ins++) {
    document.write(`<img class='insta' src='./img/instagram-${ins}.jpg' style='width:120px;'>`);
}
document.write(`<hr/>`);

// 실습 5
for(var ani = 0; ani <=7; ani++){
    if(ani%2 == 0){
        document.write(`<img class='zoo' src='./img/img${ani}.jpg' style='width:120px;'>`);
    }
}