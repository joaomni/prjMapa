// This is a JavaScript file

$(document).on('click', '#btnMapa', function(){
  $("#terra").fadeOut(0);
  $("#mstMapa").fadeIn(200);
  $("#btnMapa").css("display","none");
  $("#btnMapa2").css("display","block");
});

$(document).on('click', '#btnMapa2', function(){
  $("#terra").fadeIn(200);
  $("#mstMapa").fadeOut(0);
  $("#btnMapa").css("display","block");
  $("#btnMapa2").css("display","none");
});