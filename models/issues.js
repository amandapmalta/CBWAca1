const db = require('../db')();
const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'issues';

module.exports = () => {

    // Function to get issues by number
    const get = async (slug = null) => {
        if (!slug) {
            const allIssue = await db.get(COLLECTION);
            return allIssue;
        }
        const oneIssue = await db.get(COLLECTION, { slug });
        return oneIssue;
    };

    // Function to add a new slug
    const add = async (slug, title, description, status, project_id) => {
        const counter = await db.count(COLLECTION);
        const results = await db.add(COLLECTION, {
            slug: slug - counter + 1,
            title: title,
            description: description,
            status: status,
            project_id: new ObjectID(project_id),
            comments: []
        });

        return results.result;
    }
    // Function to get issues by project
    const getByProject = async (slug) =>{
        let expression = new RegExp(slug);
        const byProject = await db.get(COLLECTION,{ slug: expression});
        return byProject;
    };

    return {
    get,
    add,
    getByProject
    
    };

} 