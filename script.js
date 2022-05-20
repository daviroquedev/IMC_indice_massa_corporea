

function calcular() {

    const kg = document.getElementById('kg').value
    const m = document.getElementById('m').value
    const resultado = document.getElementById('resultado')


    if (kg !== '' && m !== '') {
        var imc = (kg / (m * m)).toFixed(2)
        
        if (imc < 17) {
            resultado.style.color = '#009b47'
            resultado.innerHTML =`O IMC de ${imc} está muito abaixo do peso recomendado.`
        }else if( imc >= 17 && imc <=18.49){
            resultado.style.color = '#8ac43f'
            resultado.innerHTML =`O IMC de ${imc} está abaixo do peso recomendado.`
        }else if( imc >= 18.50 && imc < 25){
            resultado.style.color = '#b9d530'
            resultado.innerHTML =`O IMC de ${imc} está ideal, esse é seu peso recomendado.`
        }else if( imc >= 25 && imc < 30){
            resultado.style.color = '#f9a11c'
            resultado.innerHTML =`O IMC de ${imc} está acima do peso recomendado.`
        }else if( imc >=30 && imc < 35){
            resultado.style.color = '#f6951c'
            resultado.innerHTML =`O IMC de ${imc} está indicando obesidade nivel 1.`
        }else if (imc >= 35 && imc < 40){
            resultado.style.color = '#d1181f'
            resultado.innerHTML =`O IMC de ${imc} está indicando obesidade nivel 2.`
        }else if (imc >= 40){
            resultado.style.color = '#231f20'   
            resultado.innerHTML =`O IMC de ${imc} está indicando obesidade nivel 3.` 
        }
    } else {
        alert('Preencha todos os campos')
    }
}