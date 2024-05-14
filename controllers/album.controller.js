import express from 'express';
import AlbumModel from '../models/album.model.js';
export const AlbumController = express.Router()

AlbumController.get('/albums', async (req, res) => {
    const data = await AlbumModel.getAllRecords()
    res.send(data)
})