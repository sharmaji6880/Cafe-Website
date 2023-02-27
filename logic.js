const nav_links = document.querySelectorAll(".nav_link");
nav_links.forEach((x)=> {
    x.addEventListener('click',toggleClass);
})

function toggleClass() {
    nav_links.forEach(x => {
        x.classList.remove('active');
        this.classList.add('active');
    })
}