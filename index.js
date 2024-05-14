import  express from 'express' 
import dotenv from 'dotenv'
import { SongController } from './controllers/song.controller.js'
import { ArtistController } from './controllers/artist.controller.js'
import { AlbumController} from './controllers/album.controller.js'
const app = express()
const port = process.env.PORT
dotenv.config()

app.use(SongController)

app.use(ArtistController)

app.use(AlbumController)


app.listen(port, () => {
    console.log('Webserver is running now on http://localhost:3000');
})


