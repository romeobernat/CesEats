import mongoose, {model, Schema, Document} from 'mongoose';

//definitions interfaces

interface article extends Document {
    ID_article: Number,
    name: string,
    descritpion : String,
    price : Number,
    available : Boolean,
    img: String,
    commandAmmonts: Array<mongoose.Types.ObjectId>
}


const ArticleSchema = new Schema<article>({
    ID_article: {
        type: Number,
        PrimaryKey: true,
        autoIncrement: true,
        required: true

    },
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
