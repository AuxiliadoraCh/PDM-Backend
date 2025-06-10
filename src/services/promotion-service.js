import { supabase } from "../config/supabase-client.js";

export const createPromotion = async (title,description,data,active,start_date,end_date,images) => {
    return await supabase
    .from('promotions')
    .insert([{
        title,
        description,
        data: JSON.stringify(data),
        active,
        start_date,
        end_date,
        images
    }])
    .select()
}

export const getPromotions = async () => {
    return await supabase
    .from('promotions')
    .select("*")
}

export const getPromotionById = async (id) => {
    return await supabase
    .from('promotions')
    .select("*")
    .eq('id',id)
    .single()
}

export const updatePromotion = async (id, updates) => {
    return await supabase
    .from('promotions')
    .update(updates)
    .eq('id', id)
    .select()
}

export const deletePromotion = async (id) => {
    return await supabase
    .from('promotions')
    .delete()
    .eq('id', id)
    .select()
}