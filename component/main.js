const nav = document.querySelector('.Navbar')
const underline = document.querySelector('.Navbar .underline')
const links = document.querySelectorAll('.Navbar a')

const Mouvement = (el)=>{
      underline.style.width = el.offsetWidth + 'px'
      underline.style.left = el.offsetLeft + 'px'
}

links.forEach(link => {
      link.addEventListener('click', e => {
            e.preventDefault()
            links.forEach(l => l.classList.remove('active'))
            link.classList.add('active')
            Mouvement(link)
      })
})
Mouvement(document.querySelector('nav a.active'))

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});