const router = require('express').Router();
const Course = require('../models/Course.model');


//***************************************     READ(GET) COURSE     ********************************************

//-------  TO GET ALL THE CourseS  -------------
router.route('/').get((req, res) => {
    Course.find()
        .then(Courses => res.json(Courses))
        .catch(err => res.status(400).json('Error: ' + err));
});

//-------- TO GET ONE Course WITH ID -----------
router.route('/:id').get((req, res) => {
    Course.findById(req.params.id)
        .then(Course => res.json(Course))
        .catch(err => res.status(400).json('Error : ' + err));
});


//***************************************     CREATE COURSE    *********************************************

router.route('/create').post((req, res) => {

    const newCourse = new Course(req.body);

    newCourse.save()
        .then(() => res.json('Course added!'))
        .catch(err => res.status(400).json('Error : ' + err));

});



//***************************************     UPDATE COURSE     *********************************************

router.route('/update/:id').patch(async (req, res) => {
    Course.findById(req.params.id)
        .then(Course => {
            Course.courseName = req.body.courseName;
            Course.courseProviderName = req.body.courseProviderName;
            Course.thumbnailURL = req.body.thumbnailURL;
            Course.startDate = req.body.startDate;
            Course.endDate = req.body.endDate;

            Course.save()
                .then(() => res.json('Course Updated !'))
                .catch(err => res.status(400).json('Error : ' + err));
        })
        .catch(err => res.status(400).json('Error : ' + err));
})


//***************************************     DELETE COURSE     *********************************************

router.route('/delete/:id').delete(async (req, res) => {
    Course.findByIdAndDelete(req.params.id)
        .then(() => res.json('Course Deleted.'))
        .catch(err => res.status(400).json('Error : ' + err));
})

module.exports = router;
