const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const url = 'mongodb://localhost/athenaum';
// const User = require('./model/user');

const app = express()
  .use(cors())
  .use(bodyParser.json())


  mongoose.connect(url)
    .then(() => {
      console.log('Connected to database');
      app.listen(port, () => {
        console.log('Express server listening on port ${port}');
      })
    }
    );

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended : false}));

// app.post('/api/user/login', (req, res) => {
//     mongoose.connect(url, { useMongoClient: true }, function(err){
//         if(err) throw err;
//         User.find({
//           username : req.body.username, password : req.body.password
//       }, function(err, user){
//           if(err) throw err;
//           if(user.length === 1){
//               return res.status(200).json({
//                   status: 'success',
//                   data: user
//               })
//           } else {
//               return res.status(200).json({
//                   status: 'fail',
//                   message: 'Login Failed'
//               })
//         }
//         console.log('connected successfully, username is ',req.body.username,' password is ',req.body.password);
//     });
// });
// });

// app.listen(3000, () => console.log('blog server running on port 3000!'));
