/* --- AJAX ---
 
>> What is AJAX?
- AJAX stands for Asynchronous Javascript And XML.
- AJAX is a set of web technologies.
- AJAX is used to send & receive data from a client to a server asynchronously(without reloading the webpage).
- AJAX does not interfer with current web page.
- JSON has replaced XML.

>> XmlHttpRequest (XHR) Object
- API in the form of an object.
- Provided by the browser's JS enviroment.
- Methods transfer data between client/server.
- Can be used with other protocols than HTTP.
- Can work with data other than XML (JSON, plain text).

*/

// Create event listener
document.getElementById('button').addEventListener('click', loadText);

function loadText() {

  // Create XHR Object
  var xhr = new XMLHttpRequest();

  //  We need a function to make the request, the type of request and what file/url we are making the request to.
  // OPEN - type, url/file, async(true/false)
  xhr.open('GET', 'sample.txt', true);

  /*
  > HTTP Statuses
  - 200: "OK"
  - 403: "Forbidden"
  - 404: "Not Found"
  
  xhr.onload = function() {
    if(this.status == 200 ) {
      console.log(this.responseText);
    }
  }
  */

  /* 
  OPTIONAL - used for loaders
  xhr.onprogress = function() {
    console.log('READYSTATE: ', xhr.readyState)
  } 
  */

  /* - XHR Error
  xhr.onerror = function() {
    console.log('Request Error...');
  }
  */
  
  /*
  > readyState Values
  - 0: request not initialized
  - 1: server connection established
  - 2: request received
  - 3: processing request
  - 4: request finished and response is ready
  */
  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status ==200) {
      // console.log(this.responseText);
      document.getElementById('text').innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById('text').innerHTML = 'Not Found';
    }
  }


  // Sends Request
  xhr.send();


}