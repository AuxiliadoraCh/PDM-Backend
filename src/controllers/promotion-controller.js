import { createPromotion,getPromotionById,getPromotions,updatePromotion,deletePromotion,getActivePromotions,countActivePromotions, changePromotionStatus } from "../services/promotion-service.js";

export const addPromotion = async (req, res) => {
    const {title, description,restaurants,active,start_date,end_date,images} = req.body;
    try {
        const {insertedData,error} = await createPromotion(title, description, restaurants, active, start_date, end_date, images);
        if (error) throw new Error(error.message);
        res.status(201).json({ message: 'Promotion added successfully', insertedData});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const fetchPromotions = async (req, res) => {
    try {
        const {data, error} = await getPromotions();
        if (error) throw new Error(error.message);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const fetchPromotionsById = async (req, res) => {
    const { id } = req.params;
    try {
        const {data, error} = await getPromotionById(id);
        if (error) throw new Error(error.message);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePromotionById = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const {data, error} = await updatePromotion(id, updates);
        if (error) throw new Error(error.message);
        res.status(200).json({ message: 'Promotion updated successfullyy', data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePromotionById = async (req, res) => {
    const { id } = req.params;
    try {
        const {data, error} = await deletePromotion(id);
        if (error) throw new Error(error.message);
        res.status(200).json({ message: 'Promotion deleted successfully', data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getActivePromotion = async (req, res) => {
    try {
        const {data, error} = await getActivePromotions();
        if (error) throw new Error(error.message);
        res.status(200).json( data );
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const countActivePromotion = async (req, res) => {
    try {
        const {count, error} = await countActivePromotions();
        if (error) throw new Error(error.message);
        res.status(200).json({activePromotions: count});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePromotionStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const {active} = req.body;
        const {data, error} = await changePromotionStatus(id, active);
        if (error) throw new Error(error.message)
        res.status(200).json({ message: 'Promotion status updated successfully', data });
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}