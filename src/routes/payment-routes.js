import {Router} from 'express';
import { addPaymentMethod,fetchPaymentMethods,deletePayment } from '../controllers/payment-controller.js';
import {VerifyUser} from '../middlewares/auth-middleware.js';

let paymentRoutes = Router();

paymentRoutes.post('/', VerifyUser, addPaymentMethod);
paymentRoutes.get('/', VerifyUser, fetchPaymentMethods);
paymentRoutes.delete('/:id', VerifyUser, deletePayment);

export default paymentRoutes;