const express = require('express');
const bodyParser = require('body-parser');

const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const users = require('./controllers/users')();
const projects = require('./controllers/projects')();
const issues = require('./controllers/issues')();
const comments = require('./controllers/comments')();

const app = module.exports = express();

// logging
app.use((req, res, next) =>{
    // Display log for requests
    console.logg('[%s] %s -- %s', new Date(), req.method, req.url);
    next();
});

app.use(bodyParser.json());

app.get('/users', users.getController); // Get all users
app.post('/users', users.postController); // Add new user
app.get('/users/:email', users.getUserEmail); // Get by email


app.get('/projects', projects.getController); // Get all projects
app.post('/projects', projects.postController); // Add project
app.get('/projects/:slug', projects.getSlug); // Get projects by name 

app.get('/issues', issues.getController); // Get issues
app.post('/issues', issues.postController); // Add issue
app.get('/issues/:slug', issues.getIssue); // Get issues by name
app.get('/projects/:slug/issues', issues.getByProject); // Get issues by project

app.get('/comments', comments.getController); // Get all comments
app.post('/comments', comments.postController); // Add comments
app.get('/comments/:commentID', comments.getComment); // get comments by ID

app.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});

// 404 
app.use((req, res) => {
    res.status(404).json({
     error: 404,
     message: 'Route not found',
});
    





});
