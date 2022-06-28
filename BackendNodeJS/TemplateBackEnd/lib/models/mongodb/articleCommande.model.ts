import {model, Schema, Document} from 'mongoose';

//definitions interfaces

interface articlecommand extends Document {
    ammont: Number
}


const ArticleCommandSchema = new Schema<articlecommand>({
    ammont: {
        type: Number,
        required: true
    }
})

const ArticleCommand = model('Article-Command', ArticleCommandSchema)

export default ArticleCommand;
