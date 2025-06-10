import {Router} from 'express';
import { addIncome,fetchIncomes,fetchIncomeById,updateIncome,deleteIncome } from '../controllers/income-controller.js';
import { verifyUser } from '../middlewares/auth.middleware.js';

let incomeRoutes = Router();

incomeRoutes.post('/', addIncome);
incomeRoutes.get('/', fetchIncomes);
incomeRoutes.get('/:id', fetchIncomeById);
incomeRoutes.put('/:id', updateIncome);
incomeRoutes.delete('/:id', deleteIncome);

export default incomeRoutes;