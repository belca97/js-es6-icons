const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'cat',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'crow',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'dog',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'dove',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'dragon',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'horse',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'hippo',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'fish',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'carrot',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'apple-alt',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'lemon',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'pepper-hot',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user-astronaut',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user-graduate',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user-ninja',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user-secret',
		family: 'fas',
		color: 'purple'
	}
];

// faccio riferimento all'id container dell'html
const container = document.getElementById('container-icons');
// uso la funzione putIcons per creare le icone con colori e figure giuste
putIcons(container, icons)

function putIcons(container, icons){

    let content = '';

    // uso il ciclo forEach per iniettare le mie icone all'interno dell'html facendo riferimento all'array icons

    icons.forEach(elemento => {

        content +=`<div class="icons">
                    <i style="color:${elemento.color}" class="${elemento.family} ${elemento.prefix}${elemento.type}"></i>
                    <div class="icons-text">${elemento.name}</div>
                </div>`
        
    });

    container.innerHTML = content;

    console.log(content)
}