//////////////////////////////////////////
//////////Import Dependecies & Model
/////////////////////////////////////
const mongoose = require('../utils/connection')
const Park = require('./park')

//////////////////////////////////////////
//////////Seed Script Code
/////////////////////////////////////

// first we gab our db variable
const db =mongoose.connection


//bc this is a script, we open then eventually close
//our one time connection to the db
db.on('open', () => {
   //array of parks
   const parks = [
    {name: 'Central Park', location: 'Manhattan', walkingTrails: true, dogRun: true, bbqPicnic: true, playground: true},
    {name: 'Prospect Park', location: 'Brooklyn', walkingTrails: true, dogRun: false, bbqPicnic: true, playground: true},
    {name: 'Phelam Bay Park', location: 'Bronx', walkingTrails: true, dogRun: true, bbqPicnic: true, playground: true},
    {name: 'Flushing Meadows Corona Park',location: 'Queens', walkingTrails: true, dogRun: true, bbqPicnic: true, playground: true},
    {name: 'Freshkills Park', location:'Staten Island', walkingTrails: true, dogRun: false, bbqPicnic: true, playground: false }  
   ]

   //when we seed the db, we remove everything from this collection
   Park.deleteMany({owner:null})
      .then(() => {
         //then add startParks to collection
         //then close our connection to the db
         Park.create(startParks)
            .then(data => {
               console.log('these are the parks \n', data)
               db.close()

            })
            .catch(err => {
               console.log('something went wrong \n', err)
               db.close()
            })

      })
      //handle errors
      .catch(err => {
         console.log('something went wrong \n', err)
         db.close()
      })

})