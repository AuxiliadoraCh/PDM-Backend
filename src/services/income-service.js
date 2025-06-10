import { supabase } from "../config/supabase-client.js";

export const createIncome = async ({user_id,amount,date,description}) => {
    return await supabase
    .from("incomes")
    .insert([{user_id,amount,date,description}])
    .select()

}

export const getIncomes = async () => {
    return await supabase
    .from("incomes")
    .select("*")
}

export const getIncomeById = async (id) => {
    return await supabase
    .from("incomes")
    .select("*")
    .eq("id",id)
    .single()
}

export const modifyIncome = async (id, updates) => {
    return await supabase
    .from("incomes")
    .update(updates)
    .eq("id", id)
    .select()
}

export const removeIncome = async (id) => {
    return await supabase
    .from("incomes")
    .delete
    .eq|("id", id)
}