// BS JS Carousels v5.1.3

var myCarousel = document.querySelector('#myCarousel');

var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
});

// BS JS Tooltips v5.1.3

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// BS JS Popovers v5.1.3

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
});

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })

