import express from 'express';
require('./db_config/mongo.db');
//import bodyParser from 'body-parser'
// import cookieParser from "cookie-parser"
import {RestaurantRouter} from './routes/restaurant_route'
import UserRoutes from './routes/user_route'
import connection from "./db_config/sequelize.mysql";
import cors from "cors"

const router = express();

router.use(cors());

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

//app.use(bodyParser.json())
//app.use(cookieParser());

//var corsOptions = {
//    origin: 'http://localhost:3080',
//    credentials: true,
//    optionsSuccessStatus: 200 // pour la prise en charge des navigateurs anciens comme IE
//}

//app.use(cors(corsOptions));

//app.use('/article', article)

router.use('/restaurant', RestaurantRouter);
router.use("/user", UserRoutes);

// router.use(
//   (
//     err: Error,
//     req: express.Request,
//     res: express.Response,
//     next: express.NextFunction
//   ) => {
//     res.status(500).json({ message: err.message });
//   }
// );
// connection
//   .sync()
//   .then(() => {
//     console.log("mySQL database successfully connected");
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

// app.get('/', function(req, res) {
//     res.send('Default request')
// })
router.listen(7000, () =>{
  console.log("api server is running on port: 7000")
})
router.listen(7001, () =>{
  console.log("api server is running on port: 7001")
})