import mongoose from 'mongoose';

const visitorsSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
},  { collection: 'VisitorsBook' })

const VisitorsPost = mongoose.model('VisitorsPost', visitorsSchema);

export default VisitorsPost;