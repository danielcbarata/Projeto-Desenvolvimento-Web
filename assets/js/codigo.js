function fetchDataFromAPI() {
    // URL da API que você deseja consultar
    const apiUrl = 'https://api.api-futebol.com.br/v1/times/702';

    // Cabeçalho de autenticação
    const headers = {
        'Authorization': 'Bearer test_71fd9b935ccd00330ca2b58358eb17'
    };

    // Seleciona os elementos HTML onde você deseja exibir a imagem e o nome do time
    const escudoElement = document.getElementById('escudo');
    const nomeElement = document.getElementById('nomeTime');

    // Realiza a requisição usando o método fetch
    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(data => {
            // Exibe a imagem do escudo e o nome do time na página
            escudoElement.src = data.escudo; // Define a imagem do escudo
            nomeElement.textContent = data.nome; // Define o nome do time
        })
        .catch(error => {
            // Trata erros caso ocorram
            console.error('Ocorreu um erro ao buscar os dados da API:', error);
        });
}