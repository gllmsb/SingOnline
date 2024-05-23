import { supabase } from '../config/supabase.config.js'

export default class ArtistModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
            .from('artists')
            .select('id, name');
        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetching artists: ${error}`)
        }
    }

    static async getRecordById(id) {
        try {
            const { data, error } = await supabase
            .from('artists')
            .select('id, name')
            .eq('id', id)
        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        }catch (error) {
            console.error(`Error fetching artists: ${error}`)
        }
    }

    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
            .from('/artists')
            .insert([
                {
                    id: formdata.id,
                    name: formdata.name
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
            .from('artists')
            .update([
                {
                    id: formdata.id,
                    name: formdata.name
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
            .from('artists')
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