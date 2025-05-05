import http from 'http';
import url from 'url';
import calcularBeneficios from './funcoes.js';

const host = 'localhost';
const porta = 4000;

function responderRequisicao(requisicao, resposta) {
    if (requisicao.method === "GET") {

        const dados = new URLSearchParams(url.parse(requisicao.url).query);

        const idade = Number(dados.get('idade'));
        const sexo = dados.get('sexo');
        const salario_base = Number(dados.get('salario_base'));
        const anoContratacao = Number(dados.get('anoContratacao'));
        const matricula = Number(dados.get('matricula'));

        resposta.setHeader('Content-Type', 'text/html');
        resposta.write('<html>');
        resposta.write('<head>');
        resposta.write('<meta charset="UTF-8"/>');
        resposta.write('<title>Reajuste de salario</title>');
        resposta.write('</head>');
        resposta.write('<body>');
        resposta.write('<H1>Reajuste de salario</H1>');

        if (idade > 16 && salario_base > 0 && anoContratacao > 1960 && anoContratacao <= 2025 && matricula > 0)
        {
            const novoSalario = calcularBeneficios(idade, sexo, anoContratacao, salario_base);

            resposta.write(`<p>Idade: ${idade}</p>`);
            resposta.write(`<p>Sexo: ${sexo}</p>`);
            resposta.write(`<p style="color: red;"><strong>Salario Reajustado: ${novoSalario.toFixed(2)}</strong></p>`);
            resposta.write(`<p>Ano de contratacao: ${anoContratacao}</p>`);
            resposta.write(`<p>Matricula: ${matricula}</p>`);
        } 
        else 
        {
            resposta.write("Digite os valores validos!!!");
        }
        resposta.write('</div>')
        resposta.write('</body>');
        resposta.write('</html>');
        resposta.end();
    }
}

const servidor = http.createServer(responderRequisicao);

servidor.listen(porta, host, () => {
    console.log(`Servidor escutando em http://${host}:${porta}`);
});