import { BoostSet } from "./boostSet.js"
import { CountSet } from "./countSet.js";
const log = console.log;


const BS = new BoostSet([1,2,3]);
const otherBS = new BoostSet([1,3]);

log("A 집합 :",BS.resultAll());
log("B 집합 :",otherBS.resultAll());
log("합집합 :",BS.sum(otherBS));
log("여집합 :",BS.complement(otherBS));
log("교집합 :",BS.intersect(otherBS));


const CS = new CountSet({1:2,2:2,3:2});
const otherCS = new CountSet({1:1,3:3});

log("A count집합 :",CS.resultAll());
log("B count집합 :",otherCS.resultAll());
log("count 요소 더하기 :",CS.append(3));
log("count 요소 빼기 :",CS.remove(3));
log("count 합집합 :",CS.sum(otherCS));
log("count 여집합 :",CS.complement(otherCS));
log("count 교집합 :",CS.intersect(otherCS));

BS.display();
CS.display();