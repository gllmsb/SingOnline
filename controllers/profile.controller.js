import express from 'express';
import ProfileModel from '../models/profile.model.js';
export const ProfileController = express.Router()

ProfileController.get('/profiles', async (req, res) => {
    const data = await ProfileModel.getAllRecords()
    res.send(data)
})
ProfileController.get('/profiles/:id', async (req, res) => {
    const data = await ProfileModel.getRecordById(req.params.id)
    console.log(data)
    res.send(data)
})
ProfileController.post('/profiles', async (req, res) => {
    const data = await ProfileModel.createRecord(req.body)
    res.send(dataq)
})
ProfileController.put('/profiles', async (req, res) => {
    const data = await ProfileModel.updateRecord(req.body)
    res.send(data)
})
ProfileController.delete('/profiles', async (req, res) => {
    const data = await ProfileModel.deleteRecord(req.body)
    res.send(data)
})
