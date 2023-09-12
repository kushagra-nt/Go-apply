import express from 'express';
import cors from 'cors';
import jobSearcher from './controllers/jobSearcher/index.js';

const app = express();

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: false, limit: "4mb" }));
app.use(cors());

// will not push this to github for obvious reasons
app.get('/searchForJobs/:password', jobSearcher);

app.get('/',(req,res)=>{
    res.send('Hello, you made it till here!');
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000");
})