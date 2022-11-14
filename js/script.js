const eleSelect = document.querySelector('#select');
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

renderIcons(data, mainContainer); //parametri in quanto voglio riutilizzare la funzione
populateSelect(data, eleSelect); 
randomizeColor(data);
hexaFunction(data);


//Mostrare le icone con i value del select
eleSelect.addEventListener('change', function()  {
	const selectedType = this.value;
	//filtrare array
	if (selectedType!== ''){
		arrIconsFiltered = arrFiltrato.filter(element => element.type === selectedType)
	} else {
		arrIconsFiltered = data;
	}
	console.log(arrIconsFiltered)
	//renderizzo array icone filtrate
	renderIcons(arrIconsFiltered, mainContainer)
})
//Creazione card per le ogni oggetto
function renderIcons(arrData, mainContainer){
	// mainContainer.innerHTML = '';
	arrData.forEach(element => 
		{
    //Creazione del div
    const eleBox = document.createElement('div');
    eleBox.classList.add('card');
    mainContainer.append(eleBox);

    //Creazione icone in ogni box
    const eleIco = document.createElement('i');
    //aggiorno le classi del tag i aggiungendo le classi delle icone
    eleIco.className = `${element.family} ${element.prefix}${element.name}`
    eleBox.append(eleIco); //appendo il tag i al container genitore
    
    //creare il nome per ogni icona
    const eleTitle = document.createElement('h3');
    eleTitle.innerHTML = `${element.name}`
    eleBox.append(eleTitle);
    }
)};

//BONUS 1 colori random per ogni icona
function randomizeColor(data) {
	data.forEach(objIcon => objIcon.color = hexaFunction());
}


//Creazione numeri e lettere
function hexaFunction() {
	const chars='O123456789ABCDEF';
	let color = '#';
	for (let i=0; i<6; i++) {
		color += chars[getRandom(0,15)];
	}
	return color;}

//Crea un codice hex per ogni elemento, non devi cambiare il color originale
function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min  + 1)) + min;
}

	/*const randomNumber = [];
	let hexNum = '';
	for (let i=0; i<6; i++) {
		hexNum = getRandom(0, 15) //genera numero da 0 a 15
		 if (hexNum <10) { //se da 0 a 9, lo pusha nell'array
			randomNumber.push(hexNum);
		} else if (hexNum == 10 ){ //dal 10 al 15 prima cambia
			hexNum = 'A'; randomNumber.push(hexNum);
		} else if (hexNum == 11 ){
			hexNum = 'B'; randomNumber.push(hexNum);
		} else if (hexNum == 12 ){
			hexNum = 'C'; randomNumber.push(hexNum);
		} else if (hexNum == 13 ){
			hexNum = 'D'; randomNumber.push(hexNum);
		} else if (hexNum == 14 ){
			hexNum = 'E'; randomNumber.push(hexNum);
		} else if (hexNum == 15 ){
			hexNum = 'F'; randomNumber.push(hexNum);
		}
	} 
	const hexacode = `#${randomNumber.join("")}`;  //creo la stringa hexacode
	console.log(hexacode)*/




//Creo un'array per ogni tipo di elementi trovati nell'oggetto
function populateSelect(data, eleSelect) {
	const arrTypes = []//popoliamo l'array per ogni tipo di obj che troviamo dinamicamente
	//se il tipo NON è incluso, pushiamo
	data.forEach(element => arrTypes.includes(element.type) ? '' : arrTypes.push(element.type));
	console.log(arrTypes)

	//BONUS 2 aggiungere le option dinamicamente
	arrTypes.forEach(type => eleSelect.innerHTML += `<option value="${type}">${type}</option>`)
}


