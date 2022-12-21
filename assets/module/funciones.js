export function createCards(conteiner, array, url, value){
    let fragment = document.createDocumentFragment()
    conteiner.innerHTML = ""
    array.length
    ? array.forEach(events => {
      let divCard = document.createElement("div")
        divCard.classList.add("card", "div-card", "content-card")
        divCard.innerHTML +=
        `<div class="col">
        <div class="card" style="width: 18rem;">
          <img src= ${events.image} class="card-img-top" alt="food fest">
          <div class="card-body">
            <h5 class="card-title">${events.name}</h5>
            <p class="card-text"> ${events.description}</p>
            <div class="text-button">
              <p>Price: ${events.price}</p>
              <a href="${url}?id=${events._id} " class="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      </div>`
      fragment.appendChild(divCard)
    })
    : (conteiner.innerHTML = `<p class="notFoud">No results found for... "${value}" </p>`)
    conteiner.appendChild(fragment)
  }
  
export function createCheckbox(conteiner, array){
    let fragment = document.createDocumentFragment()
    array.forEach(events => {
    const divCheck = document.createElement("div")
      divCheck.classList.add("form-check", "form-check-inline")
      divCheck.innerHTML +=
      `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${events}" value="${events}">
        <label class="form-check-label" for="${events}">${events}</label>
      </div>`
    fragment.appendChild(divCheck)
  })
  conteiner.appendChild(fragment)
  }

export function filterByCategory(event, categorySelect){
  if(!categorySelect.length){
    return event
  }
  return categorySelect.map(elemento => event.filter(evento => evento.category === elemento)).flat()
  }

export function filterBySearch(events, valueSearch){
  return events.filter(event => event.name.toLowerCase().includes(valueSearch.toLowerCase()))
}

export function filter(select, input, array){
  let filtradoPorCategoria = filterByCategory(array, select)
  let filtradoPorBusqueda = filterBySearch(filtradoPorCategoria, input)
  return filtradoPorBusqueda
}