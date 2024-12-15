document.addEventListener('DOMContentLoaded', function() {
    const sliderInner = document.querySelector('.event-slider-inner');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    if (!arrowLeft || !arrowRight || !sliderInner) {
        return;
    }
    
    const events = document.querySelectorAll('.event');
    const totalEvents = events.length;

    const eventsPerView = 3;
    const totalPages = Math.ceil(totalEvents / eventsPerView);

    let currentIndex = 0;

    function updateSliderPosition() {
        const translateX = -(currentIndex * 100);
        sliderInner.style.transform = `translateX(${translateX}%)`;
    }

    arrowLeft.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalPages) % totalPages;
        updateSliderPosition();
    });

    arrowRight.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalPages;
        updateSliderPosition();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-tab');
            tabLinks.forEach(l => l.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            const activePane = document.getElementById(target);
            if(activePane) {
                activePane.classList.add('active');
            }
        });
    });
});


