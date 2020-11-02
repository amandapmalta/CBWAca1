const comments = require('../models/comments.js')();

module.exports = () => {
    //Function to get comments
    const getAll = async (req, res)=>{
        res.json(await comments.getAllComments(req.params.slug));
    };

    // Function to add comments
    const postComment = async (req, res) => {
        let slugtitle = req.params.slug;
        let text = req.body.text;
        let author = req.body.author;
        const result = await comments.addComment(slug, text, author);
        res.json(result);
    };


    return {
    getAll,
    getAllComments,
    postComment
    };
};

