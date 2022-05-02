import Product from "../models/poduct.js";
import { faker } from "@faker-js/faker";
console.log(faker);


export const productsController = {
    inserDummyData: async (req, res)=>{ 
        //Genera lA data
        let fakeData =[];
        for(let i=1; i<= 50; i++){
            let newProductData = {
                name: faker.company.companyName(),
                category: 	faker.address.city(),
                description: faker.lorem.paragraph(),
                images: [faker.image.avatar(), faker.image.avatar()],
            }
            fakeData =[...fakeData, newProductData]
        }

        await Product.create(fakeData);
        res.json({
            status: "All Good!"
        });
    },

    index: async (req,res)=> {

        //De esta forma consulto por los datos del name de mi BDD, y con Product.find({},"-name").
        const productsArray = await Product.find({
            deletedAt: null
        }, "name");
        console.log(productsArray);
        
        return res.status(200).json({
            name:"jhon",
            count: productsArray.length,
            data: productsArray
        });
    },

    detail: async (req,res)=> {
        const {id} = req.params;
        //
        const product = await Product.find({ _id: id }, "-createdAt -deletedAt");
        try {
            return res.status(200).json({
                status: "Success!",
                message: "All is good",
                data: product
            })
        } catch(error) {
            return res.status(404).json({
                status: "error",
                message: "Product not found"
            })
        }
    },

    delete: async (req, res) => {
        const {id} = req.params;
        try {
            //De esta forma solo modificamos el valor de deletedAt.
            // Un deleted logico
            const productDelete = await Product.findByIdAndUpdate(
                { _id: id},
                { deletedAt: new Date() }
            );
            return res.status(200).json({
                status: "Success",
                deleted: true
            });
        } catch( error ) {
            return res.status(404).json({
                status: "error",
                message: "Could not delete product"
            })
        }
    },

    create: async (req, res) => {
        try {
            const products = await Product.create(req.body);
            return res.status(201).json({
                status: "Success",
                data: products
            })
        } catch (error) {
            return res.status(404).json({
                status: "error",
                message: "Could not delete product"
            })
        }
    },

    update: async (req, res)=> {
        try {
            const product = await Product.findOneAndUpdate(
                { _id: id },
                { $set: req.body },
                { new: true }
            )
            return res.status(200).json({
                status: "Success",
                data: product
            })
        } catch (error) {
            return res.status(404).json({
                status: "error",
                message: "Could not delete product"
            })
        }
    }
}