var words = [

  { club : 'Arsenal' , manager : 'mikel arteta' },
  { club : 'Aston Villa' , manager : 'dean smith' },
  { club : 'Bournemouth' , manager : 'eddie howe' },
  { club : 'Brighton & Hove Albion' , manager : 'graham potter' },
  { club : 'Burnley' , manager : 'sean dyche' },
  { club : 'Chelsea' , manager : 'frank lampard' },
  { club : 'Crystal Palace' , manager : 'roy hodgson' },
  { club : 'Everton' , manager : 'carlo ancelotti' },
  { club : 'Leicester City' , manager : 'brendan rodgers' },
  { club : 'Liverpool' , manager : 'jurgen klopp' },
  { club : 'Manchester City' , manager : 'pep guardiola' },
  { club : 'Manchester United' , manager : 'ole gunnar solskjaer' },
  { club : 'Newcastle United' , manager : 'steve bruce' },
  { club : 'Norwich City' , manager : 'daniel farke' },
  { club : 'Sheffield United' , manager : 'chris wilder' },
  { club : 'Southampton' , manager : 'ralph hasenhuttl' },
  { club : 'Tottenham Hotspur' , manager : 'jose mourinho' },
  { club : 'Watford' , manager : 'nigel pearson' },
  { club : 'West Ham United' , manager : 'david moyes' },
  { club : 'Wolverhampton Wanderers' , manager : 'nuno espirito santo' }

];


// Pick & show random word
function showWord() { 

  // Code used to collect user input in console
  var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Generate random array index
  var randomTeam = words[Math.floor(Math.random() * words.length)];
  console.log(randomTeam.club);  

  readline.question(`Who is the PL manager?`, (text) => {

    if (text === randomTeam.manager) {
    showWord();
    } else {
    readline.close();
    }

  });

}

showWord();
