const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
        
        courseName              : { type : String , required : true },
        courseProviderName      : { type : String , required : true },
        thumbnailURL            : { type : String , required : true },
        startDate               : { type : String , required : true },
        endDate                 : { type : String , required : true }

})

module.exports = mongoose.model('course', courseSchema);
