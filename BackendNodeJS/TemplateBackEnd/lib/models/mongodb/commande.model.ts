import mongoose, {model, Schema, Document} from 'mongoose';

//definitions interfaces

interface command extends Document {
    ID_command: Number,
    validation_date: Date,
    delivery_date : Date,
    account_id : Number,
    deliverer_id : Number,
    articleAmmonts: Array<mongoose.Types.ObjectId>
}


const CommandSchema = new Schema<command>({
    ID_command: {
        type: Number,
        PrimaryKey: true,
        autoIncrement: true,
        required: true

    },
    validation_date: {
        type: Date,
        required: true
    },
    delivery_date: {
        type: Date,
        required: true
    },
    account_id: {
        type: Number,
        required: true
    },
    deliverer_id: {
        type: Number,
        required: true
    },
    articleAmmonts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ArticleCommand'
    }]
})

const Command = model('Command', CommandSchema)

export default Command;
