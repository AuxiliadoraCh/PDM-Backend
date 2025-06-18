import {Router} from 'express';
import { addIncome,fetchIncomes,fetchIncomeById,updateIncome,deleteIncome } from '../controllers/income-controller.js';
import { verifyUser } from '../middlewares/auth.middleware.js';

let incomeRoutes = Router();

incomeRoutes.post('/',verifyUser, addIncome);
incomeRoutes.get('/', fetchIncomes);
incomeRoutes.get('/:id', verifyUser,fetchIncomeById);
incomeRoutes.put('/:id', verifyUser,updateIncome);
incomeRoutes.delete('/:id', verifyUser,deleteIncome);

export default incomeRoutes;