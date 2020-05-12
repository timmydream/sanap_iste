$(document).ready(function(){
  $("#subm").click(function () {
    $(this).val("Заявка принята!");
  });
});

var resourceContent = "";
var res = [];

$('form').submit(function(e){
	e.preventDefault();
	$.ajax({
    url:'https://api.telegram.org/bot' + res[0] + '/sendMessage',
    method:'POST',
    data:{chat_id:res[1],text:$('#name').val() + "\n" + "Номер: " + $('#number').val() + "\n" + "Почта: " + $('#mail').val() + "\n" + "Коммент: " + $('#comment').val()},
    success:function(){
      console.log('msg sent');
    }
  });
});


