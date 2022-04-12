import img from '../../img/medical-research.png'
class homeCustom extends HTMLElement{
	constructor(){
		super();
	}

	connectedCallback(){
		this.innerHTML = `<div>
			<section>
				<h1>
					Ayo !!,
					<p>
					'Cari Info Tentang Covid 19 Di Seluruh Dunia'
					</p>
				</h1>

				<h4>
					Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. Penyakit akibat infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.
				</h4>
			</section>
			<img src="${img}"/>
		</div>`
	}
}



customElements.define('home-custom',homeCustom);