import express from 'express';
const app = express();
import cors from 'cors'
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenerativeAI } from '@google/generative-ai';
const port = 5000;



const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });





//use express static folder
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.listen(port, () => {
    try {
        console.log(`Server is running ${port}`);

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
});

app.post("/search", async (req, res) => {
    try {
        const {singleQuestion } = req.body
        const result = await model.generateContent(singleQuestion);
        const data =  result.response.text();
        await res.send({reply:data})
        
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });


