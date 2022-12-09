const containerCards = document.getElementById('row')
let eventos = Object.values(data.events)
let fragment = document.createDocumentFragment()

for (let events of eventos){
    if(events.date > data.currentDate){ 
    const divCard = document.createElement("div")
    divCard.classList.add("card", "div-card", "content-card")
    fragment.appendChild(divCard)
    
    divCard.innerHTML +=
    `<div class="col">
    <div class="card" style="width: 18rem;">
      <img src= ${events.image} class="card-img-top" alt="food fest">
      <div class="card-body">
        <h5 class="card-title">${events.name}</h5>
        <p class="card-text"> ${events.description}</p>
        <div class="text-button">
          <p>Price: ${events.price}</p>
          <a href="./details.html" class="btn btn-primary">Details</a>
        </div>
      </div>
    </div>
  </div>`
  containerCards.appendChild(fragment)
    }
}