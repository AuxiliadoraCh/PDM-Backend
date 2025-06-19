import {Router} from 'express';
import { addPromotion,fetchPromotions,fetchPromotionsById,updatePromotionById,deletePromotionById,getActivePromotion } from '../controllers/promotion-controller.js';

let promotionRoutes = Router();

promotionRoutes.get('/',fetchPromotions);
promotionRoutes.get('/actives',getActivePromotion);
promotionRoutes.get('/:id',fetchPromotionsById);
promotionRoutes.post('/',addPromotion);
promotionRoutes.put('/:id',updatePromotionById);
promotionRoutes.delete('/:id',deletePromotionById);

export default promotionRoutes;
