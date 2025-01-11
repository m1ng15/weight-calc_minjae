const resultTxt = document.querySelector('.result_text');
const calcBtn = document.querySelector('#calcBtn');
const resetBtn = document.querySelector('#resetBtn');
const userHeight = document.querySelector('#user_height');
const userWeight = document.querySelector('#user_weight');
function checkWeight(){
    let userCm = Number(userHeight.value);
    let userKg = Number(userWeight.value);
    let userRes = ((userCm - 100) * 0.9);
    let resPrint = userKg - userRes;
    return resultTxt.innerHTML = `<p><strong>${userCm}</strong>cm 기준 적정 체중은 <strong>${userRes.toFixed(1)}</strong>kg 입니다. <br>현재 <strong>${resPrint.toFixed(1)}</strong>kg 초과했습니다.</p>`;
}
calcBtn.addEventListener('click', function(){checkWeight()});
resetBtn.addEventListener('click', function(){
    resultTxt.innerText = '';
    userHeight.value = '';
    userWeight.value = '';
});