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

    static async getRecordById(id) {
        try {
            const { data, error } = await supabase
                .from('songs')
                .select('*, artists(id, name)')
                .eq('id', id)
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
        }catch (error) {
            console.error(`Error fetching songs: ${error}`)
        }
    } 

    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
            .from('songs')
            .insert([
                {
                title: formdata.title,
                content: formdata.content,
                lyrics: formdata.lyrics,
                artist_id: formdata.artist_id
                }
        ])
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
    
        } catch (error) {
            console.error(`Error ${error}`)
        }
    }

    static async updateRecord(formdata) {
        try {
            let { data, error } = await supabase
                .from('songs')
                .update([
                    {
                        title: formdata.title,
                        content: formdata.content,
                        lyrics: formdata.lyrics,
                        artist_id: formdata.artist_id
                    }
                ])
                .eq('id', formdata.id)
    
            if(error) {
                throw new Error(error)
            } else {
                return data
            }
    
        } catch (error) {
            console.error(`Error updating record ${error}`);
        }
    }

}