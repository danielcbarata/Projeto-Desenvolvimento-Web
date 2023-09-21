function fetchDataFromAPI() {
    // URL da API que você deseja consultar
    const apiUrl = 'https://api.api-futebol.com.br/v1/times/702';

    // Cabeçalho de autenticação
    const headers = {
        'Authorization': 'Bearer test_71fd9b935ccd00330ca2b58358eb17'
    };

    // Seleciona o elemento HTML onde você deseja exibir os dados da API
    const resultContainer = document.getElementById('apiResult');

    // Realiza a requisição usando o método fetch
    fetch(apiUrl, { headers })
        .then(response => response.json())
        .then(data => {
            // Exibe os dados na página HTML
            resultContainer.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            // Trata erros caso ocorram
            resultContainer.innerHTML = 'Ocorreu um erro ao buscar os dados da API: ' + error;
        });
}