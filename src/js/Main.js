const SIGNIFICANT_FIGURES = 5;
const mm1 = new CaseMM1(3, 2);
const mms = new CaseMMs(2, 3, 2);
const mmsk = new CaseMMsK(1, 3, 2, 3);
mm1.cs = 12;
mm1.cw = 15;

const mm1Form = document.getElementById('mm1-form');
const mmsForm = document.getElementById('mms-form');
const mmskForm = document.getElementById('mmsk-form');

main();
test();

function main() {
    prepareMM1Handler();
    prepareMMsHandler();
    prepareMMsKHandler();
    addNavFunctionality();
    hideModelInputs();
    mm1Form.classList.remove('ocultar');
    updateAnswers(mm1)
}

function prepareMM1Handler() {
    const model = mm1;
    const lambdaVal = document.querySelector('#mm1-form .l');
    const muVal = document.querySelector('#mm1-form .m');
    const cw = document.querySelector('#mm1-form .cw');
    const cs = document.querySelector('#mm1-form .cs');
    lambdaVal.addEventListener('input', (e) => {
        model.lambda = Number(e.target.value);
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        model.mu = Number(e.target.value);
        updateAnswers(model);
    });
    cw.addEventListener('input', (e) => {
        model.cw = Number(e.target.value);
        updateAnswers(model);
    });
    cs.addEventListener('input', (e) => {
        model.cs = Number(e.target.value);
        updateAnswers(model);
    });
}

function prepareMMsHandler() {
    const model = mms;
    const lambdaVal = document.querySelector('#mms-form .l');
    const muVal = document.querySelector('#mms-form .m');
    const sVal = document.querySelector('#mms-form .s');
    const cw = document.querySelector('#mms-form .cw');
    const cs = document.querySelector('#mms-form .cs');
    lambdaVal.addEventListener('input', (e) => {
        model.setLambda(Number(e.target.value));
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        model.setMu(Number(e.target.value));
        updateAnswers(model);
    });
    sVal.addEventListener('input', (e) => {
        model.s = Number(e.target.value);
        updateAnswers(model);
    });
    cw.addEventListener('input', (e) => {
        model.cw = Number(e.target.value);
        updateAnswers(model);
    });
    cs.addEventListener('input', (e) => {
        model.cs = Number(e.target.value);
        updateAnswers(model);
    });
}

function prepareMMsKHandler() {
    const model = mmsk;
    const lambdaVal = document.querySelector('#mmsk-form .l');
    const muVal = document.querySelector('#mmsk-form .m');
    const sVal = document.querySelector('#mmsk-form .s');
    const kVal = document.querySelector('#mmsk-form .k');
    const cw = document.querySelector('#mmsk-form .cw');
    const cs = document.querySelector('#mmsk-form .cs');
    lambdaVal.addEventListener('input', (e) => {
        model.setLambda(Number(e.target.value));
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        model.setMu(Number(e.target.value));
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
    cw.addEventListener('input', (e) => {
        model.cw = Number(e.target.value);
        updateAnswers(model);
    });
    cs.addEventListener('input', (e) => {
        model.cs = Number(e.target.value);
        updateAnswers(model);
    });
}

function addNavFunctionality() {
    document.querySelector('#btn-mm1').addEventListener('input', (e) => showModelInputs(e, mm1Form));
    document.querySelector('#btn-mms').addEventListener('input', (e) => showModelInputs(e, mmsForm));
    document.querySelector('#btn-mmsk').addEventListener('input', (e) => showModelInputs(e, mmskForm));
}

function hideModelInputs() {
    mm1Form.classList.add('ocultar');
    mmsForm.classList.add('ocultar');
    mmskForm.classList.add('ocultar');
}

function updateAnswers(queueModel) {
    const lText = document.getElementById('l');
    const lqText = document.getElementById('lq');
    const wText = document.getElementById('w');
    const wqText = document.getElementById('wq');
    const ctText = document.getElementById('ct');
    lText.innerText = `L = ${queueModel.getL().toFixed(SIGNIFICANT_FIGURES)}`;
    lqText.innerText = `Lq = ${queueModel.getLq().toFixed(SIGNIFICANT_FIGURES)}`;
    wText.innerText = `W = ${queueModel.getW().toFixed(SIGNIFICANT_FIGURES)}`;
    wqText.innerText = `Wq = ${queueModel.getWq().toFixed(SIGNIFICANT_FIGURES)}`;
    ctText.innerText = `Ct = ${queueModel.getCost().toFixed(SIGNIFICANT_FIGURES)}`;
}

function showModelInputs(e, modelForm) {
    hideModelInputs();
    if(e.target.checked)
        modelForm.classList.remove('ocultar');
}
