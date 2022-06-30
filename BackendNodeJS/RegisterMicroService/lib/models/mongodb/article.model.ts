import mongoose, {model, Schema, Document} from 'mongoose';

//definitions interfaces

interface article extends Document {
    name: string,
    descritpion : String,
    price : Number,
    available : Boolean,
    img: String,
    commandAmmonts: Array<mongoose.Types.ObjectId>
}


const ArticleSchema = new Schema<article>({
    name: {
        type: String,
        required: true
    },
    descritpion: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    commandAmmonts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ArticleCommand'
    }]
})

const Article = model('Article', ArticleSchema)

export default Article;
