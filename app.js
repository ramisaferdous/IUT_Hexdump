const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('html_files'));
app.use('/content_html_files', express.static(path.join(__dirname, 'content_html_files')));
app.use('/exercise_html_files', express.static(path.join(__dirname, 'exercise_html_files')));
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(session({
    secret: 'your-secret-key', 
    resave: false,
    saveUninitialized: true,
}));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'html_files', 'landing.html'));
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
app.use(loginRoutes)
app.use(dashboardRoutes);
app.use(graphVisualizationRoutes);
app.use(learningModeRoutes);
app.use(codeExecutionRoutes);
app.use(exerciseRoutes);


const port = 3000;
app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});

