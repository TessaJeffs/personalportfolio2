import { senators } from '../data/senators.js'
const container = document.querySelector ('.container')

const filterSenators = (prop, value) => {
    return senators.filter (senators => senator[prop] === value)
}

console.log(filterSenators('party', 'R'))

console.log(filterSenators('party', 'D'))

console.log(filterSenators('party', 'ID'))