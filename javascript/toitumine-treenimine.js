// Youtube: Coding Snow 
window.addEventListener('scroll', reveal);

// kontrollib, kas elemendid peaksid olema nähtavad
function reveal() {
    // Valib kõik HTML-i elemendid, mille klass on "reveal"
    var reveals = document.querySelectorAll('.reveal');

    // Käib läbi kõik valitud elemendid.
    for (var i = 0; i < reveals.length; i++) {
        // praeguse brauseriakna kõrgus (viewport'i)
        var windowHeight = window.innerHeight;

        // elemendi kaugus viewport'i ülemisest servast
        var revealTop = reveals[i].getBoundingClientRect().top;

        // Määratakse punkt, kui kaugel elemendi ülemine osa peab olema
        // akna alaosast, et klass active lisataks
        var revealPoint = 150;

        // Kui elemendi ülemine serv on nähtaval (vähem kui akna kõrgus - revealPoint),
        // lisatakse klass "active"
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            // Kui element on väljaspool nähtavat ala, eemaldatakse klass "active"
            reveals[i].classList.remove('active');
        }
    }
}