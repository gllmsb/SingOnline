import { supabase } from '../config/supabase.config.js'

export default class AlbumModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase 
            .from('albums')
            .select('id, title, artist_id, release_date')
        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetch albums: ${error}`)
        }
    }

    static async getRecordById(id) {
        try {
            const { data, error } = await supabase 
            .from('albums')
            .select('id, title, artist_id, release_date')
            .eq('id', id)
        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetch albums: ${error}`)
        }
    }

    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
            .from('albums')
            .insert([
                {
                    title: formdata.title,
                    artist_id: formdata.artist_id,
                    release_date: formdata.release_date
                }
            ])
            if(error) {
                throw new Error(error.message)
            } else {
                return data
            }
        } catch (error) {
            console.log(`Error ${error}`);
        }
    }

    static async updateRecord(formdata) {
        try {
            let { data, error } = await supabase
                .from('albums')
                .update([
                    {
                        title: formdata.title,
                        artist_id: formdata.artist_id,
                        release_date: formdata.release_date
                    }
                ])
                .eq('id', formdata.id)

            if(error) {
                throw new Error(error.message)
            } else {
                return data
            }
        } catch (error) {
            console.log(`Error updating record ${error}`);
        }
    }

    static async deleteRecord(formdata) {
        try {
            let { data, error } = await supabase
            .from('albums')
            .delete()
            .eq('id', formdata.id)

        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        } catch (error) {
            console.log(`Error deleting record ${error}`);
        }
    }

}