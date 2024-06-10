document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    
    const sectionPaddingMap = {
        'featuredArtists': 20, 
         'search-bar': 50,
    };

    navbarToggle.addEventListener('click', function() {
        navbarMenu.classList.toggle('navbar__menu--open');

        if (navbarMenu.classList.contains('navbar__menu--open')) {
            // Loop through the section padding map
            for (const sectionId in sectionPaddingMap) {
                if (sectionPaddingMap.hasOwnProperty(sectionId)) {
                    const section = document.getElementById(sectionId);
                    const paddingAdjustment = sectionPaddingMap[sectionId];
                    if (section) {
                        section.style.paddingTop = paddingAdjustment + 'px';
                    }
                }
            }
        } else {  
            for (const sectionId in sectionPaddingMap) {
                if (sectionPaddingMap.hasOwnProperty(sectionId)) {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.style.paddingTop = '0';
                    }
                }
            }
        }
    });

    const featuredArtists = document.querySelector('.featuredArtists');
    const artistsWrapper = document.querySelector('.artists-wrapper');
    let scrollAmount = 0;

    function updateScroll() {
        if (scrollAmount !== 0) {
            artistsWrapper.scrollLeft += scrollAmount;
            requestAnimationFrame(updateScroll);
        }
    }

    featuredArtists.addEventListener('mousemove', (event) => {
        const containerWidth = featuredArtists.offsetWidth;
        const mouseX = event.clientX - featuredArtists.offsetLeft;
        const maxScroll = artistsWrapper.scrollWidth - containerWidth;
        const scrollSpeed = 2;

        if (mouseX < 100) {
            scrollAmount = -scrollSpeed;
        } else if (mouseX > containerWidth - 100) {
            scrollAmount = scrollSpeed;
        } else {
            scrollAmount = 0;
        }

        updateScroll();
    });
});