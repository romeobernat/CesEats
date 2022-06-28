import mongoose, {model, Schema, Document} from 'mongoose';

//definitions interfaces

interface restaurant extends Document {
    ID_restaurant: Number,
    name: string,
    address : String,
    postal_code : Number,
    img: String,
    articles: Array<mongoose.Types.ObjectId>
}


const RestaurantSchema = new Schema<restaurant>({
    ID_restaurant: {
        type: Number,
        PrimaryKey: true,
        autoIncrement: true,
        required: true

    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postal_code: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }]
})

const Restaurant = model('Restaurant', RestaurantSchema)

export default Restaurant;
