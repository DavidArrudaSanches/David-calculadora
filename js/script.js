const calculator = document.querySelector('.calculator');
const keys = calculator.querySelectorAll('.calculator__key');
const display = document.getElementById('display');

// O forEach serve para adicionar um ouvinte em cada botão
keys.forEach(key => {
  key.addEventListener('click', e => {
    // Os targets servem para coletar os botoes clicados como uma addeventlistner 
    const operators = e.target.dataset.action;
    const number = e.target.textContent;
    const displayedNum = display.textContent;


    // Verifica se um numero é pressionado
    if (e.target.hasAttribute('data-number')) {
    // Verifica se o numero q esta no display é 0 caso for muda para o numero clicado 
      if (displayedNum === '0') {
        display.textContent = number;
      } 
    //   Caso não for 0 ele ira juntar os numeros Ex 9,8 98
      else {
        display.textContent = displayedNum + number;
      }
    }

    // Caso o . for clicado ele ira incluir no display
    if (operators === 'decimal') {
      if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.';
      }
    }

    // Verifica qual operador vai ser utilizado no calculo 
    if (operators === 'add' || operators === 'subtract' || operators === 'multiply' || operators === 'divide') {
    // Coleta o primeiro numero // oque foi selecionado antes de clicar no operador 
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = operators;
      display.textContent = '0';
    }

    if (operators === 'calculate') {
    // Depois do botão calculate for pressionado ele recupera o primeiro numero e coleta o secundo numero 
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = displayedNum;

    // Fazendo Calculos
      let result = '';
      if (operator === 'add') {
        result = parseFloat(firstValue) + parseFloat(secondValue);
      } else if (operator === 'subtract') {
        result = parseFloat(firstValue) - parseFloat(secondValue);
      } else if (operator === 'multiply') {
        result = parseFloat(firstValue) * parseFloat(secondValue);
      } else if (operator === 'divide') {
        result = parseFloat(firstValue) / parseFloat(secondValue);
      }

      display.textContent = result;
    }

    // Verifica se o botão AC foi pressionado para limpar os dados
    if (operators === 'clear') {
      display.textContent = '0';
      calculator.dataset.firstValue = '';
      calculator.dataset.operator = '';
    }

    // Numero ao quadrado 
    if (operators === 'power') {
      display.textContent = parseFloat(displayedNum) * parseFloat(displayedNum);
    }
    // Raiz do numero
    if (operators === 'sqrt') {
      display.textContent = Math.sqrt(parseFloat(displayedNum));
    }
    // Porcentagem Ex: 1000%= 10x15 = 150+1000 =1150
    if (operators === 'percentage') {
        display.textContent = parseFloat(displayedNum) / 100;
    }
  });
});