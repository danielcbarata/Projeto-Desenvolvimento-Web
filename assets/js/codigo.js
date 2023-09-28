console.log("teste de js");

const select = document.getElementById('dia_semana');
const buttons = document.querySelector('.botoes');

console.log("222");

select.addEventListener('change', function () {
    if (select.value !== '') {
        buttons.style.display = 'block';
    } else {
        buttons.style.display = 'none';
    }
});