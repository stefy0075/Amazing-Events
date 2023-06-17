fetch('https://amazing-events.onrender.com/api/events')
  .then(response => response.json())
  .then(datos => {
    eventos = datos.events
    const queryString = location.search
    const params = new URLSearchParams(queryString)
    const id = params.get("id")

    const card = eventos.find(item => item._id == id)
    const containerCards = document.getElementById('dow')
    containerCards.innerHTML =
    `<div class="container1-details">
    <img  class="img-details" src="${card.image}" alt="feria de comidas">
    <section class="text-details">
        <h1 class="h1"> ${card.name}</h1>
        <p><b>Date:</b> ${card.date}</p>
        <p><b>Description:</b> ${card.description}</p>
        <p><b>Category:</b> ${card.category}</p>
        <p><b>Place:</b> ${card.place}</p>
        <p><b>Capacity:</b> ${card.capacity}</p>
        <p><b>Assistance: </b> ${card.assistance ? card.assistance : card.estimate}</p>
        <p><b>Price:</b> ${card.price}</p>
    </section>
</div>`
  })