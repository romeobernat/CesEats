import mongoose, {model, Schema, Document} from 'mongoose';

//definitions interfaces

interface type extends Document{
    type : String,
    restaurants: Array<mongoose.Types.ObjectId>
    articles: Array<mongoose.Types.ObjectId>
}


const TypeSchema = new Schema<type>({
    type: {
        type: String,
        required: true
    },
    restaurants: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    }],
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]
})

const Type = model('Type', TypeSchema)

export default Type;
