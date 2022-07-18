// 두 배열 크기 : 7, 원소크기 : 1~13의 정수, 같은숫자는 최대 4개
const array1 = [1,5,7,2,9,13,10]
const array2 = [2,3,9,10,4,8,11]

// 체크포인트

// 기본 틀 생성
// 페어 확인함수 작성
// 연속규칙 확인함수 작성
// 비교함수 작성

function checkPair() {

}

function checkCont() {

}

function check() {
    let size = checkPair();
    let high = checkCont();
    return [size, high];
}

function compare() {

}

function main() {
    const [array1_size, array1_high] = check();
    const [array2_size, array2_high] = check();
    return compare();
}