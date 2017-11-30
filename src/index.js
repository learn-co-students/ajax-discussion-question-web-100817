const apiButton = document.querySelector('.btn-primary')
const NAME = document.querySelector('#fullname')
const EMAIL = document.querySelector('#email')
const STREETADDRESS = document.querySelector('#street')
const CITY = document.querySelector('#city')
const STATE = document.querySelector('#state')
const POSTALCODE = document.querySelector('#postcode')
const HOMEPHONE = document.querySelector('#phone')
const CELLPHONE = document.querySelector('#cell')
const DOB = document.querySelector('#date_of_birth')
let fullName;

//run fetch
//store the person
//capture the keys for the person

apiButton.addEventListener('click', function(event) {
fetch('https://randomuser.me/api/')
  .then(req=>req.json())
  .then(json=> populateData(json.results[0]))
})
//return the json data in the promis
//use a callback to append each element in the DOM with json data

function populateData(json){
  fullName = `${json.name.title} ${json.name.first} ${json.name.last}`
  NAME.innerText = fullName
  EMAIL.innerText = json['email']
  STREETADDRESS.innerText = json.location['street']
  CITY.innerText = json.location['city']
  STATE.innerText = json.location['state']
  POSTALCODE.innerText = json.location['postcode']
  HOMEPHONE.innerText = json['phone']
  CELLPHONE.innerText = json['cell']
  DOB.innerText = json['dob'].split(" ")[0]
}
