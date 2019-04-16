// This is a JavaScript file

$(document).on('click', '#btnMapa', function(){
  $("#terra").fadeOut(0);
  $("#mstMapa").fadeIn(200);
  $("#btnMapa").css("display","none");
  //$("#btnMapa2").css("display","block");


  function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.NONE]     = 'Sem conexão';

    alert(states[networkState]);
  }

  function mapa(position){
      L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

      var map = L.mapquest.map('map', {
      center: [position.coords.latitude, position.coords.longitude],
      layers: L.mapquest.tileLayer('map'),
      zoom: 16
      });

      map.addControl(L.mapquest.control());
    };
    navigator.geolocation.getCurrentPosition(mapa);

});