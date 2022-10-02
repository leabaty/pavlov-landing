import mongoose from 'mongoose';

const addressSchema = mongoose.Schema({
    name: String,
    address: String,
    gmapssrc: String,
    gmapstitle: String,
}, { collection: 'AddressBook' })

const AddressPost = mongoose.model('AddressPost', addressSchema);

export default AddressPost;