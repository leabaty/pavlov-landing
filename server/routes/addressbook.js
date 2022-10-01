import express from 'express';

import { getAddresses, getAddress, createAddress, updateAddress, deleteAddress } from '../controllers/addressbook.js';

const router = express.Router();

router.get('/', getAddresses);
router.post('/', createAddress);
router.get('/:id', getAddress);
router.patch('/:id', updateAddress);
router.delete('/:id', deleteAddress);

export default router;