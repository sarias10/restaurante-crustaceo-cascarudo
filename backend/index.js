import express from 'express';
import dotenv from 'dotenv';
import serverless from 'serverless-http';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const local = process.env.LOCAL === 'true'

app.get('/hola_mundo', (req, res) => {
  res.send('Hello from github actions!');
});

app.get('/other', (req, res) => {
  res.send('other route');
});

export const handler = serverless(app);

if(local) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}