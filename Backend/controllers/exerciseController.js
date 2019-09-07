const express = require('express');

//Router
const router = express.Router();

//Model
const Exercise = require('../models/exercise');

//Index Route
 router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  // console.log(req.body, ' this is get all')
     try  {
      const allExercises = await Exercise.find().populate('user');
      // This is the response to react
      res.json({
        status: {
            code: 200,
            message: "Success"
          },
        data: allExercises
      });

    } catch (err){
      console.log(err, "This is res.send error in exercisesContainer.js")
      res.send(err)
      
    }
});


router.post('/', async (req, res) => {

  try {
    console.log(req.body, ' this is req.body');
    req.body.user = req.session.UserId;
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