import { supabase } from "../config/supabase-client.js";

export const createIncome = async ({user_id,amount,date,description}) => {
    return await supabase
    .from("incomes")
    .insert([{user_id,amount,date,description}])
    .select()

}

export const getIncomes = async (user_id) => {
    return await supabase
    .from("incomes")
    .select("*")
    .eq("user_id", user_id)
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
    .eq("id", id)
}

export const getIncomesByMonth = async (user_id, month, year) => {
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];

    return await supabase
    .from("incomes")
    .select("*")
    .eq("user_id", user_id)
    .gte("date", startDate)
    .lte("date", endDate)
}

export const sumIncomesByMonth = async (user_id, month, year) => {

    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const endDate = new Date(year, month, 0).toISOString().split('T')[0];

    const { data, error } = await supabase
        .from("incomes")
        .select("amount")
        .eq("user_id", user_id)
        .gte("date", startDate)
        .lte("date", endDate);

    if (error) throw new Error(error.message);

    const total = data.reduce((sum, item) => sum + item.amount, 0);
    return total;
}
