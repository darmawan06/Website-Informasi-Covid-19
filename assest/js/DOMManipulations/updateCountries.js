const updateCountries = ()=>{
	let API = require('../API/CovidAPI.js');

	const onClickCountry = (country)=>{
		API.CovidAPI(`countries/${country}`).then((data)=>{
		
		const infoCountries = $('header-custom').find('section#infoCountries span i.label').get();
		infoCountries[0].innerText = country
		infoCountries[1].innerText = data.confirmed.value
		infoCountries[2].innerText = data.recovered.value
		infoCountries[3].innerText = data.deaths.value
		}).catch((error)=>{	
			console.log(error);
		})
	}

	const getParametersURL= ()=>{
		let searchParams = new URLSearchParams(window.location.search)
		searchParams.has('country');
		let country = searchParams.get('country')
		return country || 'australia'
	}
	onClickCountry(getParametersURL())
}

updateCountries();