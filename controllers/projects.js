const projects = require('../models/projects.js')();

module.exports = () => {
    //Function to get users
    const getUserController = async (req, res) => {
        res.json(await projects.get());
    };
    //Function to get usersbt project
    const getSlug= async (req, res) => {
        res.json(await projects.get(req.params.slug));
    };
    //Function to add a prject
    const postController = async (req, res) => {
        let slug = req.body.slug;
        let name = req.body.name;
        let description = req.body.description;
        

        const result = await projects.add(slug, name, description);
        res.json(result);
    };
 
    return {
        getUserController,
        getSlug,
        postController
    };
}
