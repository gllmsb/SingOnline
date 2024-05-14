import { supabase } from '../config/supabase.config.js'

export default class SongModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('id, title, content, created_at, artists(name)');
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
        }catch (error) {
            console.error(`Error fetching songs: ${error}`)
        }
    }

    static async getRecordById() {

    }
}