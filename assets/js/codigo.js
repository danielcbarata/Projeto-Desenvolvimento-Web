const select = document.querySelector('.dia_semana'); // Correção aqui, use querySelector em vez de getElementsByClassName
const buttons = document.querySelector('.botoes');
const horariosDisponiveis = document.querySelector('.div_horarios_disponiveis');


select.addEventListener('change', function () {
    if (select.value !== 'selecionar') { // Verifique se o valor não é 'selecionar'
        buttons.style.display = 'block';
        horariosDisponiveis.style.display = 'none';
    } else {
        buttons.style.display = 'none';
        horariosDisponiveis.style.display = 'none';
    }
});

function mostrarHorarios(servico) {
    const horariosDisponiveis = document.querySelector('.div_horarios_disponiveis');
    const horariosSelect = document.querySelector('.horarios_disponiveis');


    let horarios = [];

    if (servico === 'Corte') {
        horarios = ['10:00', '11:00', '12:00'];
    } else if (servico === 'Descolorir') {
        horarios = ['14:00', '15:00', '16:00'];
    }
    horariosSelect.innerHTML = '';

    // Adicione as opções de horários ao select
    for (const horario of horarios) {
        const option = document.createElement('option');
        option.value = horario;
        option.textContent = horario;
        horariosSelect.appendChild(option);
    }

    // Exiba a div de horários disponíveis
    horariosDisponiveis.style.display = 'block';
    buttons.style.display = 'none';
}