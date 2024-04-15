if (window.innerWidth <= 768) { // Si la largeur de l'écran est inférieure ou égale à 768 pixels (taille d'un périphérique mobile)
    document.addEventListener('DOMContentLoaded', function() {
        var navContainer = document.querySelector('.nav-container');
        var navItems = document.querySelectorAll('.nav-items li');
    
        navItems.forEach(function(navItem) {
            navItem.addEventListener('click', function() {
                // Centrer l'élément cliqué
                var containerWidth = navContainer.offsetWidth;
                var scrollLeft = navItem.offsetLeft - (containerWidth - navItem.offsetWidth) / 2;
                navContainer.scrollLeft = scrollLeft;
            });
        });
    });
}