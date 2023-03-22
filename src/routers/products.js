import express from 'express';
const router = express.Router()
import { getAll, get, create, update, remove } from '../controllers/products';

router.get('/products', getAll)
router.get('/products/:id', get)
router.post('/products', create)
router.patch('/products/:id', update)
router.delete('/products/:id', remove)

export default router