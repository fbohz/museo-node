const express = require('express');
const router = express.Router();

// check for specific param and do something

// top level code is only executed once
const {
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour,
} = require('../controllers/tourController')

// router.param('id', checkId)

// ROUTER
router.route('/')
    .get(getAllTours)
    .post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router