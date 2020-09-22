const express = require('express');
const app = express();
const path = require('path');
const bodyparse = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
// const flash = require('req-flash');
// const session = require('express-session');

const MONGODB_URI = "mongodb+srv://Pankaj:Pankaj@cluster0.1qoj1.mongodb.net/likewebsite?retryWrites=true&w=majority";



const fileStorage = multer.diskStorage({
   destination: (req, file, cb) =>{
       cb(null, 'images');
   },
   filename: (req, file, cb) =>{
       cb(null, file.filename+'-'+file.originalname);
   }
});

const fileFilter = (req, file, cb) =>{
  if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/pdf')
  {
      cb(null, true);
  }
  else
  {
      cb(null, false);
  }
};

app.use(bodyparse.urlencoded({
    extended : true
}));
app.use(bodyparse.json());
// app.use(flash());
// app.use(session({
//     secret: 'djhxcvxfgshajfgjhgsjhfgsakjeauytsdfy',
//     resave: false,
//     saveUninitialized: true,
// }));
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));
// app.use('/images',express.static(path.join(__dirname,'images')));
app.use('/public',express.static(path.join(__dirname, 'public')));

// app.use(csrfProtection);



// const adminController= require('./controller/adminController');
const userRouter= require('./routes/userRoute');

// app.use((req, res, next)=>{
//        res.locals.isAuthenticated = req.session.isLoggedin;
//        res.locals.csrfToken = req.csrfToken();
//    next();
// });
// app.use('/admin',adminController);
// app.use('/',(req,res)=>{
//     res.redirect('/login');
// });
app.use('/', userRouter);


app.set('view engine', 'ejs');
app.set('views','views');



mongoose.connect(MONGODB_URI,
    {userNewUrlParser: true},
    () =>  console.log('Connected to DB!')
);

app.listen(3000);