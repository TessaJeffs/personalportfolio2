import { species } from '../../data/species.js'
import {removeChildren, getLastNumber} from '../../utils.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const speciesView = document.querySelector("#main")

const cardInfo = document.querySelector(".cardcontent")
// take card information from bulma

function populateNav(species) {
    species.forEach(singleSpecies => {
        let speciesAnchor = document.createElement ('a')
        speciesAnchor.href ='#'
        let listItem = document.createElement ('li')
        listItem.textContent = singleSpecies.name

        speciesAnchor.addEventListener('click', event => {

            let speciesName = event.target.textContent
            const foundSpecies = species.find(singleSpecies => singleSpecies.name === speciesName)
            console.log(foundSpecies)
            populateSpeciesView(foundSpecies)
        })

        speciesAnchor.appendChild(listItem)
        navList.appendChild(speciesAnchor)

    })
    nav.appendChild(navList)
}

function populateSpeciesView (speciesData) {
    removeChildren(speciesView)
    let imageNum = getLastNumber(speciesData.url)
    let speciesImage = document.createElement('img')
    speciesImage.src = `https://starwars-visualguide.com/assets/img/species/${imageNum}.jpg`
   speciesImage.addEventListener ('error', event => {
        speciesImage.hidden = true
   
       }) 
    speciesView.appendChild(speciesImage)
}
// https://starwars-visualguide.com/assets/img/species/1.jpg
populateNav (species)


