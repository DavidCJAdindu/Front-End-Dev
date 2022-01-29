var url = require('url');

var myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

// Get the serialized URL
console.log(myUrl.href); // outputs full url

// Get the host (root domain)
console.log(myUrl.host); // outputs 'mywebsite.com' (including port)
// Hostname (does not get port)
console.log(myUrl.hostname); // outputs 'mywebsite.com' (excluding port)

// Pathname
console.log(myUrl.pathname); // outputs '/hello.html'

// Serialized Query
console.log(myUrl.search); // outputs '?id=100&status=active'

// Params Object
console.log(myUrl.searchParams); // outputs 'URLSearchParams { 'id' => '100', 'status' => 'active' }'

// Add Param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams); // outputs 'URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }'