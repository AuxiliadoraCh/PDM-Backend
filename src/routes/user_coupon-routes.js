import { Router } from "express";
import { checkCouponUsage, registerCouponUsage,fetchUsedCoupons } from "../controllers/used_coupon-controller.js";
import { verifyUser } from "../middlewares/auth.middleware.js";

let userCouponRoutes = Router();

userCouponRoutes.post("/check", verifyUser,checkCouponUsage);
userCouponRoutes.post("/", verifyUser,registerCouponUsage);
userCouponRoutes.get("/", verifyUser,fetchUsedCoupons);

export default userCouponRoutes;