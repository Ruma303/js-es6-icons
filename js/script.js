const select = document.querySelector('#select');
const mainContainer = document.querySelector('.main-container');
const card = document.querySelector('.card');
const option = document.querySelectorAll('option');

const data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Creazione card per le ogni oggetto
data.forEach((element) => {
    //Creazione del div
    const eleBox = document.createElement('div');
    eleBox.classList.add('card');
    mainContainer.append(eleBox);

    //Creazione icone in ogni box
    const eleIco = document.createElement('i');
    //aggiorno le classi del tag i aggiungendo le classi delle icone
    eleIco.className = `fa-solid ${element.prefix}${element.name}`
    eleIco.style = `color:${element.color}` //Colore per ogni icona
    eleBox.append(eleIco); //appendo il tag i al container genitore
    
    //creare il nome per ogni icona
    const eleTitle = document.createElement('h3');
    eleTitle.innerHTML = `${element.name}`
    eleBox.append(eleTitle);

    // nascondere tutte le celle
    // eleBox.classList.add('hidden');
    }
);

//Visualizza solo le icone per tipo

//prova a creare altri 3 array con filter, e in base all'opzione scelta col click dai la classe visible alle cards
const typeAll = [], typeAnimal = [], typeVegetable = [], typeUser = [];

//Creo l'array per tutti gli elementi basati solo sul tipo
data.forEach((element) => {
    typeAll.push(element.type);
    }
);
console.log(typeAll);

//Pushare type diversi dentro array diverse
for (let i = 0; i < data.length; i++) {
    if (data[i].type == 'animal') {
        typeAnimal.push(data[i].type);
    } else if (data[i].type == 'vegetable') {
        typeVegetable.push(data[i].type);
    } else if (data[i].type == 'user') {
        typeUser.push(data[i].type);
    }
};
console.log(typeAnimal);
console.log(typeVegetable);
console.log(typeUser);


//Mostrare le icone con i value del select
select.addEventListener('click', function() {
        let eleType = option.values;

        for (let i = 0; i < typeAll.length; i++) {
        if (typeAll[i] == eleType) {
            typeAll[i].classList.remove('hidden');
            typeAnimal[i].classList.add('hidden');
            typeVegetable[i].classList.add('hidden');
            typeUser[i].classList.add('hidden');
        } else if (typeAnimal[i] == eleType) {
            typeAnimal[i].classList.remove('hidden');
            typeAll[i].classList.add('hidden');
            typeVegetable[i].classList.add('hidden');
            typeUser[i].classList.add('hidden');
        } else if (typeVegetable[i] == eleType) {
            typeVegetable[i].classList.remove('hidden');
            typeAll[i].classList.add('hidden');
            typeAnimal[i].classList.add('hidden');
            typeUser[i].classList.add('hidden');
        } else if (typeUser[i] == eleType) {
            typeUser[i].classList.remove('hidden');
            typeAll[i].classList.add('hidden');
            typeAnimal[i].classList.add('hidden');
            typeVegetable[i].classList.add('hidden');
            }
        }
    }
);






    


// data.forEach((element.type == eleType)
//     if (eleType == 'All') {

//     }
// )
// //numero di cards variabile per tipo selezionato
