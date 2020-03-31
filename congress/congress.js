import { senators } from '../data/senators'
const container = document.querySelector ('.container')


// filter party data of senators
const filterSenators = (prop, value) => {
    return senators.filter (senators => senator[prop] === value)
}


function populateContainer() {
    senators.forEach(senator => {
        let middleName = senator.middle_name ? 
        ` ${senator.middle_name} ` : ` `
        let senPara = document.createElement('p')
        senPara.textContent = 
        `${senator.first_name} ${middleName} ${senator.last_name}`  
    container.appendChild (senPara) 
})
}

populateContainer()


console.log(filterSenators('party', 'R'))
console.log(filterSenators('party', 'D'))
console.log(filterSenators('party', 'ID'))


// map

