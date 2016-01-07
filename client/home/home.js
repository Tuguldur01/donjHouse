Template.content.onRendered(function () {
    $(document).ready(function(){
        $('.parallax').parallax();
    });
});


Template.sliderTemplate.onRendered(function () {
    $(document).ready(function(){
        $('.slider').slider({full_width: true});
    });
});