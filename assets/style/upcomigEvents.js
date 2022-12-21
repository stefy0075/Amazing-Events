import {createCards, createCheckbox, filter} from '../module/funciones.js'

const containerCheckbox = document.getElementById('contain-check')
const containerCards = document.getElementById('row')
const activeSearch = document.getElementById('inputSearch')
let eventosGenerales;
let eventos;

fetch('https://amazing-events.onrender.com/api/events')
  .then(response => response.json())
  .then(datos => {
    eventosGenerales = datos
    eventos = datos.events
    let categoryEvents = [...new Set(eventos.map(events => {return events.category}))]
    const eventosFiltrados = eventos.filter(events => events.date > datos.currentDate )
    createCheckbox(containerCheckbox, categoryEvents)
    createCards(containerCards, eventosFiltrados, "../assets/details.html")    
  })

  let categoriasSeleccionadas = []
  const activeCheckbox = document.getElementById("contain-check")

activeCheckbox.addEventListener('change', (e) => {
  const eventosFiltrados = eventos.filter(events => events.date > eventosGenerales.currentDate)
  const checkbox = document.querySelectorAll('input[type="checkbox"]:checked')
  categoriasSeleccionadas = Array.from(checkbox).map(element => element.value)
  const eventosFiltradosPorCategoria = filter(categoriasSeleccionadas, activeSearch.value, eventosFiltrados) 
  createCards( containerCards, eventosFiltradosPorCategoria, "../assets/details.html", activeSearch.value)
})

activeSearch.addEventListener('input', (e) => {
  const eventosFiltrados = eventos.filter(events => events.date > eventosGenerales.currentDate)
  const valueSearch = document.getElementById("inputSearch").value
  const eventosFiltradosPorBusqueda = filter(categoriasSeleccionadas, valueSearch, eventosFiltrados)
  createCards(containerCards, eventosFiltradosPorBusqueda, "../assets/details.htmls", valueSearch)
 })