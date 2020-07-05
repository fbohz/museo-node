const Tour = require('./../models/tourModel');

// const tours = JSON.parse(
//     fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
// );

// Route handlers

exports.getAllTours = (req, res) => {
  // here we cannot have blocking code
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    // results: tours.length,
    // data: {
    //     tours,
    // },
  });
};
exports.getTour = (req, res) => {
  console.log(req.params);
  //convert string to number
  const id = req.params.id * 1;
  // const tour = tours.find((el) => el.id === id);

  // no tour handling
  // if (!tour)
  //     return res.status(404).json({
  //         status: 'fail',
  //         message: 'Invalid ID',
  //     });

  res.status(200).json({
    status: 'success',
    // data: {
    //     tour,
    // },
  });
};

exports.createTour = async (req, res) => {
    try {
        const newTour = await Tour.create(req.body);
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour,
          },
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
        
    }
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
