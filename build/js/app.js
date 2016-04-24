(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c5ec0fe99d9f88d779c24db15d2bea69952cbe2a";

},{}],2:[function(require,module,exports){
var timeSince = function(time) {
  this.Time = time;
};

timeSince.prototype.getTime = function() {
  return this.Time;
};

exports.timeSince = timeSince;

},{}],3:[function(require,module,exports){
var apiKey = require("./../.env").apiKey;
var timeSince = require("./../js/timeSince.js").timeSince;

$(document).ready(function() {
  $(".userInfo").hide();
  $("form#searchForm").submit(function(event) {
    $("#inputSearch").empty();
    $(".header").css("max-height", "200px");
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
            $(".postedRepos").append("<li><strong> Repository Name: </strong>" + postTitle + "<br><strong>Date Created: </strong>" + moment(postDate).format("LL") + "</li><br><br>");
            console.log("postDate: ", postDate);
          }; // end for-loop
        }); // end getRepos
      });
    });
    $(".userInfo").show();
    event.preventDefault();
  });
});

},{"./../.env":1,"./../js/timeSince.js":2}]},{},[3]);
