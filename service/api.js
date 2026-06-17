// BASE_URL aponta para o JSON local enquanto a API não está integrada.
// Quando a API estiver pronta, basta trocar para: 'http://localhost:3000/api'
const BASE_URL = 'http://localhost:3000/';

// Retorna todos os jogos
async function getJogos() {
    const response = await fetch('${BASE_URL}api/jogos')
    const data = await response.json();
    console.log(data)
    return data
}

// Retorna todos os times
async function getTimes() {
    return _get('/times');
}

// Retorna todos os competidores
async function getCompetidores() {
    return _get('/competidores');
}

// Retorna todos os confrontos
async function getConfrontos() {
    return _get('/confrontos');
}