const db = require('../db')();
const COLLECTION = 'users';


module.exports = () => {
    // Function to get the email 
    const get = async (email = null) => {
        if (!email) {
            const allUsers = await db.get(COLLECTION);
            return allUsers;
        }
        const oneUser = await db.get(COLLECTION, { email });
        return oneUser;
    }


// Function to add new user
    const add = async (name, email, usertype, key) => {
        const results = await db.add(COLLECTION, {
        name: name,
        email: email,
        usertype: usertype,
        key: key,
        });
    return results.result;
    };

    return {
    get,
    add,
    
    };
}
