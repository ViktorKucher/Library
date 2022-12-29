let headerBurger = document.querySelector('.header_burger');
headerBurger.addEventListener('click',function(){
	document.querySelector('.header_burger').classList.toggle('active');
	document.querySelector('.header_menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
})
let headerLink = document.querySelectorAll('.header_link');
for(let i of headerLink){
	i.addEventListener('click',function(){
		document.querySelector('.header_burger').classList.remove('active');
		document.querySelector('.header_menu').classList.remove('active');
		document.querySelector('body').classList.remove('lock');
	})
}



const menuLinks = document.querySelectorAll('.header_link[data-goto]');
menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
});
function onMenuLinkClick(e){
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}
