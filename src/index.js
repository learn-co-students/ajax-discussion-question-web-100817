const btn = document.querySelector('button')
const profilePicture = document.getElementById('profile_picture')
const fullName = document.getElementById('fullname')
const email = document.getElementById('email')
const street = document.getElementById('street')
const city = document.getElementById('city')
const state = document.getElementById('state')
const postcode = document.getElementById('postcode')
const phone = document.getElementById('phone')
const cell = document.getElementById('cell')
const dateOfBirth = document.getElementById('date_of_birth')

btn.addEventListener('click', e => {
  fetch('https://randomuser.me/api/')
    .then(data => data.json())
    .then(json => {
      info = json.results[0]
      fullName.innerHTML = `${info.name.first} ${info.name.last}`
      email.innerHTML = info.email
      street.innerHTML = info.location.street
      city.innerHTML = info.location.city
      state.innerHTML = info.location.state
      postcode.innerHTML = info.location.postcode
      phone.innerHTML = info.phone
      cell.innerHTML = info.cell
      dateOfBirth.innerHTML = info.dob
      profilePicture.src = info.picture.medium
    })
})