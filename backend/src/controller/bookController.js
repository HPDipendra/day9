import bookModel from "../models/bookModels.js";
import cors from "cors"
import express from "express";

const app = express();








// const app = express();
// app.use(express.json())

export default class BookController {

    async add(req, res) {

        const data = await bookModel.create(req.body);
        console.log(data);

        if (data) {
            res.json({message:"data addeed succesfully",value:data});
        }
        else {
            res.json({ success: "false", message: "error while adding books" })
        }

    }
    async getByID(req, res) {

        const { id } = req.params;
        const data = await bookModel.findByPk(id);
        console.log(data);

        if (data) {
            res.json(data);
        }
        else {
            res.json({ success: "false", message: "error while adding books" })
        }

    }

    async edit(req, res) {

        const { id } = req.params;
        const { username, author, genre, description } = req.body
        const data = await bookModel.update({ username, author, genre, description }, {
            where: {
                id
            }
        });
        console.log(data);

        if (data) {
            res.json(req.body);
        }
        else {
            res.json({ success: "false", message: "error while adding books" })
        }

    }


    async delete(req, res) {

        const { id } = req.params;

        const data = await bookModel.destroy({
            where: {
                id
            }
        });
        console.log(data);
        if (data) {
            res.json("data deleted succesfully");
        }
        else {
            res.json({ success: "false", message: "error while adding  books" })
        }

    }

    async getAll(req, res) {

        const data = await bookModel.findAll({raw:true});

        console.log(data);

        if (data) {
           return  res.json(data);
            // res.
        }
        else {
           return res.json({ success: "false", message: "error while adding books" })
        }

    }








}