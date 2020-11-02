const issues = require('../models/issues.js')();

module.exports = () => {
    // Function to get issue
    const getUserController = async (req, res) => {
        res.json(await issues.get());
    };
    //Function to get issue by number
    const getIssue = async (req, res) => {
        res.json(await issues.get(req.params.slug));
    };
    //Function to get issue by project
    const getByProject = async (req, res) => {
        res.json(await issues.getByProject(req.params.slug));
    };
    const postController = async (req, res) => {
        let slug = req.params.slug;
        let title = req.body.title;
        let description = req.body.description;
        let project_id = req.body.project_id;

        const result = await issues.add(slug, title, description, project_id);
        res.json(result);
    };

    return {
        getUserController,
        getIssue,
        postController,
        getByProject
    };
 
}
