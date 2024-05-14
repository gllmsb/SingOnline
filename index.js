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

app.post('/', (req, res)=>{
    res.send('Endpoint til POST')
})

app.get('/contact', (req, res) => {
    res.send('Kontakt side')
})

//*songs

app.get('/songs', async (req, res) => {
    const { data, error } = await supabase
        .from('songs')
        .select('title')
    if(error) {
        console.error(error)
    }else {
        console.log(data);
        res.send(data)
    }
})

//*artists

app.get('/artists', async (req, res) => {
    const { data, error } = await supabase
        .from('artists')
        .select('name')
    if(error) {
        console.error(error)
    }else {
        console.log(data);
        res.send(data)
    }
})

//* albums

app.get('/albums', async (req, res) => {
    const { data, error } = await supabase
        .from('albums')
        .select('title, artist_id, image')
    if(error) {
        console.error(error)
    }else {
        console.log(data);
        res.send(data)
    }
})


app.listen(port, () => {
    console.log('Webserver is running now on http://localhost:3000');
})


