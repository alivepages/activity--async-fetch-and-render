const request = superagent
let statesTable = document.querySelector('.users-list');

request
  .get('https://randomuser.me/api/?results=50')
  .then(function saveStatesInAVariable(data) {
    console.log(data);
    const states = data.body.results
    return states
  })
  .then(function printInWebpage(statesList) {
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
