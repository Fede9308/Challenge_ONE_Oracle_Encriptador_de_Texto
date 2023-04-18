const resultado = document.getElementById('egreso')
const input= document.querySelector('textarea')
const encriptar = document.getElementById('encriptar') 
const desencriptar = document.getElementById('desencriptar') 
const busquedaTexto = document.forms[0] 
/* const textoEncriptado= document.querySelector('#encriptado') */
/* const btnPcopiar= document.getElementById('btnCopiar') */



dibujarResultado(input.value)

busquedaTexto.addEventListener('submit', (event)=>{
    event.preventDefault()
    busquedaTexto.reset()
})

encriptar.addEventListener('click', ()=>{
    encriptacion(input.value) 
    console.log("contador1")
})
desencriptar.addEventListener('click',()=>{
    desencriptacion(input.value)
    console.log("contador2") 
})

/* const observer= new MutationObserver(() =>{
    const btnPcopiar= document.getElementById('btnCopiar');
    if (btnPcopiar){
        btnPcopiar.addEventListener('click', () => {
            console.log("contador3")
        })
        observer.disconnect();
    }
}); */

/* btnPcopiar.addEventListener('click', ()=>{
    console.log("contador3")
}) */

/* btnPcopiar.addEventListener('click',()=> {
    navigator.clipboard.writeText(textoEncriptado.innerText).then(() => {
        console.log('Texto copiado al portapapeles');
      }).catch((error) => {
        console.error('Error al copiar el texto al portapapeles:', error);
      });
}) */;

/* async function espera(){
    await dibujarResultado();

    

    btnPcopiar.onclick = console.log("contador3")
} */





function dibujarResultado(entrada) {
    let resultados =''
    if (entrada.length == 0) {
    /*     const textoFallido = document.createElement('div')
        textoFallido.innerHTML = '<img src="./assets/images/Muñeco.png" alt="Muñeco"><article><h3>Ningún mensaje fue encontrado</h3><p>Ingresa el texto que desees encriptar o desencriptar.</p> </article>' ;
       
       resultado.appendChild(textoFallido) */
       
         resultados += 
        `<img src="./assets/images/Muñeco.png" alt="Muñeco">
        <article>
            <h3>Ningún mensaje fue encontrado</h3>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        </article>`
        resultado.innerHTML=resultados;
        
        return
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
                  }).catch((error) => {
                    console.error('Error al copiar el texto al portapapeles:', error);
                  });
            }) 

             /*   btnPcopiar.addEventListener('click', ()=>{
            console.log("contador3")}); */
        
       /*  resultados += `<h3 id="encriptado">${entrada}</h3>
        <button class="botonClaro" id="btnCopiar">Copiar</button>`; */
        
       
    }
    
    

   /* textoFallido.parentNode.removeChild(textoFallido) */
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



/*   const observer= new MutationObserver(() =>{
    const btnPcopiar= document.getElementById('btnCopiar');
    if (btnPcopiar){
        btnPcopiar.addEventListener('click', () => {
            console.log("contador3")
        })
        observer.disconnect();
    }
});
observer.observe(document.body, { childList: true });
 */
/* function copyText (htmlElement){
    if(!htmlElement){
        return;
    }

    let elementText= htmlElement.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    const contenido=inputElement;
    const cb=navigator.clipboard;
    cb.writeText(contenido.value)
    console.log(cb)
    inputElement.select();
    document.execCommand('copy');
   inputElement.parentNode.removeChild(inputElement);

} */
/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */