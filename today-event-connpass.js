// use library of the 'moment.js'. Following is CDN url.
// https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/locale/af.min.js
const today = moment()
const tomorrow = moment().add(1, 'days')

const url = 'https://connpass.com/search/?q=&start_from='+ today.format('YYYY%2FMM%2FDD') + '&start_to=' + tomorrow.format('YYYY%2FMM%2FDD')

const query = location.search 
if(query == "") {
    window.open(url)
    window.close()
}
