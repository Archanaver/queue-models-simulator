const mm1 = new CaseMM1(3, 2);
const mms = new CaseMMs(2, 3, 2);
const mmsk = new CaseMMsK(1, 3, 2, 3);

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
    mmsForm.classList.remove('ocultar');
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
    lText.innerText = `L = ${queueModel.getL()}`;
    lqText.innerText = `Lq = ${queueModel.getLq()}`;
    wText.innerText = `W = ${queueModel.getW()}`;
    wqText.innerText = `Wq = ${queueModel.getWq()}`;
}

function showModelInputs(e, modelForm) {
    hideModelInputs();
    if(e.target.checked)
        modelForm.classList.remove('ocultar');
}
