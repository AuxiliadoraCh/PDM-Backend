import { supabase } from "../config/supabase-client.js";

export const checkUsedCoupon = async (user_id, promotion_id) => {
    return await supabase
    .from('used_coupons')
    .select("*")
    .eq('user_id', user_id)
    .eq('promotion_id', promotion_id)
    .maybeSingle()
}

export const useCoupon = async (user_id, promotion_id, code) => {
    return await supabase
    .from('used_coupons')
    .insert([{
        user_id,
        promotion_id,
        code
    }])
    .select()
}

export const getUsedCoupons = async (user_id) => {
    return await supabase
    .from('used_coupons')
    .select("*")
    .eq('user_id', user_id)
}