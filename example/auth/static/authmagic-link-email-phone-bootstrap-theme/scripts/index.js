'use strict';

document.getElementById('redirect-url').value = getParameterByName('redirect') ? getParameterByName('redirect') : location.protocol + '//' + location.host + '/check.html';

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function getToken() {
  var emailElement = document.getElementById('email');
  var redirectUrl = document.getElementById('redirect-url').value;
  var email = emailElement.value;
  var data = {
    user: email,
    params: { r: Math.random() },
    redirectUrl: redirectUrl
  };

  fetch('/key', {
    body: JSON.stringify(data),
    mode: 'cors',
    method: 'post',
    headers: {
      'content-type': 'application/json'
    }
  }).then(function (res) {
    return res.json();
  }).then(function (resp) {
    var eproof = resp.eproof;

    location.href = '/wait.html?eproof=' + eproof + '&redirect=' + redirectUrl;
  });
}

document.getElementById('go').onclick = getToken;