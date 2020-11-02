const db = require('../db')();
const COLLECTION = 'projects';


module.exports = () => {
    // Function 1
    const get = async (slug = null) => {
        if (!slug) {
            const allSlug = await db.get(COLLECTION);
            return allSlug;
        }
        const oneSlug = await db.get(COLLECTION, { slug });
        return oneSlug;
    };

    // Function 2
    const add = async (slug, name, description) => {
        const results = await db.add(COLLECTION, {
        slug: slug,
        name: name,
        description: description,
        });

    return results.result;
    };

    return {
    get,
    add,
    };

};