var google;

function initMap() {
    // 1. Координаты твоей локации (Тбилиси, Мариам Цалкаманидзе)
    // Если точка будет немного не там, ты можешь легко изменить эти цифры
    var myLocation = new google.maps.LatLng(41.72187210215934, 44.897606310439414);

    // 2. Настройки карты
    var mapOptions = {
        zoom: 15, // Масштаб (можешь сделать 14 для отдаления или 16 для приближения)
        center: myLocation,
        scrollwheel: false, // Отключает случайный зум при прокрутке страницы колесиком
        mapTypeControl: false,
        streetViewControl: false, // Убираем лишнего человечка с карты
        styles: [
            // Делаем карту чуть более минималистичной, чтобы подходила под дизайн
            { featureType: "administrative", elementType: "labels.text.fill", stylers: [{ color: "#444444" }] },
            { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] },
            { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
            { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] },
            { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] }
        ]
    };

    // 3. Создаем саму карту в блоке с id="map"
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    // 4. Добавляем маркер на нашу точку
    var marker = new google.maps.Marker({
        position: myLocation,
        map: map,
        title: 'GeziO Office'
        // Если хочешь использовать свою иконку маркера (раскомментируй строку ниже)
        // icon: 'images/loc.png' 
    });
}

// Запускаем инициализацию при загрузке страницы
google.maps.event.addDomListener(window, 'load', initMap);