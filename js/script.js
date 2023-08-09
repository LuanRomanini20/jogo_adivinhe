function revelar2()
{
    document.getElementById('pista2').style.display = 'block';
}

function revelar3()
{
    document.getElementById('pista3').style.display = 'block';
}

function mostrarResultado()
{
    if(document.getElementById('palpite').value == 'Blastoise'){
        /*alert ('Acertou !')*/
        document.getElementById('resultado').style.display = 'block';
    }
    else if(document.getElementById('palpite').value == 'blastoise'){
        /*alert ('Acertou !')*/
        document.getElementById('resultado').style.display = 'block';
    }
    else{
        alert ('Errou !');
    }
}