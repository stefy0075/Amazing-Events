import {createCards, createCheckbox, filter} from '../module/funciones.js'

const containerCheckbox = document.getElementById('contain-check')
const containerCards = document.getElementById('row')
const activeSearch = document.getElementById('inputSearch')
let eventos;

fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(datos => {
    eventos = datos.events
    let categoryEvents = [...new Set(eventos.map(events => {return events.category}))]
    createCheckbox(containerCheckbox, categoryEvents)
    createCards(containerCards, eventos, "./assets/details.html")
  })
  
let categoriasSeleccionadas = []
const activeCheckbox = document.getElementById("contain-check")
activeCheckbox.addEventListener('change', (e) => {
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
  categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
  const eventosFiltradosPorCategoria = filter(categoriasSeleccionadas, activeSearch.value, eventos) 
  createCards( containerCards, eventosFiltradosPorCategoria, "./assets/details.html", activeSearch.value)
})
  
activeSearch.addEventListener('input', (e) => {
  const valueSearch = document.getElementById("inputSearch").value
  const eventosFiltradosPorBusqueda = filter(categoriasSeleccionadas, valueSearch, eventos)
  createCards(containerCards, eventosFiltradosPorBusqueda, "./assets/details.html", valueSearch)
 })