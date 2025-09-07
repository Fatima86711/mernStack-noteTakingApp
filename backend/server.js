    import express from 'express';
    import { connectDB } from './config/db.js';
    import router from './routes/notesRoute.js';
    import 'dotenv/config'
    import ratelimiter from './middlewares/ratelimiter.js';
    import cors from 'cors'
        // connectDB();
        const app = express();
        // app.use(cors({origin:"http://localhost:5713"}))
        app.use(cors({ origin: ['http://localhost:5173']  }));
        app.use(express.json());
        app.use(ratelimiter);
        app.get('/',(req, res)=>{
            res.send({success: true, message:"Welcome"})
        })
        app.use('/api/notes',router)







    connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
    console.log("Server is Listening at: ", process.env.PORT) ;
    })
    })
    
    //  app.listen(process.env.PORT,()=>{
    // console.log("Server is Listening at: ", process.env.PORT) ;
    // })
    
