class provinceCustom extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.innerHTML = `
			<label>${this.getAttribute('name')}</label>
			<div>
				<div class="bar-confirmed">${this.getAttribute('confirmed')} Confirmed</div>
				<div class="bar-active">${this.getAttribute('active')} Active</div>
				<div class="bar-deaths">${this.getAttribute('deaths')} Deaths</div>
			</div>
		`;
	}
}


customElements.define('province-custom',provinceCustom);