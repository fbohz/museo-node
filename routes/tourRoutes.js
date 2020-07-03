const express = require('express');
const fs = require('fs');
const router = express.Router();
// top level code is only executed once
const {
    getAllTours,
    createTour,
    getTour,
    updateTour,
    deleteTour
} = require('../controllers/tourController')



// ROUTER
router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router