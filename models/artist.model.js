import { supabase } from '../config/supabase.config.js'

export default class ArtistModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
            .from('artists')
            .select('id, name');
        if(error) {
            throw new Error(error)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetching artists: ${error}`)
        }
    }

    static async getRecordById() {

    }
}