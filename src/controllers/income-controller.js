import { createIncome,getIncomes,getIncomeById,modifyIncome,removeIncome,getIncomesByMonth,sumIncomesByMonth } from "../services/income-service.js";

export const addIncome = async (req,res) => {
    const {amount,date,description} = req.body
    const user_id = req.user.id
    try {
        const {data,error} = await createIncome({user_id,amount,date,description})
        if (error) throw new Error(error.message)
        res.status(201).json({ message: 'Income added successfully', data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const fetchIncomes = async (req,res) => {
    try {
        const user_id = req.user.id;
        const {data,error} = await getIncomes(user_id)
        if (error) throw new Error(error.message)
        res.status(201).json({ message: 'incomes', data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const fetchIncomeById = async (req, res) => {
    const { id } = req.params
    try {
      const { data, error } = await getIncomeById(id)
      if (error) throw new Error(error.message)
      res.status(200).json({message: "Income by id", data})
    } catch (error) {
      res.status(404).json({ message: error.message })
    }
}

export const updateIncome = async (req, res) => {
        const { id } = req.params
        const { amount, date, description } = req.body
        try {
          const { data, error } = await modifyIncome(id, { amount, date, description })
          if (error) throw new Error(error.message)
          res.status(200).json({ message: 'Income updated successfully', data })
        } catch (error) {
          res.status(400).json({ message: error.message })
        }
}

export const deleteIncome = async (req, res) => {
    const { id } = req.params
    try {
      const { error } = await removeIncome(id)
      if (error) throw new Error(error.message)
      res.status(200).json({ message: 'Income deleted successfully' })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
}

export const fetchIncomesByMonth = async (req, res) => {
    const { month, year } = req.body
    const user_id = req.user.id
    try {
        const { data, error } = await getIncomesByMonth(user_id, month, year)
        if (error) throw new Error(error.message)
        res.status(200).json({ message: 'Incomes for the month', data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const getMonthlyIncomeSum = async (req, res) => {
    const user_id = req.user.id;
    const { month, year } = req.body;

    try {
        if (!user_id || !month || !year) {
            return res.status(400).json({ message: "Faltan datos requeridos" });
        }

        const total = await sumIncomesByMonth(user_id, month, year);

        res.status(200).json({
            message: "Monthly income calculated successfully",
            monthlyIncome: total
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


