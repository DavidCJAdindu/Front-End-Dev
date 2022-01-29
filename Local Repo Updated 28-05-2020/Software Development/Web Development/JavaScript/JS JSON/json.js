/*  --- JSON ---

>> What is JSON?
- Stands for Javascript Object Notation.
- It is a lightweight data-interchange format.
- It is based on a subset of Javascript.
- It is easy to read & write
- It is often used with AJAX.
- JSON can also be used with most modern programming language.

>> Data Types
- Numbers: no difference between integers & floats
- String: string of unicode characters. must use double quotes.
- Boolean: true or false.
- Array: ordered lost of 0 or more values.
- Object: unordered collection of key/value pairs.
- Null: empty value
* Note: json files dont support functions of dates, only values in this list are accepted. 

>> JSON Syntax Rules
- JSON uses key/value pairs - {"name" : "John"}
- Most use double quotes around both KEY and VALUE.
- Must use the specified JSON data types nothing else is accepted.
- File type is (.json)
- MIME types associated with JSON is "Application/json"

*/

//>> JSON Example
{

  "name" : "John Doe", // string
  "age" : "35", // number
  "address" : {
        "street" : "5 main st",
        "city" : "Boston"
  }, // object
  "children" : ["Michael", "Mary"] //array

}


//> A Javascript Object
var person = {
  name : "John",
  age : "35",
  address : {
    street : "5 main street",
    city : "dublin"
  },
  children : ["Brad", "Michael", "Nicholas"]
};


//> A Javascript Array of people objects
var people = [

  {
    name : "Brad",
    age : "20"
  },

  {
    name : "Michael",
    age : "21"
  },

  {
    name : "Lucy",
    age : "19"
  }

]


// Turn Javascript Person Object into a JSON string
person = JSON.stringify(person);

// Turn JSON string back into a Javascript Person Object 
person = JSON.parse(person);



// Sending an XMLHttpRequest to get the data stored inside the people.json file and output to the browser
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {

  if (this.readyState == 4 && this.status == 200) {
    var response = JSON.parse(xhttp.responseText);
    var people = response.people;

    var output = '';
    for(var i = 0; i < people.length; i++) {
      output += '<li>' + people[i].name + '</li>';
    }
    document.getElementById('people').innerHTML = output;
  }

};

xhttp.open("GET", "people.json", true);
xhttp.send();
