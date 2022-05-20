const SIGNIFICANT_FIGURES = 5;
const mm1 = new CaseMM1(3, 2);
const mms = new CaseMMs(2, 3, 2);
const mmsk = new CaseMMsK(1, 3, 2, 3);
const mg1 = new CaseMG1(5, 3, 0.1);
const md1 = new CaseMD1(5, 3);
const me1 = new CaseME1(5, 3, 4);
mm1.cw = 12;
mm1.cs = 15;
mms.cw = 12;
mms.cs = 15;
mmsk.cw = 12;
mmsk.cs = 15;
mg1.cw = 12;
mg1.cs = 15;
md1.cw = 12;
md1.cs = 15;
me1.cw = 12;
me1.cs = 15;

const mm1Form = document.getElementById('mm1-form');
const mmsForm = document.getElementById('mms-form');
const mmskForm = document.getElementById('mmsk-form');
const mg1Form = document.getElementById('mg1-form');
const md1Form = document.getElementById('md1-form');
const me1Form = document.getElementById('me1-form');

main();
test();

function main() {
    prepareMM1Handler();
    prepareMMsHandler();
    prepareMMsKHandler();
    prepareMG1Handler();
    prepareMD1Handler();
    prepareME1Handler();
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
    const lUnit = document.querySelector('#mm1-form .l-unit');
    const mUnit = document.querySelector('#mm1-form .m-unit');
    lambdaVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(lUnit.value, Number(e.target.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(mUnit.value, Number(e.target.value));
        model.mu = convertedValue;
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
    lUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(lambdaVal.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    mUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(muVal.value));
        model.mu = convertedValue;
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
    const lUnit = document.querySelector('#mms-form .l-unit');
    const mUnit = document.querySelector('#mms-form .m-unit');
    lambdaVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(lUnit.value, Number(e.target.value));
        model.setLambda(convertedValue);
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(mUnit.value, Number(e.target.value));
        model.setMu(convertedValue);
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
    lUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(lambdaVal.value));
        model.setLambda(convertedValue);
        updateAnswers(model);
    });
    mUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(muVal.value));
        model.setMu(convertedValue);
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
    const lUnit = document.querySelector('#mmsk-form .l-unit');
    const mUnit = document.querySelector('#mmsk-form .m-unit');
    lambdaVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(lUnit.value, Number(e.target.value));
        model.setLambda(convertedValue);
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(mUnit.value, Number(e.target.value));
        model.setMu(convertedValue);
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
    lUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(lambdaVal.value));
        model.setLambda(convertedValue);
        updateAnswers(model);
    });
    mUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(muVal.value));
        model.setMu(convertedValue);
        updateAnswers(model);
    });
}

function prepareMG1Handler() {
    const model = mg1;
    const lambdaVal = document.querySelector('#mg1-form .l');
    const muVal = document.querySelector('#mg1-form .m');
    const sigmaVal = document.querySelector('#mg1-form .sigma');
    const cw = document.querySelector('#mg1-form .cw');
    const cs = document.querySelector('#mg1-form .cs');
    const lUnit = document.querySelector('#mg1-form .l-unit');
    const mUnit = document.querySelector('#mg1-form .m-unit');
    lambdaVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(lUnit.value, Number(e.target.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(mUnit.value, Number(e.target.value));
        model.mu = convertedValue;
        updateAnswers(model);
    });
    sigmaVal.addEventListener('input', (e) => {
        model.sigma = Number(e.target.value);
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
    lUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(lambdaVal.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    mUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(muVal.value));
        model.mu = convertedValue;
        updateAnswers(model);
    });
}

function prepareMD1Handler() {
    const model = md1;
    const lambdaVal = document.querySelector('#md1-form .l');
    const muVal = document.querySelector('#md1-form .m');
    const cw = document.querySelector('#md1-form .cw');
    const cs = document.querySelector('#md1-form .cs');
    const lUnit = document.querySelector('#md1-form .l-unit');
    const mUnit = document.querySelector('#md1-form .m-unit');
    lambdaVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(lUnit.value, Number(e.target.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(mUnit.value, Number(e.target.value));
        model.mu = convertedValue;
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
    lUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(lambdaVal.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    mUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(muVal.value));
        model.mu = convertedValue;
        updateAnswers(model);
    });
}

function prepareME1Handler() {
    const model = me1;
    const lambdaVal = document.querySelector('#me1-form .l');
    const muVal = document.querySelector('#me1-form .m');
    const kVal = document.querySelector('#me1-form .k');
    const cw = document.querySelector('#me1-form .cw');
    const cs = document.querySelector('#me1-form .cs');
    const lUnit = document.querySelector('#me1-form .l-unit');
    const mUnit = document.querySelector('#me1-form .m-unit');
    lambdaVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(lUnit.value, Number(e.target.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    muVal.addEventListener('input', (e) => {
        const convertedValue = unitConversion(mUnit.value, Number(e.target.value));
        model.mu = convertedValue;
        updateAnswers(model);
    });
    kVal.addEventListener('input', (e) => {
        model.sigma = Number(e.target.value);
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
    lUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(lambdaVal.value));
        model.lambda = convertedValue;
        updateAnswers(model);
    });
    mUnit.addEventListener('change', (e) => {
        const convertedValue = unitConversion(e.target.value, Number(muVal.value));
        model.mu = convertedValue;
        updateAnswers(model);
    });
}

function addNavFunctionality() {
    document.querySelector('#btn-mm1').addEventListener('input', (e) => showModelInputs(e, mm1Form));
    document.querySelector('#btn-mms').addEventListener('input', (e) => showModelInputs(e, mmsForm));
    document.querySelector('#btn-mmsk').addEventListener('input', (e) => showModelInputs(e, mmskForm));
    document.querySelector('#btn-mg1').addEventListener('input', (e) => showModelInputs(e, mg1Form));
    document.querySelector('#btn-md1').addEventListener('input', (e) => showModelInputs(e, md1Form));
    document.querySelector('#btn-me1').addEventListener('input', (e) => showModelInputs(e, me1Form));
}

function hideModelInputs() {
    mm1Form.classList.add('ocultar');
    mmsForm.classList.add('ocultar');
    mmskForm.classList.add('ocultar');
    mg1Form.classList.add('ocultar');
    me1Form.classList.add('ocultar');
    md1Form.classList.add('ocultar');
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

function unitConversion(selection, value) {
    switch(selection){
        case "sec":
            return value * 3600;
        case "min":
            return value * 60;
        case "hr":
            return value;
        case "day":
            return value / 24;
    }
}
