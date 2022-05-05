const mm1 = new CaseMM1(0, 0);

main();
test();

function main() {
    prepareMM1Handler();
}

function prepareMM1Handler() {
    const lambdaVal = document.querySelector("#mm1-form .l");
    const muVal = document.querySelector("#mm1-form .m");
    lambdaVal.addEventListener('input', (e) => {
        mm1.lambda = Number(e.target.value);
        updateAnswers(mm1);
        console.log(mm1.lambda);
    });
    muVal.addEventListener('input', (e) => {
        mm1.mu = Number(e.target.value);
        updateAnswers(mm1);
    });
}

function updateAnswers(queueModel) {
    console.log('Updating element');
    const lText = document.getElementById('l');
    const lqText = document.getElementById('lq');
    const wText = document.getElementById('w');
    const wqText = document.getElementById('wq');
    lText.innerText = `L = ${queueModel.getL()}`;
    lqText.innerText = `Lq = ${queueModel.getLq()}`;
    wText.innerText = `W = ${queueModel.getW()}`;
    wqText.innerText = `Wq = ${queueModel.getWq()}`;
}
