var $gridshepard = $('.grid-shepard').imagesLoaded(function() {
    $gridshepard.isotope({
        itemSelector: '.grid-item-shepard',
        layoutMode: 'fitRows',
        percentPosition: true,
    });
});

var $grid = $('.grid-cane').imagesLoaded(function() {
    $grid.isotope({
        itemSelector: '.grid-item-cane',
        layoutMode: 'fitRows',
        percentPosition: true,
    });
});

var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};

$('.filters-button-group-shepard').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $gridshepard.isotope({ filter: filterValue });
});

$('.button-group-shepard').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

$('.filters-button-group-cane').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({ filter: filterValue });
});

$('.button-group-cane').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// Gallery

$("[data-fancybox]").fancybox({
    animationEffect: "zoom-in-out",
    loop: true,
    thumbs: {
        autoStart: true
    }
});