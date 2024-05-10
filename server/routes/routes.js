import express from "express"
import {AddTodo, GetAllTodos , toggleTodoDone, updateTodo, deleteTodo} from "../controllers/todoController.js"

const route = express.Router();

route.post('/todos', AddTodo)
route.get('/todos',GetAllTodos)
route.get('/todos/:id', toggleTodoDone)
route.put('/todos/:id', updateTodo)
route.delete('/todos/:id', deleteTodo)

export default route