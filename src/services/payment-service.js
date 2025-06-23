import { supabase } from "../config/supabase-client.js";

export const createPayment = async (name,user_id) => {
    return await supabase
    .from("payment_methods")
    .insert([{ name, user_id, is_default: false}])
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

export const getUserPaymentMethods = async (user_id) => {
    return await supabase
        .from("payment_methods")
        .select("*")
        .or(`and(is_default.eq.true,user_id.is.null),user_id.eq.${user_id}`)
        .order("is_default", { ascending: false });
};
