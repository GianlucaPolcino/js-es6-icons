const objects = [
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

const container = document.querySelector('.gp-container-main');
let typeSelect = document.querySelector('.form-selected');

const animals = objects.filter((icon) =>{
	if(icon.type === 'animal'){
		return true;
	}
	return false;
});

const vegetable = objects.filter((icon) =>{
	if(icon.type === 'vegetable'){
		return true;
	}
	return false;
});

const user = objects.filter((icon) =>{
	if(icon.type === 'user'){
		return true;
	}
	return false;
});

console.log(animals);
console.log(vegetable);
console.log(user);

objects.forEach((element) =>
		{
			container.innerHTML += `
			<div class="gp-card rounded-3 shadow m-2">
				   <div class="d-flex justify-content-center align-items-center py-3">
						<i class="${element.family} ${element.prefix}${element.name} gp-${element.color} gp-icon"></i>
				   </div>
				   <div class="d-flex justify-content-center align-items-center py-2">
						<h5 class="fw-bold text-uppercase">${element.name}</h5>
				   </div>
			   </div>
			`
		
		});

typeSelect.onchange = (event) => {
	let inputText = event.target.value;
	console.log(inputText);

	if(inputText == 1){
		container.innerHTML ='';
		objects.forEach((element) =>
		{
			container.innerHTML += `
			<div class="gp-card rounded-3 shadow m-2">
				   <div class="d-flex justify-content-center align-items-center py-3">
						<i class="${element.family} ${element.prefix}${element.name} gp-${element.color} gp-icon"></i>
				   </div>
				   <div class="d-flex justify-content-center align-items-center py-2">
						<h5 class="fw-bold text-uppercase">${element.name}</h5>
				   </div>
			   </div>
			`
		
		});
	}else if(inputText == 2){
		container.innerHTML ='';
		animals.forEach((element) =>
		{
			container.innerHTML += `
			<div class="gp-card rounded-3 shadow m-2">
				   <div class="d-flex justify-content-center align-items-center py-3">
						<i class="${element.family} ${element.prefix}${element.name} gp-${element.color} gp-icon"></i>
				   </div>
				   <div class="d-flex justify-content-center align-items-center py-2">
						<h5 class="fw-bold text-uppercase">${element.name}</h5>
				   </div>
			   </div>
			`
		
		});
	}else if(inputText == 3){
		container.innerHTML ='';
		vegetable.forEach((element) =>
		{
			container.innerHTML += `
			<div class="gp-card rounded-3 shadow m-2">
				   <div class="d-flex justify-content-center align-items-center py-3">
						<i class="${element.family} ${element.prefix}${element.name} gp-${element.color} gp-icon"></i>
				   </div>
				   <div class="d-flex justify-content-center align-items-center py-2">
						<h5 class="fw-bold text-uppercase">${element.name}</h5>
				   </div>
			   </div>
			`
		
		});
	}else if(inputText == 4){
		container.innerHTML ='';
		user.forEach((element) =>
		{
			container.innerHTML += `
			<div class="gp-card rounded-3 shadow m-2">
				   <div class="d-flex justify-content-center align-items-center py-3">
						<i class="${element.family} ${element.prefix}${element.name} gp-${element.color} gp-icon"></i>
				   </div>
				   <div class="d-flex justify-content-center align-items-center py-2">
						<h5 class="fw-bold text-uppercase">${element.name}</h5>
				   </div>
			   </div>
			`
		
		});
	}
};




