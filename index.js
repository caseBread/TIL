import { BoostSet } from "./boostSet.js"
import { CountSet } from "./countSet.js";
const log = console.log;


const BS = new BoostSet([1,2,3]);
const otherBS = new BoostSet([1,3]);

log(BS.sum(otherBS));
log(BS.complement(otherBS));
log(BS.intersect(otherBS));
log(BS.resultAll());


const CS = new CountSet({1:2,2:2,3:2});
const otherCS = new CountSet({1:1,3:3});

log(CS.sum(otherCS));
log(CS.complement(otherCS));
log(CS.intersect(otherCS));

