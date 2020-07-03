const express = require('express');
const fs = require('fs');
const router = express.Router();
// top level code is only executed once
const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);
  
// Route handlers

const getAllTours = (req, res) => {
    // here we cannot have blocking code
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestTime,
        results: tours.length,
        data: {
            tours,
        },
    });
};
const getTour = (req, res) => {
    console.log(req.params);
    //convert string to number
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);

    // no tour handling
    if (!tour)
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });

    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
};

const createTour = (req, res) => {
    // since at this point no id b/c of no db we need to specify that
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({
            id: newId,
        },
        req.body
    );
    tours.push(newTour);
    fs.writeFile(
        `${__dirname}/dev-data/data/tours-simple.json`,
        JSON.stringify(tours),
        (err) => {
            // 201 is new resource
            res.status(201).json({
                status: 'success',
                data: {
                    tour: newTour,
                },
            });
        }
    );
};

const updateTour = (req, res) => {
    // patch implemented for testing purposes
    if (req.params.id * 1 > tours.length)
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });

    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>',
        },
    });
};

const deleteTour = (req, res) => {
    // patch implemented for testing purposes
    if (req.params.id * 1 > tours.length)
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    // 204 no content response but OK
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

// ROUTER
router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router