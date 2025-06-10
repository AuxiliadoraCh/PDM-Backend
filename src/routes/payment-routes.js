import {Router} from 'express';
import { addPaymentMethod,fetchPaymentMethods,deletePayment } from '../controllers/payment-controller.js';
import {verifyUser} from '../middlewares/auth.middleware.js';

let paymentRoutes = Router();

paymentRoutes.post('/', verifyUser, addPaymentMethod);
paymentRoutes.get('/', verifyUser, fetchPaymentMethods);
paymentRoutes.delete('/:id', verifyUser, deletePayment);

export default paymentRoutes;