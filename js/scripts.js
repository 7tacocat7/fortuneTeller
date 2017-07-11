$(document).ready(function(){

  var unluckyItems = [];
  var luckyItems =[];
  $("form#fortune").submit(function(event){
    event.preventDefault();
    $("#unluckyEvent").show();

    $("input:checkbox[name=unluckyEvent]:checked").each(function(){
      var unluckyFortune= $(this).val();
      unluckyItems.push(unluckyFortune);
      $('#unluckyEvent').append("<br>" + unluckyFortune + "<br>");

    });

    if (unluckyItems.length <= 3) {
      alert("You are only a little bit unlucky!!!!");
    }
    else if(unluckyItems.length > 3){
        alert("You are totally fucked");
    }
    // for ( var index = 0; index < unluckyItems.length; index += 1) {
    //
    // }
    $("#luckyEvent").show();

    $("input:checkbox[name=luckyEvent]:checked").each(function(){
      var luckyFortune = $(this).val();
      luckyItems.push(luckyFortune);
      $('#luckyEvent').append("<br>" +luckyFortune + "<br>");
    });
    if (luckyItems.length <= 3) {
      alert("You are only a little bit unlucky!!!!");
    }
  });
});
