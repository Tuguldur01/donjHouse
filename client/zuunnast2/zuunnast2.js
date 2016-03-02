Template.zuunnast2.onRendered(function () {
    $(document).ready(function(){
        $('.parallax').parallax();
    });

    $(document).ready(function(){
        $('.slider').slider({
            full_width: true,
            height:500
        });
    });
    $(document).ready(function(){
        $('.materialboxed').materialbox();
    });
});
Template.zuunnast2.helpers({
    zuunnast2bairshil: function() {
        // Make sure the maps API has loaded
        if (GoogleMaps.loaded()) {
            // Map initialization options
            return {
                center: new google.maps.LatLng(48.023639, 106.921263),
                zoom: 16,
                scrollwheel: false,
                mapTypeId: google.maps.MapTypeId.SATELLITE
            };
        }
    }
});

Template.zuunnast2.onCreated(function() {
    // We can use the `ready` callback to interact with the map API once the map is ready.
    GoogleMaps.ready('zuunNast', function(map) {
        // Add a marker to the map once it's ready
        var marker = new google.maps.Marker({
            position: map.options.center,
            map: map.instance,
            title:"Зуун наст 2 хотхон - Донж Хаус"
        });
    });
});