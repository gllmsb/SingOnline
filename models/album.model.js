import { supabase } from '../config/supabase.config.js'

export default class AlbumModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase 
            .from('albums')
            .select('id, title, artist_id, release_date')
        if(error) {
            throw new Error(error)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetch albums: ${error}`)
        }
    }

    static async getRecordById() {

    }
}