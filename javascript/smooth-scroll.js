// chatgpt loodud
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Takistab vaikekäitumist (nt kohe hüppamist)

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth', // Sujuv kerimine
                block: 'start' // Alustab sektsiooni algusest
            });
        }
    });
});