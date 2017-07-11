$(document).ready(function(){

  var unluckyItems = [];

  $("form#fortune").submit(function(event){
    event.preventDefault();
    $("#unluckyEvent").show();
    $("input:checkbox[name=unluckyEvent]:checked").each(function(){
      var unluckyFortune= $(this).val();
      unluckyItems.push(unluckyFortune);
      $('#unluckyEvent').prepend(unluckyFortune + "<br>");

    });

    if (unluckyItems.length <= 3) {
      alert("You are only a little bit unlucky!!!!")
    }
    // for ( var index = 0; index < unluckyItems.length; index += 1) {
    //
    // }
    $("#luckyEvent").show();
    $("input:checkbox[name=luckyEvent]:checked").each(function(){
      var luckyFortune = $(this).val();
      $('#unluckyEvent').append(luckyFortune + "<br>");
    });
  });
});
