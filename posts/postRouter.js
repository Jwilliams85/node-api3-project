const express = require('express');

const router = express.Router();

const postDb = require('../data/db.js')
router.get('/', (req, res) => {
  // do your magic!
  postDb.get(req.query)
  .then((post) => {
    res.status(200).json(post)
  })
  .catch((error) => {
    next (error)
  })
});

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  postDb.getById(req.params.id)
.ten((post) => {
  if(post) {
    res.status(200).json(post)
  }
})
.catch((error) => {
  new(error)
})
});

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  postDb.remove(req.params.id)
  .then((post) => {
    res.status(200).json({message: "Post has been deleted"})
  })
  .catch((error) = {
    next(error)
  })
});

router.put('/:id', validatePostId, (req, res) => {
  //id, changes object = > count, 1 means updated 

  //we need to validate data coming from the client 
 const {id} = req.params;
 const changes = req.body;

 if (isValidUpdate (changes)) {
  postDb.update(id, changes)
 .then(count => {
   console.log ("response from db.update", count)
   if (count === 1) {
     res.status(200).json({message: 'the post was updated'})
   } else {
     //the database could not find a post to update
     res.status(404).json({message: 'could not find that post'})
   }
 })
 //tnen and catch go together like req and res do (the hommies)
 .catch(error => {
   console.log(error);
   res.status(500).json({errorMessage: 'we could not updated the record or the post' });
 }); 
} else {
 res.status(400).json({message: "Please provide title and contents for the post"})
}
}); 

// custom middleware

function isValid(post){}
function validatePostId(req, res, next) {
  return Boolean(changes.title || changes.conetents);
  
}

module.exports = router;
