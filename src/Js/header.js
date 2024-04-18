if (window.innerWidth <= 768) { // Si la largeur de l'écran est inférieure ou égale à 768 pixels (taille d'un périphérique mobile)
    document.addEventListener('DOMContentLoaded', function() {
        var actualLink = document.getElementById('actual');
        var navContainer = document.querySelector('.navigation');
    
        actualLink.addEventListener('click', function(event) {
            event.preventDefault(); // Empêche le comportement par défaut du lien
            var containerWidth = navContainer.offsetWidth;
            var scrollLeft = actualLink.offsetLeft - (containerWidth - actualLink.offsetWidth) / 2;
            navContainer.scrollLeft = scrollLeft;
        });
    });
}