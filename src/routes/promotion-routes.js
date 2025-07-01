import {Router} from 'express';
import { addPromotion,fetchPromotions,fetchPromotionsById,updatePromotionById,deletePromotionById,getActivePromotion,countActivePromotion, updatePromotionStatus } from '../controllers/promotion-controller.js';

let promotionRoutes = Router();

promotionRoutes.get('/',fetchPromotions);
promotionRoutes.get('/actives',getActivePromotion);
promotionRoutes.get('/count', countActivePromotion);
promotionRoutes.get('/:id',fetchPromotionsById);
promotionRoutes.post('/',addPromotion);
promotionRoutes.put('/:id',updatePromotionById);
promotionRoutes.delete('/:id',deletePromotionById);
promotionRoutes.patch('/:id/status',updatePromotionStatus);


export default promotionRoutes;
