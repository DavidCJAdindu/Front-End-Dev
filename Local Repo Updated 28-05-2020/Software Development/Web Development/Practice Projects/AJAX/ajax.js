// Create event listener
document.getElementById('btn').addEventListener('click', loadText);

function loadText() {

  // Create XHR Object
  var xhr = new XMLHttpRequest();

  //  We need a function to make the request, the type of request and what file/url we are making the request to.
  // OPEN - type, url/file, async(true/false)
  xhr.open('GET', 'lorem.txt', true);

  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status ==200) {
      document.getElementById('p').innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById('p').innerHTML = 'Not Found';
    }
  }

  // Sends Request
  xhr.send();


}