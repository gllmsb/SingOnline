import  express from 'express' 
import dotenv from 'dotenv'
import SongModel from './models/song.model.js'
import Artist from './models/artist.model.js'
import Album from './models/album.model.js'

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
    const data = await SongModel.getAllRecords()
        res.send(data);
})

//*artists

app.get('/artists', async (req, res) => {
    const data = await Artist.getAllRecords()
        res.send(data);       
})

//* albums

app.get('/albums', async (req, res) => {
    const data = await Album.getAllRecords()
        res.send(data);
})


app.listen(port, () => {
    console.log('Webserver is running now on http://localhost:3000');
})


