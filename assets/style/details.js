const containerCards = document.getElementById('dow')
let eventos = Object.values(data.events)
let fragment = document.createDocumentFragment()

for (let events of eventos){ 
    const divCard = document.createElement("div")
    divCard.classList.add("container-details")
    fragment.appendChild(divCard)
    divCard.innerHTML +=
    `<div class="container1-details">
    <img  class="img-details" src= ${events.image} alt="feria de comidas">
    <section class="text-details">
        <h1 class="h1"> ${events.name}</h1>
        <p><b>Date:</b> ${events.date}</p>
        <p><b>Description:</b> ${events.description}</p>
        <p><b>Category:</b> ${events.category}</p>
        <p><b>Place:</b> ${events.place}</p>
        <p><b>Capacity:</b> ${events.capacity}</p>
        <p id="asis"><b>Assistance:</b> ${events.assistance}</p>
        <p><b>Price:</b> ${events.price}</p>
    </section>
</div>`
  containerCards.appendChild(fragment)
}