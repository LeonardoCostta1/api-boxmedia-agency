import express from "express";
import blogController from "../controller/blogController.js";
const routes = express.Router()

routes
.get('/',blogController.index)
.get('/:id',blogController.only)
.post('/',blogController.create)
.put('/:id',blogController.update)
.put('/comment/:id',blogController.addComment)



export default routes;