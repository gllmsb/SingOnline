import { supabase } from '../config/supabase.config.js'

export default class Album {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase 
            .from('albums')
            .select('title, artist_id, image')
        if(error) {
            throw new Error(error)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetch albums: ${error}`)
        }
    }

    static async getRecordbyId() {

    }
}