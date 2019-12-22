const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')    // May be different based on new version
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: {type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema); // Course is a Class, not an object (Uppercase)

async function createCourse(){

  const course = new Course({       // course is an object of type Course (lowercase)
   name: 'Angular Course',
   author: 'Mosh',
   tags: ['Angular' , 'frontend'],
   isPublished: true
  });

  const result = await course.save();
  console.log(result);

};

async function getCourses() {

  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)

  // or & and - logical operators

  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
    .find({ author: 'Mosh', isPublished: true })  // finds all the courses with author Mosh & isPublished set to true
    // .find({ price: { $gte: 10, $lte: 20 } })   // returns the courses that the price is greater than or equal to 10 but less than 20
    // .find({ price: { $in: [10, 15, 20] } })    // returns the courses that the price is either 10, 15, or 20
    // .find()
    // .or([ { author: 'Mosh' }, { isPublished: true }]) // returns the courses that are authored by Mosh OR published
    // .and([ { author: 'Mosh' }, { isPublished: true }])    // returns the courses that are authored by Most & Published
    // .find({ author: /^Mosh/})    // returns courses where the author starts with Mosh(^)
    // .find({ author: /Hamedani$/ }) // returns the courses where the author ends with Hamedani (Case Sensitive)
    // .find({ author: /Hamdedani$/i }) // returns the courses where the author ends with Hamedani (Case Insensitive)
    // .find({ author: /.*Mosh.*/ })   // returns the courses where the author contains Mosh (.* .*)
    .skip (( pageNumber - 1) * pageSize ) // Implements pagination when paired with the pageNumber & pageSize above
    .limit(pageSize)              // limits to 10 ; changed to pageSize to allow for pagination
    .sort({ name: 1 })      // 1 denotes ascending order, -1 denotes descending order
    //.count()               // Returns the number of courses with the above listed information
    .select({ name: 1 })    // select only the name of the course
  console.log(courses);
};

async function updateCourse(id) {
 const course = await Course.findById(id);

 if(course.isPublished) return;    //if course is already published, do not update it.

 if (!course) return;

 course.isPublished = true;
 course.author = 'Another Author';

//  course.set({        // Same result as above, but less code for larger amounts of updates
//    isPublished: true,
//    author: 'Another Author'

const result = await course.save();
console.log(result);

};

async function updateCourse2(id) {
  const result = await Course.update({ _id: id }, {     // If you change _id:id to isPublished: false it would get all the courses that are not published
    $set: {
      author: 'Mosh',
      isPublished: false
    }
  });

  console.log(result);
}

async function updateCourse3(id) {
  const course = await Course.findByIdAndUpdate(id, {     // If you change _id:id to isPublished: false it would get all the courses that are not published
    $set: {
      author: 'Jason',
      isPublished: false
    }
  }, { new: true});

  console.log(course);
}

async function removeCourse(id) {
 // const result = await Course.deleteOne({ _id: id});   //deleteMany deletes multiple documents
 const course = await Course.findByIdAndRemove(id);     //returns 'null' if course is not found
 console.log(course);
}

removeCourse('5df69ad44274411dadf8c835');
// updateCourse('5df69ad44274411dadf8c835');
// updateCourse2('5df69ad44274411dadf8c835');
// updateCourse3('5df69ad44274411dadf8c835');
// getCourses();
// createCourse();
