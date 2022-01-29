// Create event listener
document.getElementById('button').addEventListener('click', loadUsers);

// Load Github Users
function loadUsers() {

  // Create XHR Object
  var xhr = new XMLHttpRequest();

  //  We need a function to make the request, the type of request and what file/url we are making the request to.
  // OPEN - type, url/file, async(true/false)
  xhr.open('GET', 'https://api.github.com/users', true);

  xhr.onload = function() {
    if(this.status == 200 ) {
      var users = JSON.parse(this.responseText);

      var output = '';
      for (var i in users){
        output += 
        '<div class="users">' +
        '<img src="' + users[i].avatar_url + '" width="70" height="70">' +
        '<ul>' +
        '<li>ID: ' + users[i].id +  '</li>' +
        '<li>Login: ' + users[i].login + '</li>' +
        '</ul>' +
        '</div>';
      }
      
      document.getElementById('users').innerHTML = output; 
    }
  }

  // Sends Request
  xhr.send();

}