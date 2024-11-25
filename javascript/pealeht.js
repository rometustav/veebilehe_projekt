// autor: Beyond Fireship (Youtube)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('boxes-showing');
        } else {
            entry.target.classList.remove('boxes-showing');
        }
    });
});

const hiddenElements = document.querySelectorAll('.boxes-hidden');
hiddenElements.forEach((el) => observer.observe(el))