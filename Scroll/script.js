console.log('Javascript is running')

const sectionList = document.querySelectorAll('section')

window.onscroll = () => {
    sectionList.forEach((el) => {
        let top = window.scrollY
        let offset = el.offsetTop - 150
        let height = el.offsetHeight
         
        console.log({top: top,  sectionTop: el.offsetTop, sectionHeight: el.offsetHeight})

        if(top >= offset && top < offset + height) {
              el.classList.add('show-animate')
        } else {
            el.classList.remove('show-animate')
        }
    })
}