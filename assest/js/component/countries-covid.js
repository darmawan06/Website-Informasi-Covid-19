class CountriesCovid extends HTMLElement{
	constructor(){
		super();
	}
	connectedCallback(){
		this.innerHTML = `
			<section>
				<h3>Province State</h3>
				<nav>
					<a>
						<i class="fa-regular fa-map"></i>
						<input type="text" name="SearchProvince" placeholder="Search Province">
					</a>
				</nav>
				<div id="item-province">
					<loader-custom></loader-custom>
				</div>

			</section>
		`;
	}
}


customElements.define('countries-covid',CountriesCovid);