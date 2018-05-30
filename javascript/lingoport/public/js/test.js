function dateMethod() {
  let dateField = document.querySelector('#dateResult')

  let date = new Date()
  let timeString = date.toLocaleString();
  dateField.innerHTML = `Current time is ${timeString}`

}

function submitName() {
  let t = document.getElementById('userName').value
  let splitValue = t.split(' ')
  document.getElementById("demo").innerHTML = splitValue[1]
}

function sortString() {
  var items = ['Òphelia', 'Frànklin', 'Frìàr', 'frìâr', 'fìlâr']
  return items.sort()
}

function getRandomCharacter() {
  let randomCharacter = randomNumber()
  console.log(randomCharacter)
  let characterCode = String.fromCharCode(randomCharacter)
  document.getElementById('randomCharacter').innerHTML = characterCode
}

// Create a random character
function randomNumber() {
  let randomness = Math.floor((Math.random() * 65535) + 1);
  console.log(randomness)
  return randomness
}

//This is just a comment with a plus + to check for contenation rules.
function returnDate() {
  var myDate = new Date.UTC(2019, 5, 9, 5, 40, 4)
  var theDate = new Intl.DateTimeFormat(myDate)
  return theDate
}