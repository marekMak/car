const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home',{
        title:'Home'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title:'About'
    })
})

app.get('/contact', (req, res) => {
    res.render('contact',{
        title:'Contact'
    })
})

app.get('/signup', (req, res) => {
    res.render('signup',{
        title:'Sign up'
    })
})

app.listen(port,()=>{
    console.log('listening on port ' + port); 
});