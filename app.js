const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('html_files'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/content_html_files', express.static(path.join(__dirname, 'content_html_files')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const signupRoutes = require('./routes/signup.routes');
const exerciseRoutes = require('./routes/exercise.routes');
const loginRoutes = require('./routes/login.routes');
const dashboardRoutes = require('./routes/dashboard.routes');
const learningModeRoutes = require('./routes/learningMode.routes');
const graphVisualizationRoutes = require('./routes/graphVisualization.routes');
const codeExecutionRoutes = require('./routes/codeExecution.routes');
const promptRoutes = require('./routes/prompt.routes');

app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
}));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'html_files', 'landingPage.html'));
});



function ensureAuthenticated(req, res, next) {
    const publicPaths = ['/', '/login', '/signup'];
    if (publicPaths.includes(req.path) || req.session.isAuthenticated) {
        return next();
    }
    res.redirect('/login');
}

app.use(ensureAuthenticated);


app.use(signupRoutes);
app.use(loginRoutes);
app.use(dashboardRoutes);
app.use(graphVisualizationRoutes);
app.use(learningModeRoutes);
app.use(codeExecutionRoutes);
app.use(promptRoutes);
app.use(exerciseRoutes);



const port = 3001;
app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});

