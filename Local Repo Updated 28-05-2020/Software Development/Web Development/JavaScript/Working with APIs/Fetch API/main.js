
document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

// Fetch the txt file and display it in the browser
function getText() {
  fetch('sample.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data){
    document.getElementById('output').innerHTML = data;
  });
}


// Fetch the json data and display it in the browser
function getUsers() {
  fetch('users.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data){
    var output = '<h2 class="mb-4"> Users </h2>';
    data.forEach(function(user) {
      output += `
        <ul class="list-group mb-3"> 
          <li class="list-group-item">ID: ${user.id}</li>
          <li class="list-group-item">Name: ${user.name}</li>       
          <li class="list-group-item">Email: ${user.email}</li>     
        </ul>   
      `;
    });
    document.getElementById('output').innerHTML = output; 
  });
}


// Fetch the API data and display it in the browser
function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(res) {
    return res.json();
  })
  .then(function(data){
    var output = '<h2 class="mb-4">Posts</h2>';
    data.forEach(function(post) {
      output += `
        <div class="card card-body mb-3"> 
          <h3>${post.title}</h3>
          <p>${post.body}</p>    
        </div>   
      `;
    });
    document.getElementById('output').innerHTML = output; 
  });
}


// Post data and print to console
function addPost(e) {
  e.preventDefault();

  var title = document.getElementById('title').value;
  var body = document.getElementById('body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({title:title, body:body})
  })
  .then((res) => res.json())
  .then((data) => console.log(data))

}

