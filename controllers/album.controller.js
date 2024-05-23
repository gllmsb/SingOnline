import express from 'express';
import AlbumModel from '../models/album.model.js';
export const AlbumController = express.Router()

AlbumController.get('/albums', async (req, res) => {
    const data = await AlbumModel.getAllRecords()
    res.send(data)
})
AlbumController.get('/albums/:id', async (req, res) => {
    const data = await AlbumModel.getRecordById(req.params.id)
    console.log(data);
    res.send(data)
})
AlbumController.post('/albums', async (req, res) => {
    const data = await AlbumModel.createRecord(req.body)
    res.send(data)
});