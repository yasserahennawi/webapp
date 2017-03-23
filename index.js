
$.ajax({
    type: "GET",
    url: 'http://localhost:4567/api/users/login',
    success: function(data, status, xhr) {
        console.log(xhr.getResponseHeader('Location'));
    }
});

$(document).ready(function(){
  $("#submit").click(function(){
    var url = "http://localhost:4567/api/users/login";

    var success = function(data, status) {
      console.log("data", data);
      // window.location = 'http://localhost:4567';
    };

    var failure = function() {
      console.log("failure", arguments);
    }
    
    $.get({
      url: url,
      dataType: 'json',
    }).done(success)
      .fail(failure);
  });  
}); 

require('./style.scss');