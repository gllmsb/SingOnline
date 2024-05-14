import express from 'express';
import ArtistModel from '../models/artist.model.js';
export const ArtistController = express.Router()

ArtistController.get('/artists', async (req, res) => {
    const data = await ArtistModel.getAllRecords()
    res.send(data)
})