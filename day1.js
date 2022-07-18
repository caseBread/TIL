// 두 배열 크기 : 7, 원소크기 : 1~13의 정수, 같은숫자는 최대 4개
const array1 = [1, 1, 4, 4, 1, 1, 9]
const array2 = [1, 2, 11, 3, 11, 4, 5]
// 배열 정렬
array1.sort((a,b)=>a-b);
array2.sort((a,b)=>a-b);


// 체크포인트

// 기본 틀 생성
// 페어 확인함수 작성
// 연속규칙 확인함수 작성
// 비교함수 작성


function checkCont(array, size, high) {
    if (size == 3) return [ 4, high ];
    let cnt = 0; // 연속수 count
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] == array[i]) continue;
        cnt = (array[i-1] + 1 == array[i]) ? cnt+1 : 0;
        if (4 <= cnt) {
            size = 3;
            high = [i];
        }
    }
    return [ size, high ];
}

// size : 노페어=0,페어=1,트리플=2,스트레이트=3,포카드=4
// high = 페어의 숫자(스트레이트일 경우 가장높은숫자)를 배열로 저장

function checkSize(array, size, size_temp, high,i) {
    if (size == size_temp) {
        high.push(array[i]);
    }
    else if (size < size_temp) {
        high = [array[i]];
        size = size_temp;
    }
    return [ size, high ];
}

function check(array) {
    let [ size, size_temp, high ] = [ 0, 0, [array[0]] ];
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] == array[i]) size_temp++;
        else size_temp = 0;
        [ size, high ] = checkSize(array, size, size_temp, high,i);
    }
    [ size, high ] = checkCont(array, size, high);
    return [ size, high ];
}

function compare(size1, high1, size2, high2) {
    
}

function main() {
    const [array1_size, array1_high] = check(array1);
    const [array2_size, array2_high] = check(array2);
    console.log(array1_size, array1_high, array2_size, array2_high);

    return compare(array1_size, array1_high, array2_size, array2_high);
}

main();