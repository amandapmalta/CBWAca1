const users = require('../models/users.js')();

module.exports = () => {
    //Function to get users
    const getUserController = async (req, res) => {
        res.json(await users.get());
    };
    //Function to get user by email
    const getUserEmail = async (req, res) => {
        res.json(await users.get(req.params.email));
    };
    //Fuction to add user
    const postController = async (req, res) => {
        let name = req.body.name;
        let email = req.body.email;
        let usertype = req.body.usertype;
        let key = req.body.key;

        const result = await users.add(name, email, usertype, key);
        res.json(result);
    }
    return {
        getUserController,
        getUserEmail,
        postController
    };
};
