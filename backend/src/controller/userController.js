import userModel from "../models/userModel.js";
import bycrypt from "bcrypt"
import jwt from "jsonwebtoken";
import "dotenv/config"


export default class UsersController {

    async get(req, res) {

        console.log(req.body);

        const { userName, password } = req.body
        const data = await userModel.findOne({
            where: {
                userName
            }


        });

        if (data === null) {
            return res.json({ success: "false", message: "user doesnot exist" })
        }
        else {
            const match = bycrypt.compareSync(req.body.password, data.password);

            if (match) {
                //jwt
                const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, { expiresIn: "5h" })
                console.log(`token:${token}`);
                // console.log(data);

                //   console.log(data.dataValues);
                data.token = token;
                delete data.password;
                delete data.address;
                delete data.phoneNo;

                
                res.json(
                    {
                        // token,
                        data
                    }
                )
            }
            else {
                res.status(403).json({ success: "false", message: "invalid password" })
            }
        }
    }

    async add(req, res) {
        console.log(req.body);
        // const{userName,password,address,phoneNo} = req.body;

        const data = await userModel.create(req.body)
        console.log(data);

        if (data) { res.json({ message: "data inserted succesfully" }) }

        else { res.json({ message: "data not inserted" }) }
    }
}