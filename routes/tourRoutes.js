const express = require('express');
const fs = require('fs');
const router = express.Router();

// check for specific param and do something

// top level code is only executed once
const {
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour,
    checkId,
    checkBody
} = require('../controllers/tourController')

router.param('id', checkId)

// ROUTER
router.route('/')
    .get(getAllTours)
    .post(checkBody, createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router