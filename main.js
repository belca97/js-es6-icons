const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'Animali',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'Vegetali',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'Vegetali',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'Vegetali',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'Vegetali',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'Utente',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'Utente',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'Utente',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'Utente',
		family: 'fas',
		color: 'purple'
	}
];

// faccio riferimento all'id container dell'html
const container = document.getElementById('container-icons');



//creo la funzione putIcons per creare le icone con colori e figure giuste
function putIcons(container, icons){

    let content = '';

    // uso il ciclo forEach per ciclare tutto il mio array e 
    //prendere le chiavi per la sintassi delle icone e le chiavi per il testo

    icons.forEach(elemento => {

        content +=`<div class="icons">
                    <i style="color:${elemento.color}" class="${elemento.family} ${elemento.prefix}${elemento.name}"></i>
                    <div class="icons-text">${elemento.name}</div>
                </div>`
        
    });

    container.innerHTML = content;

    console.log(content);
}

//faccio riferimento al selettore presente nell'html

const selettori = document.getElementById('type-filter');

putIcons(container, icons)

// creo una funzione che mi consenta di filtrare le varie card a seconda del loro tipo
selettori.addEventListener('change', function(){

    let opzioni = this.value;
    if(opzioni == ""){
        putIcons(container, icons)
    } else{

        //uso la funzione filter per filtrare i valori di cui ho bisogno
        const filtraggio = icons.filter(icons => {
            if (icons.type == opzioni){
                return true;
            } 

            return false;
            
        })

        putIcons(container, filtraggio)
    }

})