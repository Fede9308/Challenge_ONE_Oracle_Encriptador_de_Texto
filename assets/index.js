const resultado = document.getElementById('egreso')
const input= document.querySelector('textarea')
const encriptar = document.getElementById('encriptar') 
const desencriptar = document.getElementById('desencriptar') 
const busquedaTexto = document.forms[0] 

busquedaTexto.addEventListener('submit', (event)=>{
    event.preventDefault()
    busquedaTexto.reset()
})

encriptar.addEventListener('click', (event)=>{
    encriptacion(input.value) 
})
desencriptar.addEventListener('click',(event)=>{
    desencriptacion(input.value) 
})

dibujarResultado(input.value)

function dibujarResultado(entrada) {
    let resultados='';
    if (entrada.length == 0) {
        resultado.innerHTML = 
        `<img src="./assets/images/Muñeco.png" alt="Muñeco">
        <article>
            <h3>Ningún mensaje fue encontrado</h3>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        </article>`
        return
    } 
    else{
        resultados += `<h3 id="encriptado">${entrada}</h3>
        <button class="botonClaro">Copiar</button>`
    }
    
    resultado.innerHTML=resultados;
}

function encriptacion(texto) {
    if (tieneAcento(texto)) {
        alert("El texto no debe incluir acentos")
        
    }
    else{
            let texto1=texto.toLowerCase();

        let array1= texto1.split('');
    /*  console.log(array1) */
        let array2=[];

        array1.forEach(element => {
            switch (element) {
                case "a": 
                    array2.push("ai");    
                    break;
                case "e": 
                    array2.push("enter");
                    break;
                case "i":
                    array2.push("imes");
                    break;
                case "o":
                    array2.push("ober");
                    break;
                case "u":
                    array2.push("ufat");
                    break;
            
                default:
                    array2.push(element)
                    break;
            }
        });
        let textoEncriptado = array2.join('')
        /* console.log(textoEncriptado) */
        dibujarResultado(textoEncriptado)
    }
}
    
    

function desencriptacion(texto) {
    if (tieneAcento(texto)) {
        alert("El texto ingresado no debe incluir acentos")
        
    }
    else{
        let texto1=texto.toLowerCase();
        /* console.log(texto1) */
        let text = texto1
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        /* console.log(text); */
        dibujarResultado(text);
    }
 
}

function tieneAcento(texto) {
    const regulador = /[áéíóú´]/i;
    return regulador.test(texto);
  }


/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */