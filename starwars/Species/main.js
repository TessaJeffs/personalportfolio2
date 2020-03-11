import { species } from '../../data/species.js'
import {removeChildren, getLastNumber} from '../../utils.js'

const nav = document.querySelector('.nav')

const navList = document.querySelector('.navList')

const speciesView = document.querySelector("#main")

function populateNav(species) {
    species.forEach(species => {
        let speciesAnchor = document.createElement ('a')
        speciesAnchor.href ='#'
        let listItem = document.createElement ('li')
        listItem.textContent = species.name

        speciesAnchor.addEventListener('click', event => {

            let speciesName = event.target.textContent
            const foundSpecies = species.find(species => species.name ===speciesName)
            console.log(foundSpecies)
            populateSpeciesView (foundSpecies)
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
    speciesImage.src = `https://starwars-visualguide.com/assets/img/species/${imageNum}/.jpg`
    speciesView.appendChild(speciesImage)
}
// https://starwars-visualguide.com/assets/img/species/1.jpg
populateNav (species)
