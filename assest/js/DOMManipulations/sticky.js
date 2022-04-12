
const header = $('header-custom')[0]
const sticky = header.offsetTop;
window.onscroll = ()=>{
	if(window.pageYOffset > sticky){
		header.classList.add('sticky');
	}else{
		header.classList.remove('sticky');
	}
}