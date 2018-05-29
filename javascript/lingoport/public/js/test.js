function dateMethod() {
    let dateField = document.querySelector('#dateResult')

    let date = new Date()
    let timeString = date.toLocaleString();
    dateField.innerHTML += `Current time is ${timeString}`

  }

  function submitName() {
    let t = document.getElementById('userName').value
    let splitValue = t.split(' ')
    document.getElementById("demo").innerHTML = splitValue[1]
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