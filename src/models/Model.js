import mongoose from 'mongoose'

const { Schema } = mongoose

const decalSchema = new Schema({
    key: String,
    position: {
        x: Number,
        y: Number,
        z: Number
    },
    normal: {
        x: Number,
        y: Number,
        z: Number
    },
    texture: String,
    textureName: String,
    size: Number
});

const modelSchema = new Schema({
    email: String,
    name: String,
    desc: String,
    scale: Number,
    sizeType: String,
    snapshot: String,
    modelType: String,
    modelColor: String,
    backgroundColor: String,
    decalsData: [decalSchema]
}, { timestamps: true });

let Model;

try {
    Model = mongoose.model('Model')
}
catch (e) {
    Model = mongoose.model('Model', modelSchema)
}

export default Model