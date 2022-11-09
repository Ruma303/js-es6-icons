const select = document.querySelector('#select');
const mainContainer = document.querySelector('.main-container');
const card = document.querySelector('.card');
const option = document.querySelectorAll('option');
const randomNumber = [];
hexaFunction();
const hexacode = `#${randomNumber.join("")}`;
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


console.log(hexacode)
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
	eleIco.style.color = `${hexacode}` //Colore per ogni icona randomico
    eleBox.append(eleIco); //appendo il tag i al container genitore
    
    //creare il nome per ogni icona
    const eleTitle = document.createElement('h3');
    eleTitle.innerHTML = `${element.name}`
    eleBox.append(eleTitle);

    // nascondere tutte le celle
    // eleBox.classList.add('hidden');

    }
);

//Creo array per tipo
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
        let eleType = this.value;

        for (let i = 0; i < typeAll.length; i++) {
        if (eleType == typeAll[i]) {
            typeAll[i].classList.remove('hidden');
            // typeAnimal[i].classList.add('hidden');
            // typeVegetable[i].classList.add('hidden');
            // typeUser[i].classList.add('hidden');
			console.log('Hai selezionato All')
        } else if (eleType == 'Animal') {
            typeAnimal[i].classList.remove('hidden');
            typeAll[i].classList.add('hidden');
            typeVegetable[i].classList.add('hidden');
            typeUser[i].classList.add('hidden');
			console.log('Hai selezionato Animal')
        } else if (eleType == 'Vegetable') {
            typeVegetable[i].classList.remove('hidden');
            typeAll[i].classList.add('hidden');
            typeAnimal[i].classList.add('hidden');
            typeUser[i].classList.add('hidden');
			console.log('Hai selezionato Vegetable')
        } else if (eleType == 'User') {
            typeUser[i].classList.remove('hidden');
            typeAll[i].classList.add('hidden');
            typeAnimal[i].classList.add('hidden');
            typeVegetable[i].classList.add('hidden');
			console.log('Hai selezionato User')
            }
        }
    }
);

//BONUS 1
//Crea funzione genera numeri random da 0 a 15, ma devono andare da 0 a 9 e poi da A a F 

function getRandom(max, min) {
	return Math.floor(Math.random() * (max - min  + 1)) + 1;
}
function hexaFunction() {
//Creazione numeri e lettere
for (let i=0; i<6; i++) {
	let hexNum = getRandom(15, 0)
	if (hexNum <10) {
		randomNumber.push(getRandom(15, 0));
	} else  if (hexNum == 10 ){
		hexNum = 'A'; randomNumber.push(hexNum);
	} else  if (hexNum == 11 ){
		hexNum = 'B'; randomNumber.push(hexNum);
	} else  if (hexNum == 12 ){
		hexNum = 'C'; randomNumber.push(hexNum);
	} else  if (hexNum == 13 ){
		hexNum = 'D'; randomNumber.push(hexNum);
	} else  if (hexNum == 14 ){
		hexNum = 'E'; randomNumber.push(hexNum);
	} else  if (hexNum == 15 ){
		hexNum = 'F'; randomNumber.push(hexNum);
	}
}
}