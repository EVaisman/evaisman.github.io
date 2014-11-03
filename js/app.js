$(document).ready(function() {

    var determineCurrentHeaderLink = function() {
        var currentPath = location.pathname;
        $('header .page-link').each(function(index, link){
            if (currentPath == '/') {
                $('.page-link.home-page').addClass('active');
            }
            else if ($(link).attr('href').match(currentPath)) {
                $(link).addClass('active')
            }
        });
    }

    determineCurrentHeaderLink();
});
