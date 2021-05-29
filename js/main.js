let sp = new Spreadsheet("https://docs.google.com/spreadsheets/d/e/2PACX-1vTOr60pbD4Xy2CyXocMTXM-B6wYvO5YaRYd6W-3TMgr8pEQEJ4IrPjDvVbHARkm428S_zGIHbXAjoNf/pub?gid=0&single=true&output=csv");

console.log(sp)
sp.titles = ['date','event','book', 'link']
console.log(sp.json())

var app = new Vue({
    el: '#app',
    data: {
        events: sp.json()
    }
  })