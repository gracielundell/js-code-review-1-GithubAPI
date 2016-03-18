var apiKey = require("./../.env").apiKey;
var time = require("./../js/timeSince.js").timeSince;

$(document).ready(function() {
  $(".userInfo").hide();
  $("form#searchForm").submit(function(event) {
    var userName = $("#inputSearch").val();
    // get username
    $.get('https://api.github.com/users/' + userName +
     '/repos?access_token=' + apiKey).then(function(response){

       console.log(response);

      $("#userName").append('<span>' + response[0].owner.login + '</span>');
      $("#userImg").append('<img src='+ response[0].owner.avatar_url+'>');
      // get userAvatar
      $.get('https://api.github.com/users/' + userName + '/followers?access_token=' + apiKey).then(function(response){
        // get userRepos
        $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
          for (i = 0; i < response.length; i ++) {
            $(".postedRepos").append("<ul><li>Repository Name: " + response[i].name + "Date Created: " + response[i].created_at + "</li></ul>");
            console.log("repo name: " + response[i].name + " date created: " + response[i].created_at);
          }; // end for-loop
        }); // end getRepos
      });
    });
    $(".userInfo").show();
    event.preventDefault();
  });
});
