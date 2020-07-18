const express = require('express');
const path = require('path')
const { AsyncLocalStorage } = require('async_hooks');


const app = express()
const PORT = process.env.PORT || 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());



  const reservation = [
  ]

const waitList = [
    
]
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
  app.get('/tables', (req, res) => {
    res.sendFile(path.join(__dirname, 'tables.html'))
  })
  app.get('/reserve', (req, res) => {
    res.sendFile(path.join(__dirname, 'reserve.html'))
  })

  app.get('/data/reservation', (req, res) =>{
    res.json(reservation)
  })
  app.get('/data/waitList', (req, res) =>{
    res.json(waitList)
  })

  
app.post('/data/tables', (req, res) => {

    const newReservation = req.body;
    console.log(newReservation)
    // newReservation.route = newReservation.name.replace(/\s+/g, '').toLowerCase()
    
   
    if ( reservation.length > 5){
        waitList.push(newReservation)
        newReservation.queue = ("You have a table")
    } else {
        reservation.push(newReservation)
        newReservation.queue = ("You have been added to the Wait list")
    }
    res.json(newReservation)

    // see if reservation.length > 5 put new input into wait list if so. else put into reservation

})
 

app.listen(PORT, () => {
    console.log(`Server listening at Port: ${PORT}`)
    
  })
  
 