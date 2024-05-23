import express from 'express';
import SongModel from '../models/song.model.js';
export const SongController = express.Router()

SongController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords()
    res.send(data)
})
SongController.get('/songs/:id', async (req, res) => {
    const data = await SongModel.getRecordById(req.params.id)
    console.log(data)
    res.send(data)
})
SongController.post('/songs', async (req, res) => {
    const data = await SongModel.createRecord(req.body)  
    res.send(data)
})
SongController.put('/songs', async (req, res) => {
    const data = await SongModel.updateRecord(req.body)
    res.send(data)
 })
SongController.delete('/songs', async (req, res) => {
    const data = await SongModel.deleteRecord(req.body)
    res.send(data)
})