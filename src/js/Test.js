function test() {
    const mm1 = new CaseMM1(3, 2);
    console.log(mm1.getL() == 2);
    console.log(mm1.getLq() == 4/3);
    console.log(mm1.getW() == 1);
    console.log(mm1.getWq() == 2/3);
    mm1.cw = 15;
    mm1.cs = 12;
    console.log(mm1.getCost() == 32);
    mm1.cs = 11;
    mm1.getCost()
    mm1.cs = 12;
    console.log(mm1.getCost() == 32);

    const mms = new CaseMMs(2, 3, 2);
    console.log(mms.getLq() == 1/12);
    console.log(mms.getL() == 3/4);
    console.log(mms.getWq() == 1/24);
    console.log(mms.getW() == 9/24);
    // console.log(mms.getCost(12, 15));

    const mmsk = new CaseMMsK(34, 21345, 12345, 20000);
    console.log(mmsk.getP0());
    console.log(mmsk.getLq());
    console.log(mmsk.getLambdaE());
    console.log(mmsk.getWq());
    console.log(mmsk.getW());
    console.log(mmsk.getL());
    console.log(mmsk.getPn(mmsk.k + 1));
    // console.log(mmsk.getCost(12, 15));

    const mg1 = new CaseMG1(5, 3, 0.1);
    console.log(mg1.getRho());
    console.log(mg1.getLq());
    console.log(mg1.getL());
    console.log(mg1.getWq());
    console.log(mg1.getW());
}

function stressTest() {
    console.log("Stress tests");
    console.log('MM1');
    const mm1 = new CaseMM1(162, 161);
    console.log('L: ' + mm1.getL());
    console.log('Lq: ' + mm1.getLq());
    console.log('W: ' + mm1.getW());
    console.log('Wq: ' + mm1.getWq());

    const mm12 = new CaseMM1(300, 100);
    console.log('L: ' + mm12.getL());
    console.log('Lq: ' + mm12.getLq());
    console.log('W: ' + mm12.getW());
    console.log('Wq: ' + mm12.getWq());

    console.log('MMs');
    const mms = new CaseMMs(111, 162, 161);
    console.log('L: ' + mms.getL());
    console.log('Lq: ' + mms.getLq());
    console.log('W: ' + mms.getW());
    console.log('Wq: ' + mms.getWq());

    console.log('MMsK');
    const mmsk = new CaseMMsK(34, 21345, 12345, 20000);
    console.log('L: ' + mmsk.getL());
    console.log('Lq: ' + mmsk.getLq());
    console.log('W: ' + mmsk.getW());
    console.log('Wq: ' + mmsk.getWq());

    console.log('MG1');
    const mg1 = new CaseMG1(14, 13, 0.99);
    console.log('L: ' + mg1.getL());
    console.log('Lq: ' + mg1.getLq());
    console.log('W: ' + mg1.getW());
    console.log('Wq: ' + mg1.getWq());

    const mg12 = new CaseMG1(162, 161, 0);
    console.log('L: ' + mg12.getL());
    console.log('Lq: ' + mg12.getLq());
    console.log('W: ' + mg12.getW());
    console.log('Wq: ' + mg12.getWq());

    console.log('MD1');
    const md1 = new CaseMD1(3, 2);
    console.log('L: ' + md1.getL());
    console.log('Lq: ' + md1.getLq());
    console.log('W: ' + md1.getW());
    console.log('Wq: ' + md1.getWq());

    console.log('ME1');
    const me1 = new CaseME1(3, 2, 1);
    console.log('L: ' + me1.getL());
    console.log('Lq: ' + me1.getLq());
    console.log('W: ' + me1.getW());
    console.log('Wq: ' + me1.getWq());

    const me12 = new CaseME1(30, 25, 5);
    console.log('L: ' + me12.getL());
    console.log('Lq: ' + me12.getLq());
    console.log('W: ' + me12.getW());
    console.log('Wq: ' + me12.getWq());
}
