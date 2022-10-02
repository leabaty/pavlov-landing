import express from 'express';
import mongoose from 'mongoose';

import AddressPost from '../models/addressPost.js';

const router = express.Router();

export const getAddresses = async (req, res) => { 
    try {
        const postAddress = await AddressPost.find();
                
        res.status(200).json(postAddress);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAddress = async (req, res) => { 
    const { id } = req.params;

    try {
        const address = await AddressPost.findById(id);
        
        res.status(200).json(address);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAddress = async (req, res) => {
    const { name, address, gmapssrc, gmapstitle } = req.body;

    const newAddressPost = new AddressPost({ name, address, gmapssrc, gmapstitle })

    try {
        await newAddressPost.save();

        res.status(201).json(newAddressPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAddress = async (req, res) => {
    const { id } = req.params;
    const { name, address, gmapssrc, gmapstitle} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No address with id: ${id}`);

    const updatedAddress = { name, address, gmapssrc, gmapstitle, _id: id };

    await AddressPost.findByIdAndUpdate(id, updatedAddress, { new: true });

    res.json(updatedAddress);
}

export const deleteAddress = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No address with id: ${id}`);

    await AddressPost.findByIdAndRemove(id);

    res.json({ message: "Address deleted successfully." });
}


export default router;