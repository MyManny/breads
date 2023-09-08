// dependencies
const express = require('express')
const bakers = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../seeds/baker_seed.js')

// Index:  
bakers.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
})                    
         
// Show: 
bakers.get('/:id', (req, res) => {
    Baker
        .findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('BakerShow', {
                baker: foundBaker
            })
        })
})


//seed
bakers.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})


// export
module.exports = bakers                    
