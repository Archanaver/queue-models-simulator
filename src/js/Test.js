function test() {
    const mm1 = new CaseMM1(3, 2);
    console.log(mm1.getL() == 2);
    console.log(mm1.getLq() == 4/3);
    console.log(mm1.getW() == 1);
    console.log(mm1.getWq() == 2/3);
    mm1.cw = 15;
    mm1.cs = 12;
    console.log(mm1.getCost() == 32);

    const mms = new CaseMMs(2, 3, 2);
    console.log(mms.getLq() == 1/12);
    console.log(mms.getL() == 3/4);
    console.log(mms.getWq() == 1/24);
    console.log(mms.getW() == 9/24);
    // console.log(mms.getCost(12, 15));

    const mmsk = new CaseMMsK(1, 3, 2, 3);
    console.log(mmsk.getP0());
    console.log(mmsk.getLq());
    console.log(mmsk.getLambdaE());
    console.log(mmsk.getWq());
    console.log(mmsk.getW());
    console.log(mmsk.getL());
    console.log(mmsk.getPn(mmsk.k + 1));
    // console.log(mmsk.getCost(12, 15));
}
