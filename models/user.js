const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
var UserSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minLength: 2,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        minLength: 2,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: ['regular', 'member']
    },
    is_admin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
});

/*
    Virtual Properties
*/

// FullName
UserSchema.virtual('fullname').get(function() {
    let fullname = '';

    if (this.firstname == null) {
        fullname += this.firstname
    }

    if (this.lastname == null) {
        fullname = fullname + ' ' + lastname
    }

    return fullname;
});

// URL
UserSchema.virtual('url').get(function() {
    return 'users/' + this._id;
});

// Export model
module.exports = mongoose.model('User', UserSchema);