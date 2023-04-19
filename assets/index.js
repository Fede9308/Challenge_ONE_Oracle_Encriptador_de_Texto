const resultado = document.getElementById('egreso')
const input= document.querySelector('textarea')
const encriptar = document.getElementById('encriptar') 
const desencriptar = document.getElementById('desencriptar') 
const busquedaTexto = document.forms[0] 


dibujarResultado(input.value)

busquedaTexto.addEventListener('submit', (event)=>{
    event.preventDefault()
    busquedaTexto.reset()
})

encriptar.addEventListener('click', ()=>{
    encriptacion(input.value) 
})
desencriptar.addEventListener('click',()=>{
    desencriptacion(input.value)
})

function dibujarResultado(entrada) {
    let resultados ='';
    if (entrada.length == 0) {       
         resultados += 
        `<img src="./assets/images/Muñeco.png" alt="Muñeco">
        <article>
            <h3>Ningún mensaje fue encontrado</h3>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        </article>`
        resultado.innerHTML=resultados;
        input.focus();
        return;
    } 
    else{
        resultados = '';
        resultado.innerHTML=resultados;
        const textoEncriptado = document.createElement('h3');
        const btnPcopiar = document.createElement('button');
        btnPcopiar.className= 'btnCopiar';
        btnPcopiar.innerText='Copiar';
        textoEncriptado.innerText = entrada;
        textoEncriptado.className='txtEncriptado'
        resultado.appendChild(textoEncriptado);
        resultado.appendChild(btnPcopiar);

        
        
            btnPcopiar.addEventListener('click',()=> {
                navigator.clipboard.writeText(textoEncriptado.innerText).then(() => {
                    console.log('Texto copiado al portapapeles');
                    input.focus();
                  }).catch((error) => {
                    console.error('Error al copiar el texto al portapapeles:', error);
                  });
            }); 
        
    }
    
}

function encriptacion(texto) {
    if (tieneAcento(texto)) {
        alert("El texto no debe incluir acentos")
        
    }
    else{
            let texto1=texto.toLowerCase();

        let array1= texto1.split('');
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
        dibujarResultado(textoEncriptado)
    }
}
    
    

function desencriptacion(texto) {
    if (tieneAcento(texto)) {
        alert("El texto ingresado no debe incluir acentos")
        
    }
    else{
        let texto1=texto.toLowerCase();
        
        let text = texto1
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
       
        dibujarResultado(text);
    }
 
}

// Se agrego una funcione que prevenga el uso de acentos

function tieneAcento(texto) {
    const regulador = /[áéíóú´]/i;
    return regulador.test(texto);
}