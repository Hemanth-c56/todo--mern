import Todos from "../model/todo.js"

const AddTodo = async(req,res)=>{
    try{
        const newTodo = await Todos.create({
            data: req.body.data,
            createdAt: Date.now()
        })

        res.status(200).json({
            todo: newTodo
        })
    }
    catch(error){
        res.status(500).json({
            message: 'failed',
            error: error
        })
    }
}

const GetAllTodos = async(req,res)=>{
    try{
        const todos = await Todos.find().sort({'createdAt': -1})

        res.status(200).json({
            todos
        })
    }
    catch(error){
        res.status(500).json({
            message: 'failed',
            error: error
        })
    }
}

const toggleTodoDone = async(req,res)=>{
    try{
        const todoRef = await Todos.findById(req.params.id);
        const todo = await Todos.findOneAndUpdate(
            {_id: req.params.id},
            {done: !todoRef.done}
        )
        res.status(200).json({
            todo
        })
    }
    catch(error){
        res.status(500).json(error);
    }
}

const updateTodo= async(req,res)=>{
    try{
        const {text} = req.body
        await Todos.findOneAndUpdate(
            {_id: req.params.id},
            {data: text}
        )
        const updatedTodo = await Todos.findById(req.params.id)
        res.status(200).json({
            updatedTodo
        })
    }
    catch(error){
        res.status(500).json(error)
    }
}

const deleteTodo = async(req,res)=>{
    try{
        await Todos.findOneAndDelete({_id: req.params.id})
        res.status(204).json({msg: 'deletion successful'})
    }
    catch(error){
        res.status(500).json({
            message: 'failed',
            error: error
        })
    }
}

export {AddTodo, GetAllTodos, toggleTodoDone, updateTodo, deleteTodo}