const mm1 = new CaseMM1(3, 2);
console.log(mm1.getL() == 2);
console.log(mm1.getLq() == 4/3);
console.log(mm1.getW() == 1);
console.log(mm1.getWq() == 2/3);

const mms = new CaseMMs(2, 3, 2);
console.log(mms.getLq() == 1/12);
console.log(mms.getL() == 3/4);
console.log(mms.getWq() == 1/24);
console.log(mms.getW() == 9/24);
