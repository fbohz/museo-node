const fs = require('fs');

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// check for specific param and do something
exports.checkId = (req, res, next, value) => {
    console.log("id is ", value)
    if (req.params.id * 1 > tours.length)
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID',
        });
    // remember to call next() on middlewares
    next()
}

// Route handlers

exports.getAllTours = (req, res) => {
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
exports.getTour = (req, res) => {
    console.log(req.params);
    //convert string to number
    const id = req.params.id * 1;
    const tour = tours.find((el) => el.id === id);

    // no tour handling
    // if (!tour)
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'Invalid ID',
    //     });

    res.status(200).json({
        status: 'success',
        data: {
            tour,
        },
    });
};

exports.createTour = (req, res) => {
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

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Updated tour here...>',
        },
    });
};

exports.deleteTour = (req, res) => {
    // 204 no content response but OK
    res.status(204).json({
        status: 'success',
        data: null,
    });
};