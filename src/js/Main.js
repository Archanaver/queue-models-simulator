const mm1 = new CaseMM1(3, 2);
const mms = new CaseMMs(2, 3, 2);
const mmsk = new CaseMMsK(1, 3, 2, 3);

main();
test();

function main() {
    prepareMM1Handler();
    prepareMMsHandler();
    prepareMMsKHandler();
}

function prepareMM1Handler() {
    const model = mm1;
    const lambdaVal = document.querySelector('#mm1-form .l');
    const muVal = document.querySelector('#mm1-form .m');
    lambdaVal.addEventListener('input', (e) => {
        model.lambda = Number(e.target.value);
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        model.mu = Number(e.target.value);
        updateAnswers(model);
    });
}

function prepareMMsHandler() {
    const model = mms;
    const lambdaVal = document.querySelector('#mms-form .l');
    const muVal = document.querySelector('#mms-form .m');
    const sVal = document.querySelector('#mms-form .s');
    lambdaVal.addEventListener('input', (e) => {
        model.lambda = Number(e.target.value);
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        model.mu = Number(e.target.value);
        updateAnswers(model);
    });
    sVal.addEventListener('input', (e) => {
        model.s = Number(e.target.value);
        updateAnswers(model);
    });
}

function prepareMMsKHandler() {
    const model = mmsk;
    const lambdaVal = document.querySelector('#mmsk-form .l');
    const muVal = document.querySelector('#mmsk-form .m');
    const sVal = document.querySelector('#mmsk-form .s');
    const kVal = document.querySelector('#mmsk-form .k');
    lambdaVal.addEventListener('input', (e) => {
        model.lambda = Number(e.target.value);
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        model.mu = Number(e.target.value);
        updateAnswers(model);
    });
    sVal.addEventListener('input', (e) => {
        model.s = Number(e.target.value);
        updateAnswers(model);
    });
    kVal.addEventListener('input', (e) => {
        model.k = Number(e.target.value);
        updateAnswers(model);
    });
}

function updateAnswers(queueModel) {
    const lText = document.getElementById('l');
    const lqText = document.getElementById('lq');
    const wText = document.getElementById('w');
    const wqText = document.getElementById('wq');
    lText.innerText = `L = ${queueModel.getL()}`;
    lqText.innerText = `Lq = ${queueModel.getLq()}`;
    wText.innerText = `W = ${queueModel.getW()}`;
    wqText.innerText = `Wq = ${queueModel.getWq()}`;
}
