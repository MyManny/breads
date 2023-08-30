const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          res.render('index', {
              breads: foundBreads,
              title: 'Index Page'
          })
      })
})


// NEW
breads.get('/new', (req, res) => {
  res.render('new')
})

// SHOW
breads.get('/:id', (req, res) => {
  if (req.params.id) {
      Bread
          .findById(req.params.id)
          .then(bread => {
              res.render(
                  'Show',
                  {
                      bread: bread,
                      id: req.params.id
                  })
          })
          .catch(err => {
              console.log(err)
              res.render('NotFound')
          })
  } else {
      res.render('NotFound')
  }
  //res.send(Bread[req.params.arrayIndex])
})


// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = undefined 
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})



// DELETE
breads.delete('/:id', (req, res) => {
  console.log(re.params.id)
  Bread.splice(req.params.id, 1)
  res.status(303).redirect('/breads')
})

// EDIT
breads.get('/:arrayIndex/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.arrayIndex],
    index: req.params.arrayIndex
  })
})

// UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on'){
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})


module.exports = breads
