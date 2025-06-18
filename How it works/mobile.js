document.addEventListener('DOMContentLoaded', () => {
    //bind buttons to their respective actions
    const artistButton = document.querySelector('.artist');
    const buyerButton = document.querySelector('.buyer');

    //get all related elements
    const artistElement = document.querySelectorAll('.step-title-left, .step-artist');
    const buyerElement = document.querySelectorAll('.step-title-right, .step-buyer');

    function hideElements(elements) {
        elements.forEach(element => {
            element.classList.add('hidden');
        });
    }

    function showElements(elements) {
        elements.forEach(element => {
            element.classList.remove('hidden');
        });
    }


    function isMobile() {
        return window.innerWidth <= 768;
    }

    function autoTriggerArtist(){
        if (isMobile()) {
            hideElements(buyerElement);
            showElements(artistElement);
        } else {
            showElements(artistElement);
            showElements(buyerElement);
            showElements(document.querySelectorAll(".step-img-4")); 
        }
    }

    artistButton.addEventListener('click', () => {
        if (!isMobile()) {
            return; // Do nothing if not on mobile
        }
        hideElements(buyerElement);
        showElements(artistElement);
    });
    buyerButton.addEventListener('click', () => {
        if (!isMobile()) {
            return; // Do nothing if not on mobile
        }
        hideElements(artistElement);
        hideElements(document.querySelectorAll(".step-img-4"));
        showElements(buyerElement);
    });

    autoTriggerArtist();

    window.addEventListener('resize', () => {
        autoTriggerArtist();
    });
});