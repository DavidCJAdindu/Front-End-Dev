var search = document.getElementById('search');
var matchList = document.getElementById('match-list');


// Search cities.json and filter it
var searchCitites = async searchText => {

  var res = await fetch('cities.json');
  var cities = await res.json();

  // get matches to current text input
  var matches = cities.filter(city => {
    var regex = new RegExp(`^${searchText}`, 'gi');
    return city.country.match(regex);
  });

  if(searchText.length === 0){
    matches = [];
    matchList.innerHTML = '';
  }

  // output data 
  outputHtml(matches);

};


//show results in HTML
var outputHtml = matches => {

  if(matches.length > 0) {
    var html = matches.map(match => `
      <div class="card card-body mb-1">
        <h4> ${match.country},
          <span class="text-primary"> ${match.city} </span
        </h4>
      </div>
    `).join('');

    matchList.innerHTML = html;
  }

};

search.addEventListener('input', () => searchCitites(search.value));