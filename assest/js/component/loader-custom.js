class loaderCustom extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){

		this.attachShadow({mode : 'open'});
		this.shadowRoot.innerHTML = `
			<div class="loader"></div>
			<style>
				.loader {
				  border: 16px solid #f3f3f3;
				  border-radius: 50%;
				  border-top: 16px solid black;
				  border-bottom: 16px solid blue;
				  width: 60px;
				  height: 60px;
				  margin:auto;
				  -webkit-animation: spin 2s linear infinite;
				  animation: spin 2s linear infinite;
				}

				@-webkit-keyframes spin {
				  0% { -webkit-transform: rotate(0deg); }
				  100% { -webkit-transform: rotate(360deg); }
				}

				@keyframes spin {
				  0% { transform: rotate(0deg); }
				  100% { transform: rotate(360deg); }
				}
				.hide{
					display : none;
				}
			</style>`;
	}
}



customElements.define('loader-custom',loaderCustom);