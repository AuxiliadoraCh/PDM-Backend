import { createPayment,getPaymentMethods,deletePaymentMethod } from "../services/payment-service.js";

export const addPaymentMethod = async (req, res) => {
    const {name} = req.body;
    const user_id = req.user.id
    try {
        const {data,error} = await createPayment(name,user_id);
        if (error) throw new Error(error.message)
        res.status(201).json({ message: 'Payment method added successfully', data })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const fetchPaymentMethods = async (req, res) => {
    try {
        const {data, error} = await getPaymentMethods();
        if (error) throw new Error(error.message)
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const deletePayment = async (req,res) => {
    const {id} = req.params;
    try {
        const {error } = await deletePaymentMethod(id);
        if (error) throw new Error(error.message)
        res.status(200).json({ message: 'Payment method deleted successfully' })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}