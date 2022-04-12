class headerCustom extends HTMLElement{
	constructor(){
		super();
		this.API = require('../API/CovidAPI.js');
	}

	connectedCallback(){
		this.innerHTML = `
			<div>
				<h3>
					<i class="fa-regular fa-envelope"></i>
					infoCovid-19
				</h3>
				<section id="infoCountries">
					<span>
						<i class="fa-regular fa-flag"></i>
						Countries : <i class='label'></i>
					</span>
					<span>
						<i class="fa-regular fa-calendar-check"></i>
						Confirmed : <i class='label'></i> People
					</span>
					<span>
						<i class="fa-regular fa-clipboard"></i>
						Recovered : <i class='label'></i> People
					</span>
					<span>
						<i class="fa-regular fa-circle-xmark"></i>
						Deaths : <i class='label'></i> People
					</span>
					
				</section>
				<section id="search">
					<i class="fa-regular fa-map"></i>
					<section id="autocomplete">
						<input type="text" placeholder="Cari Negara">
						<ul>
						</ul>
					</section>
				</section>
			</div>
		`;

		$(this).find('input,ul').focus(()=>{
			this.createListSearchCountries();
			$(this).find('ul').toggleClass('active')
			$(this).on('keyup',()=>{
				this.filterDataCountries($(this).find('input'),$(this).find('ul a'))
			})
		})
	}

	createListSearchCountries(){
		$(this).find('ul').empty();
		this.API.CovidAPI('countries')
			.then((data)=>{
				data.countries.forEach((e)=>{
					$(this).find('ul').append(`<a href="?country=${e.name}" class="country">${e.name}</a>`)
				})
			})
			.catch((error)=>{
				console.log(error)
			})
	}

	filterDataCountries(value,e){
		const valueInput = value.val().toLowerCase();
		e.filter((i)=>{
			$(e[i]).toggle($(e[i]).text().toLowerCase().indexOf(valueInput) > -1)
		})
	}

}


customElements.define('header-custom',headerCustom);