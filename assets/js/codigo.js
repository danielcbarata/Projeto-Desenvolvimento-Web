//Definição das variaveis
const select = document.querySelector('.dia_semana'); 
const buttons = document.querySelector('.botoes');
const botaoAgendar = document.querySelector('.botao_agendar');
let horariosDisponiveis;

//Evento adicionado para fazer a mudança do CSS quando a opção de selecionar um dia for escolhida, ele exibe os serviços na tela e esconde os horários disponiveis caso já tenham sido exibidos. Enquanto selecionar um dia não for selecionado, nada é exibido na tela
select.addEventListener('change', function () {
    if (select.value !== 'selecionar') { 
        buttons.style.display = 'flex';
        horariosDisponiveis.style.display = 'none';
        botaoAgendar.style.display = 'none';
    } else {
        buttons.style.display = 'none';
        horariosDisponiveis.style.display = 'none';
        botaoAgendar.style.display = 'none';
    }
});

//Função feita para exibir os horários quando um serviço for escolhido. Primeiro é recuperado qual o dia da semana o usuário escolheu, para ser exibido somente os horários disponíveis daquele determinado dia. É feito um filtro para retirar da exibição horários que já tenham sido agendados.
function mostrarHorarios(servico) {
    const diaSelecionado = select.value;
    const horariosSelect = document.querySelector(`.horarios_disponiveis_${diaSelecionado.toLowerCase()}`);
    horariosDisponiveis = document.querySelector(`.div_horarios_disponiveis_${diaSelecionado.toLowerCase()}`);
    const options = horariosSelect.querySelectorAll('option');
    
    const chave = `${diaSelecionado.toLowerCase()}_horarioAgendado`;
    const horarioAgendado = localStorage.getItem(chave);

    options.forEach((option) => {
        if (option.value !== 'selecionar_horario' && (horarioAgendado && option.value === horarioAgendado)) {
            option.remove();
        }
    });
    
    horariosDisponiveis.style.display = 'block';
    botaoAgendar.style.display = 'block';
    buttons.style.display = 'none';
}

//Evento para verificar o clique do botão agendar. Caso o usuário escolha um horário e tente agendar, é exibido a mensagem que o horário foi agendado com sucesso e armazenado em um storage local JS. Caso não tenha selecionado nenhum horário e tente agendar, é exibido mensagem de erro.
botaoAgendar.addEventListener('click', function () {
    const diaSelecionado = select.value;
    const horarioSelecionado = document.querySelector(`.horarios_disponiveis_${diaSelecionado.toLowerCase()}`).value;

    if (horarioSelecionado !== 'selecionar_horario') {
        const chave = `${diaSelecionado.toLowerCase()}_horarioAgendado`;
        localStorage.setItem(chave, horarioSelecionado);
        
        alert('Horário agendado com sucesso!');

        const horarioAgendado = localStorage.getItem(chave);
        if (horarioAgendado !== null && horarioAgendado !== undefined) {
            console.log('Horário agendado:', horarioAgendado);
        } else {
            console.log('Nenhum horário agendado.');
        }

        window.location.reload();
        
    } else {
        alert('Por favor, selecione um horário válido antes de agendar.');
    }
});