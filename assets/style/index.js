import {createCards, createCheckbox, filter} from '../module/funciones.js'

const containerCheckbox = document.getElementById('contain-check')
const containerCards = document.getElementById('row')
const activeSearch = document.getElementById('inputSearch')
const activSearch = document.getElementById('inputSearch')
const eventos = data.events

const categoryEvents = [...new Set(eventos.map(events => {return events.category}))]
let categoriasSeleccionadas = []
const activeCheckbox = document.getElementById("contain-check")
activeCheckbox.addEventListener('change', (e) => {
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
  categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
  const eventosFiltradosPorCategoria = filter(categoriasSeleccionadas, activeSearch.value, eventos) 
  createCards( containerCards, eventosFiltradosPorCategoria, "./assets/details.html")
})

  
  
activeSearch.addEventListener('input', (e) => {
  const search = document.getElementById("inputSearch")
  const valueSearch1 = search.value
  const eventosFiltradosPorBusqueda = filter(categoriasSeleccionadas, valueSearch1, eventos)
  createCards(containerCards, eventosFiltradosPorBusqueda, "./assets/details.html", valueSearch1)
 })


createCheckbox(containerCheckbox, categoryEvents)
createCards(containerCards, eventos, "./assets/details.html")
