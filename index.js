const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

// About Us Page
app.get('/about', (req, res) => {
    res.render('about');
});

// Privacy Policy Page
app.get('/privacy', (req, res) => {
    res.render('privacy');
});

// Blog Page
app.get('/blog', (req, res) => {
    res.render('blog');
});

// Service Pages
app.get('/gmail-pva', (req, res) => {
    res.render('services/gmail');
});

app.get('/instagram-pva', (req, res) => {
    res.render('services/instagram');
});

app.get('/threads-pva', (req, res) => {
    res.render('services/threads');
});

app.get('/facebook-pva', (req, res) => {
    res.render('services/facebook');
});

app.get('/linkedin-pva', (req, res) => {
    res.render('services/linkedin');
});

app.get('/twitter-pva', (req, res) => {
    res.render('services/twitter');
});

app.get('/google-voice-pva', (req, res) => {
    res.render('services/google-voice');
});

app.get('/youtube-pva', (req, res) => {
    res.render('services/youtube');
});

app.get('/tiktok-pva', (req, res) => {
    res.render('services/tiktok');
});

app.get('/naver-pva', (req, res) => {
    res.render('services/naver');
});

// Order Now Page
app.get('/order-now', (req, res) => {
    res.render('order');
});

// Checkout Page
app.get('/checkout', (req, res) => {
    const product = req.query.product || '';
    res.render('checkout', { product });
});

// Handle order submission
app.post('/submit-order', (req, res) => {
    // Handle the order submission logic here
    // For now, just render a success message
    const { email, telegram, product, quantity, payment, blockchainFee, txid } = req.body;
    res.send(`
        <h1>Order Submitted Successfully!</h1>
        <p>Email: ${email}</p>
        <p>Telegram: ${telegram}</p>
        <p>Product: ${product}</p>
        <p>Quantity: ${quantity}</p>
        <p>Payment: ${payment}</p>
        <p>Blockchain Fee: ${blockchainFee}</p>
        <p>TXID: ${txid}</p>
        <a href="/">Back to Home</a>
    `);
});

app.listen(PORT, () => {
    console.log(`PVA Panel server running on port ${PORT}`);
});
