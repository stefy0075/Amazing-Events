import {eventHighestAssistance, minAssistance, greaterCapacity, upcomigEventStats, pastEventStats} from '../module/funciones.js'

let conteinerTr = document.getElementById("conteinerTr1") 
let conteinerTrMin = document.getElementById("conteinerTr2")
let conteinerTrCapacity = document.getElementById("conteinerTr3")
let conteinerUpcomig = document.getElementById("conteinerTrUpcomig")
let conteinerPast = document.getElementById("conteinerPast")
let dataStats;
let dataStatsGeneral;

fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((res) => res.json())
    .then((data) =>{
        dataStatsGeneral = data
        dataStats = data.events
        eventHighestAssistance(dataStats, conteinerTr)
        minAssistance(dataStats, conteinerTrMin)
        greaterCapacity(dataStats, conteinerTrCapacity)
        upcomigEventStats(dataStats, conteinerUpcomig, dataStatsGeneral)
        pastEventStats(dataStats, conteinerPast, dataStatsGeneral)
    })