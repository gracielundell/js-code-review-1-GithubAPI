(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "c5ec0fe99d9f88d779c24db15d2bea69952cbe2a";

},{}],2:[function(require,module,exports){
var timeSince = function(alarmTime) {
  this.Time = Time;
};

timeSince.prototype.getTime = function() {
  return this.Time;
};

exports.timeSince = timeSince;

},{}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/timeSince.js":2}]},{},[3]);
