import { supabase } from "../config/supabase-client.js";

export const createPayment = async (name,user_id) => {
    return await supabase
    .from("payment_methods")
    .insert([{ name, user_id}])
    .select()
}

export const getPaymentMethods = async () => {
    return await supabase
    .from("payment_methods")
    .select("*")
}

export const deletePaymentMethod = async (id) => {
    return await supabase
    .from("payment_methods")
    .delete()
    .eq("id",id)
    .select()
}