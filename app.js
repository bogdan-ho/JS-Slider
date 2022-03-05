 const slides = document.querySelectorAll('.slide');
// создаем переменную slide из массива slides в каждой итерации
 for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
 }

 function clearActiveClasses() {
     slides.forEach((slide) => {
        slide.classList.remove('active')
     })
 }