const request = superagent
let statesTable = document.querySelector('.users-list');
const boton = document.querySelector('button')
boton.addEventListener('click', function(){

request
  .get('https://randomuser.me/api/?results=50')
  .then(function saveStatesInAVariable(data) {
    const states = data.body.results
    return states
  })
  .then(function printInWebpage(statesList) {
    statesTable.innerHTML = '';
    statesList.forEach(function(obj) {
      statesTable.innerHTML += `
                <article>
                  <span>${obj.nat}</span>
                  <h6>${obj.email}</h6>
                </article>
      `
    });
  })
  .catch(function() {
    var elem = document.createElement('p')
    elem.innerHTML = 'Error al momento de obtener los datos'
    document.querySelector('.errors').appendChild(elem)
  })

})
