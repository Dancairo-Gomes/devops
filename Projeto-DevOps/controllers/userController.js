const express = require('express');
const User = require('../models/Users');
const router = express.Router();
const Users = require('../models/Users')

router.get('/', (req, res) => {
    (async() => {
        const findAllUsers = await Users.findAll();
        return res.status(201).json({
            data: findAllUsers,
            message: 'Users has ben listed'
        })
    })();
});

router.post('/user', (req, res) => {
    const { email, password } = req.body;
    (async() => {
        const findUserOnByEmail = await Users.findOne({where: {email: email}});
        if(findUserOnByEmail == undefined){
               const createResult = await Users.create({
                    email: email,
                    password: password
                })
                return res.status(201).json({
                    data: createResult,
                    message: 'New user has been created'
                })
        }else{
                return res.status(400).json({
                    message: 'This email alredy exists'
            })
         } 
    })();
});

router.delete('/user/:id', (req, res) => {
    const  { id }  = req.params;
    (async() => {
        const findUserById = await Users.findOne({where: {id: id}});
        console.log(findUserById);
        if(findUserById != undefined){
            await User.destroy({where: {id: id}});
            return res.status(201).json({
                message: 'User has been deleted'
                });   
        }else{
            return res.status(404).json({
                messageError: 'Is not possible delete this user'
            });
        }       
    })();
});

router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { email, password } = req.body;
    (async() => {
    const findUserById = await Users.findOne({where: {id: id}});  
    if(findUserById != undefined){
        await Users.update({
            email: email,
            password: password
        },{where: {id: id}})
        return res.status(201).json({
            message: 'User has been updated'
        });
    }else{
        res.status(400).json({
            message: 'could not update this user'
        })
    } 
    })();
});




module.exports = router;