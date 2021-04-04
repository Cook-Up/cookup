const mongoose = require('mongoose');
const UserModel = require("./models/userModel");
const OrderModel = require("./models/orderModel");
const KitchenModel = require('./models/kitchenModel');

const MONGODB_URL = process.env.DATABASE_ACCESS;

//Initialize connection to MongoDB
const init = function () {
    mongoose.connect(MONGODB_URL);
};

init();

const Users = {
    create: async function (data) {
        console.log("dbutil>newUser: creating user with data");
        console.log(data);

        const user = new UserModel(data);
        return await user.save()
    },

    get: async function (uID) {
        return await UserModel.findOne({
            uID: uID
        })
    },

    getAll: async function (obj) {
        const users = await UserModel.find();
        return users;
    }
};


const Orders = {
    create: async function (kID, obj) {
        return new Promise((resolve, reject) => {
            KitchenModel.findOne({
                kID: kID
            }).then(async kitchen => {
                if (kitchen !== null) {
                    obj['kitchen'] = kitchen;
                    const order = new OrderModel(obj);
                    await order.save().then(resp => resolve(resp));
                } else {
                    reject(`Error: No kitchen found with kID ${kID}`);
                }
            }).catch(error => {
                reject(error);
                console.error(error);
            });
        });

    },

    getAll: async function () {
        return await OrderModel.find();
    }
};

const Kitchen = {
    create: async function (uID, obj) {
        await UserModel.findOne({
            uID: uID
        }).then(user => {
            console.log(user);
            obj['owner'] = user;
            const kitchen = new KitchenModel(obj);
            kitchen.save();
        }).catch(error => {
            console.error(error);
        });
    }
};

module.exports = {
    Users: Users,
    Orders: Orders,
    Kitchen: Kitchen
};