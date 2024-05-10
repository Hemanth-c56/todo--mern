import mongoose from "mongoose"

const TodoModel = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Todos = mongoose.model('todos', TodoModel)

export default Todos