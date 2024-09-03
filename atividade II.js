


const express = require('express');
const app = express();
const port = 3000;

app.get('/operacao', (req, res) => {
    const { operacao, n1, n2 } = req.query;

    
    if (!operacao || n1 === undefined || n2 === undefined) {
        return res.status(400).json({ error: 'Parâmetros obrigatórios ausentes' });
    }

    
    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'n1 e n2 devem ser números válidos' });
    }

    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Divisão por zero não é permitida' });
            }
            resultado = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Operação inválida' });
    }

    res.json({ resultado });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
