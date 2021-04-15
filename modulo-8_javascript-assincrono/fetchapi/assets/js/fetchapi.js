//Exemplo de como usar fetch
/* fetch('pagina1.html').then(response =>{
    if (response.status !== 200) throw new Error('File not found 404');
    return response.text();
})
.then(res => console.log(res))
.catch(e => console.error(e)); */

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// Promise
/* function carregaPagina(el){
    const href = el.getAttribute('href');
    fetch(href).then(response => response.text())
    .then(res => carregaResultado(res))
    .catch(e => console.error(e));
} */

// Async / Await
async function carregaPagina(el){
    const href = el.getAttribute('href');
    try {

        const response = await fetch(href);
        if (response.status !== 200) throw new Error('File not found 404');
        carregaResultado( await response.text());

    } catch (e) {
        console.error(e)
    }
    
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}