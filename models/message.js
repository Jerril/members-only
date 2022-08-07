const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    text: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date_created: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

/*
    Virtual Properties
*/

// URL
messageSchema.virtual('url').get(function() {
    return 'messages/' + this._id;
});

module.exports = mongoose.model('Message', messageSchema);