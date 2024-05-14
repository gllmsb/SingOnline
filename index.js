import  express from 'express' 
import dotenv from 'dotenv'
import { supabase } from './config/supabase.config.js'
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

app.get('/test', (req, res) => {
    const { data, error } = supabase
        .from('songs')
        .select('*')
    if(error) {
        console.error(error)
    }else {
        console.log(data);
    }
})

app.listen(port, () => {
    console.log('Webserver is running now on http://localhost:3000');
})


