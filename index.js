const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navBarList');
    const navLinks= document.querySelectorAll('.navBarList li');
    const mainPage = document.querySelector('.mainHomePage');
burger.addEventListener('click', () =>{
    nav.classList.toggle('nav-active')
    mainPage.classList.toggle('removeMainText')
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ""
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
    burger.classList.toggle('toggle');   
});
}
navSlide();
