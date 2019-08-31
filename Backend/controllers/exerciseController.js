const express = require('express');
// Next we set up the Router
const router = express.Router();

// require Our Model - Remember Model is
// a representation of our data
// The model should capitalized
const Exercise = require('../models/exercise');
// Creating the index route
 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  console.log(req.body, ' this is get all')
     try  {
      const allExercises = await Excercise.find();
      // This is the response to react
      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allExercises
      });

    } catch (err){

      res.send(err)

    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    const createdExercise = await Exercise.create(req.body);
    console.log(createdExercise, ' created Exercise');
    res.json({
      status: {
            code: 201,
            message: "Resource successfully created"
          },
      data: createdExercise
    },
    );

  } catch(err){
    console.log(err);
    res.send(err);
  }
});

router.get('/:id', async (req, res, next) => {
     try  {
        const foundExercise = await Exercise.findById(req.params.id);
        res.json({
          status: {
            code: 200,
            message: "Success"
          },
          data: foundExercise
        });

      } catch (err){
        res.send(err);
      }
});

router.put('/:id', async (req, res) => {
  try {
    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({
      status: {
            code: 201,
            message: "Resource successfully updated"
          },
      data: updatedExercise
    });
  } catch(err){
    res.send(err)
  }
});
// Delete route
router.delete('/:id', async (req, res) => {
  try {
     const deletedExercise = await Exercise.findByIdAndRemove(req.params.id);
      res.json({
        status:  {
            code: 200,
            message: "Resource successfully deleted"
          },
        data: deletedExercise
      });
  } catch(err){
    res.send(err);
  }
});

module.exports = router;