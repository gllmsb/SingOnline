import { supabase } from '../config/supabase.config.js'

export default class ProfileModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
            .from('profiles')
            .select('*')
        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        }catch (error) {
            console.log(`Error fetching songs ${error}`);
        }
    }

    static async getRecordById(id) {
        try {
            const { data, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', id)
        
        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        } catch (error) {
            console.log(`Error fetching record ${error}`);
        }
    }

    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
            .from('profiles')
            .insert([
                {
                    firstname: formdata.firstname,
                    lastname: formdata.lastname,
                    address: formdata.address,
                    postal_number: formdata.postal_number,
                    city: formdata.city,
                    country: formdata.country,
                    email: formdata.email,
                    phone_number: formdata.phone_number,
                    gender: formdata.gender,
                    date_of_birth: new Date(formdata.date_of_birth),
                    user_id: formdata.user_id 
                }
            ]);

        if(error) {
            throw new Error(error.message)
        } else {
            return data
        }
        } catch (error) {
            console.log(`Error creating record ${error}`);
        }
    }

    static async updateRecord(formdata) {
        try {
            let { data, error } = await supabase
            .from('profiles')
            .update([
                {
                    firstname: formdata.firstname,
                    lastname: formdata.lastname,
                    address: formdata.address,
                    postal_number: formdata.postal_number,
                    city: formdata.city,
                    country: formdata.country,
                    email: formdata.email,
                    phone_number: formdata.phone_number,
                    gender: formdata.gender,
                    date_of_birth: new Date(formdata.date_of_birth),
                    user_id: formdata.user_id
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
            .from('profiles')
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