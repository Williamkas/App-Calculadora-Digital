console.log('Apliación Calculadora');

    function suma(){
        const forma = document.getElementById('forma');
        let operandoA = forma['operandoA'];
        let operandoB = forma['operandoB'];
        let resultado = parseFloat(operandoA.value) + parseFloat(operandoB.value); //Con el parsetIn convertirmos los valores al tipo numérico, ya que de lo contrario se estarían concatenando los valores en vez de sumarse.
            if (isNaN(resultado)){
                resultado = 'Por favor ingrese valores numéricos para realizar la operación';
                alert('ERROR: No se puede realizar la operación con elementos vacíos.')
            }
            document.getElementById('resultado').innerHTML = `${resultado}`;
            console.log(`El resultado es: ${resultado}`);    
    }

    function resta(){
        const forma = document.getElementById('forma');
        let operandoA = forma['operandoA'];
        let operandoB = forma['operandoB'];
        let resultado = parseFloat(operandoA.value) - parseFloat(operandoB.value); //Con el parsetIn convertirmos los valores al tipo numérico, ya que de lo contrario se estarían concatenando los valores en vez de sumarse.
        if (isNaN(resultado)){
            resultado = 'Por favor ingrese valores numéricos para realizar la operación';
            alert('ERROR: No se puede realizar la operación con elementos vacíos.')
        }
        document.getElementById('resultado').innerHTML = `${resultado}`;
        console.log(`El resultado es: ${resultado}`);    
    }

    function multiplica(){
        const forma = document.getElementById('forma');
        let operandoA = forma['operandoA'];
        let operandoB = forma['operandoB'];
        let resultado = parseFloat(operandoA.value) * parseFloat(operandoB.value); //Con el parsetIn convertirmos los valores al tipo numérico, ya que de lo contrario se estarían concatenando los valores en vez de sumarse.
        if (isNaN(resultado)){
            resultado = 'Por favor ingrese valores numéricos para realizar la operación';
            alert('ERROR: No se puede realizar la operación con elementos vacíos.')
        }
        document.getElementById('resultado').innerHTML = `${resultado}`;
        console.log(`El resultado es: ${resultado}`);    
    }

    function divide(){
            const forma = document.getElementById('forma');
            let operandoA = forma['operandoA'];
            let operandoB = forma['operandoB'];
            let resultado = parseFloat(operandoA.value) / parseFloat(operandoB.value); //Con el parsetIn convertirmos los valores al tipo numérico, ya que de lo contrario se estarían concatenando los valores en vez de sumarse.
            if (isNaN(resultado)){
                resultado = 'Por favor ingrese valores numéricos para realizar la operación';
                alert('ERROR: No se puede realizar la operación con elementos vacíos.')
            }

        document.getElementById('resultado').innerHTML = `${resultado}`;
        console.log(`El resultado es: ${resultado}.`);    

    }

    function cero(){
        document.getElementById('resultado').innerHTML = `0`;
    }