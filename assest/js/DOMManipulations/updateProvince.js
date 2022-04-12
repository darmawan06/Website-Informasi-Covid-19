const updateProvince = ()=>{
	let API = require('../API/CovidAPI.js');

	const update = (country)=>{
		const loader = $('countries-covid').find('section div#item-province loader-custom');
		loader.show();
		API.CovidAPI(`countries/${country}/confirmed`).then((data)=>{
			loader.hide();
			for (let i in data){
				$('countries-covid')
				.find('section div#item-province')
				.append(`<province-custom name="${data[i].combinedKey}" confirmed="${data[i].confirmed}" active="${data[i].active}" deaths="${data[i].deaths}"></province-custom>`);
			}
			filterData();
		})
		.catch((error)=>{	
			console.log(error);
		})
	}
	
	const getParametersURL= ()=>{
		let searchParams = new URLSearchParams(window.location.search)
		searchParams.has('country');
		let country = searchParams.get('country')
		return country || 'australia'
	}

	const filterData = ()=>{
		let input = $('countries-covid').find('nav input');
		let item = $('province-custom');
		input.on('keyup',(e)=>{
			item.filter((i)=>{
				let name = item[i].getAttribute('name')
				$(item[i]).toggle(name.toLowerCase().indexOf(input.val().toLowerCase()) > -1)
			})
		})
	}

	update(getParametersURL());
}

updateProvince();