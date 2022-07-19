const User = require("../models/userModels");
const {v4: uuidv4} = require("uuid");

const getAllUsers = async (req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const getSingleUser = async (req, res)=>{
    try {
        const user = await User.findOne({id: req.params.id})
        res.send(user)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const createUser = async(req, res)=>{
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        })
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
};

const updateUser = async (req, res)=>{
    try {
        const updatedUser = await User.findOne({id: req.params.id})
        updatedUser.name = req.body.name
        updatedUser.age = Number(req.body.age)
        await updatedUser.save()
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const deleteUser = async (req, res)=>{
    try {
        await User.deleteOne({id: req.params.id})
        res.status(200).json({message: "Successfully Deleted"})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = { getAllUsers, getSingleUser, createUser, updateUser, deleteUser}