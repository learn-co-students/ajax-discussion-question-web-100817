let store = []

function getRequest() {
  fetch('https://randomuser.me/api/').then( res => res.json() ).then( json => pushToStore(json) )
}

function pushToStore(json){
  json.results.forEach( person => store.push(person))
}

let button = document.querySelector('.btn')
let fullname = document.querySelector('#fullname')
let email = document.querySelector('#email')
let street = document.querySelector('#street')
let city = document.querySelector('#city')
let state = document.querySelector('#state')
let zipcode = document.querySelector('#postcode')
let phone = document.querySelector('#phone')
let cell = document.querySelector('#cell')
let dob = document.querySelector('#date_of_birth')

let counter = 0;

button.addEventListener('click', function(){
  let name = `${store[counter].name.first} ${store[counter].name.last}`
  fullname.append(name)
  email.append(store[counter].email)
  street.append(store[counter].location.street)
  city.append(store[counter].location.city)
  state.append(store[counter].location.state)
  postcode.append(store[counter].location.postcode)
  phone.append(store[counter].phone)
  cell.append(store[counter].cell)
  dob.append(store[counter].dob)
  counter++
  getRequest()
})

getRequest()
