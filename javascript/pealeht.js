// autor: Beyond Fireship (Youtube)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            // Asendab kõik "boxes-hidden", mis on näha, ära "boxes-showing"
            entry.target.classList.add('boxes-showing');
        } else {
            // Muudab jälle selle kasti peidetuks
            entry.target.classList.remove('boxes-showing');
        }
    });
});

// Valib kõik HTML-i elemendid, mille klass on "boxes-hidden"
const hiddenElements = document.querySelectorAll('.boxes-hidden');
hiddenElements.forEach((el) => observer.observe(el))