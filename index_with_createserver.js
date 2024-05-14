import  express from 'express' 
import dotenv from 'dotenv'
const app = express()
dotenv.config()

const port = process.env.PORT

app.get('/', (req, res) => {    
    console.log(req.query);
    res.send('Forside')
})

app.get('/contact', (req, res) => {
    res.send('Kontakt side')
})

app.listen(port, () => {
    console.log('Webserver is running now on http://localhost:3000');
})


