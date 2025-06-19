import { checkUsedCoupon,useCoupon,getUsedCoupons } from "../services/used_coupon-service.js";

export const checkCouponUsage = async (req, res) => {
    const { promotion_id } = req.body;
    const user_id = req.user.id;

    try {
        const { data, error } = await checkUsedCoupon(user_id, promotion_id);   

        if (error) throw new Error(error.message);

        if (!data) {
            return res.status(200).json({
                used: false,
                message: "El cupón aún no ha sido utilizado por este usuario"
            });
        }

        res.status(200).json({
            used: true,
            message: "El cupón ya fue utilizado por este usuario",
            coupon: data
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const registerCouponUsage = async (req, res) => {
    const { promotion_id } = req.body;
    const user_id = req.user.id;

  try {
    const { data: existing, error: existingError } = await checkUsedCoupon(user_id, promotion_id);
    if (existingError) throw new Error(existingError.message);
    if (existing) {
      return res.status(200).json({ message: "Ya usaste este cupón", code: existing.code });
    }

    const code = `UP${user_id.slice(0, 5).toUpperCase()}${promotion_id}`;

    const { data, error } = await useCoupon(user_id, promotion_id, code);
    if (error) throw new Error(error.message);

    res.status(201).json({ message: "Cupón registrado correctamente", code: data[0]?.code });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const fetchUsedCoupons = async (req, res) => {
    const user_id = req.user.id;
    try {
        const {data, error} = await getUsedCoupons(user_id);   
        if (error) throw new Error(error.message);
        res.status(201).json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}