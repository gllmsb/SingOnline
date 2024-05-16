import express from 'express';
import ArtistModel from '../models/artist.model.js';
export const ArtistController = express.Router()

ArtistController.get('/artists', async (req, res) => {
    const data = await ArtistModel.getAllRecords()
    res.send(data)
})
ArtistController.get('/artists/:id', async (req, res) => {
    const data = await ArtistModel.getRecordById(req.params.id)
    console.log(data);
    res.send(data)
})