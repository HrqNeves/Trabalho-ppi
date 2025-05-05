function calcularBeneficios(idade, sexo, anoContratacao, salario_base) {
    let reajuste = 0;
    let valor = 0;
    let anosEmpresa = 2025 - anoContratacao;

    if (idade >= 18 && idade <= 39) {
        if (sexo === 'M') {
            reajuste = 10;
            if (anosEmpresa <= 10) {
                valor = 10;
            } else {
                valor = 17;
            }
        } else if (sexo === 'F') {
            reajuste = 8;
            if (anosEmpresa <= 10) {
                valor = 11;
            } else {
                valor = 16;
            }
        }
    } else if (idade >= 40 && idade <= 69) {
        if (sexo === 'M') {
            reajuste = 8;
            if (anosEmpresa <= 10) {
                valor = 5;
            } else {
                valor = 15;
            }
        } else if (sexo === 'F') {
            reajuste = 10;
            if (anosEmpresa <= 10) {
                valor = 7;
            } else {
                valor = 14;
            }
        }
    } else if (idade >= 70 && idade <= 99) {
        if (sexo === 'M') {
            reajuste = 15;
            if (anosEmpresa <= 10) {
                valor = 15;
            } else {
                valor = 13;
            }
        } else if (sexo === 'F') {
            reajuste = 17;
            if (anosEmpresa <= 10) {
                valor = 17;
            } else {
                valor = 12;
            }
        }
    }

    let novoSalario = salario_base + (salario_base * (reajuste / 100)) + valor;
    return novoSalario;
}

export default calcularBeneficios;