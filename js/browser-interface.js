var apiKey = require("./../.env").apiKey;

$(document).ready(function() {
  $("form#searchForm").submit(function(event) {
    var userName = $("#inputSearch").val();
    console.log(username);

    exports.getRepos = function(){
      $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
        console.log(response);
      }).fail(function(error){
        console.log(error.responseJSON.message);
      });
    };
  });
});
