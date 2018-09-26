var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(-37.808846, 144.963435)
};
map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);


var pinz = [
    {
        'location': {
            'lat': -37.807817,
            'lon': 144.958377
        },
        'lable': 2
    },
    {
        'location': {
            'lat': -37.807885,
            'lon': 144.965415
        },
        'lable': 42
    },
    {
        'location': {
            'lat': -37.811377,
            'lon': 144.956596
        },
        'lable': 87
    },
    {
        'location': {
            'lat': -37.811293,
            'lon': 144.962883
        },
        'lable': 145
    },
    {
        'location': {
            'lat': -37.808089,
            'lon': 144.962089
        },
        'lable': 999
    },
];



for (var i = 0; i <= pinz.length; i++) {
    var image = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2238%22%20height%3D%2238%22%20viewBox%3D%220%200%2038%2038%22%3E%3Cpath%20fill%3D%22%23808080%22%20stroke%3D%22%23ccc%22%20stroke-width%3D%22.5%22%20d%3D%22M34.305%2016.234c0%208.83-15.148%2019.158-15.148%2019.158S3.507%2025.065%203.507%2016.1c0-8.505%206.894-14.304%2015.4-14.304%208.504%200%2015.398%205.933%2015.398%2014.438z%22%2F%3E%3Ctext%20transform%3D%22translate%2819%2018.5%29%22%20fill%3D%22%23fff%22%20style%3D%22font-family%3A%20Arial%2C%20sans-serif%3Bfont-weight%3Abold%3Btext-align%3Acenter%3B%22%20font-size%3D%2212%22%20text-anchor%3D%22middle%22%3E' + pinz[i].lable + '%3C%2Ftext%3E%3C%2Fsvg%3E';


    var myLatLng = new google.maps.LatLng(pinz[i].location.lat, pinz[i].location.lon);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}