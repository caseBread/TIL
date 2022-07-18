// 핵심 변수
// size : 노페어=0,페어=1,트리플=2,스트레이트=3,포카드=4
// high : 페어의 숫자(스트레이트일 경우 가장높은숫자)를 배열로 저장


// 입출력 부분
let ok = false;
let array1 = [];
let array2 = [];
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
    if (!ok) {
        array1 = line.split(' ').map((el) => parseInt(el));
        ok = true
    }
    else {
        array2 = line.split(' ').map((el) => parseInt(el));
        reader.close();
    }
});
reader.on('close', () => {
    console.log(main(array1,array2));
    process.exit();
});




function check_straight(array, size, high) {
    if (size == 3) return [ 4, high ];
    let cnt = 0; 
    for (let i = 1; i < array.length; i++) {
        if (array[i-1] == array[i]) continue;
        cnt = (array[i-1] + 1 == array[i]) ? cnt+1 : 0;
        if (4 <= cnt) [ size, high ] = [ 3, [array[i]] ];
    }
    return [ size, high ];
}

function check_pair(array, size, size_temp, high,i) {
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
        [ size, high ] = check_pair(array, size, size_temp, high,i);
    }
    [ size, high ] = check_straight(array, size, high);
    return [ size, high ];
}

function compare_sizeSame(high1,high2) {
    high1.sort((a,b) => b-a);
    high2.sort((a,b) => b-a);
    for (let i = 0; i < high1.length; i++) {
        if (high1[i] > high2[i]) return 1;
        else if (high1[i] < high2[i]) return 2;
    }
    return 0;
}

function compare(size1, high1, size2, high2) {
    if (size1 == 0 && size2 == 0) 
        return 0;
    else if (size1 > size2) 
        return 1;
    else if (size1 < size2) 
        return 2;
    else
        return compare_sizeSame(high1,high2);
}

function main(array1,array2) {
    array1.sort((a,b)=>a-b);
    array2.sort((a,b)=>a-b);
    const [array1_size, array1_high] = check(array1);
    const [array2_size, array2_high] = check(array2);
    return compare(array1_size, array1_high, array2_size, array2_high);
}

