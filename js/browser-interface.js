var apiKey = require("./../.env").apiKey;
var timeSince = require("./../js/timeSince.js").timeSince;

$(document).ready(function() {
  $(".userInfo").hide();
  $("form#searchForm").submit(function(event) {
    $("#inputSearch").empty();
    var userName = $("#inputSearch").val();
    // get username
    $("#userImg").empty();
    $.get('https://api.github.com/users/' + userName +
     '/repos?access_token=' + apiKey).then(function(response){
      $("#userName").html('<span>' + response[0].owner.login + '</span>');
      // get userAvatar
      $("#userImg").append('<img src='+ response[0].owner.avatar_url+'>');
      $.get('https://api.github.com/users/' + userName + '/followers?access_token=' + apiKey).then(function(response){
        // get userRepos
        $(".postedRepos").empty();
        $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
          for (i = 0; i < response.length; i ++) {
            var postDate = response[i].created_at;
            var postTitle = response[i].name;
            $(".postedRepos").append("<li><strong> Repository Name: </strong>" + postTitle + "<br><strong>Date Created: </strong>" + moment().format("LL", postDate) + "</li><br><br>");
          }; // end for-loop
        }); // end getRepos
      });
    });
    $(".userInfo").show();
    event.preventDefault();
  });
});
