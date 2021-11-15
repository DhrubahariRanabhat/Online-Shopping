// imports
const express = require('express')
const app = express()
const port = 5000

var productRouter = require('./routes/product.js');
var saleRouter = require('./routes/sale.js');
var contactRouter = require('./routes/contact.js');
var accountRouter = require('./routes/account.js');
var productdetailsRouter = require('./routes/product-details.js');
var sortpriceRouter = require('./routes/sortprice.js');
var sortratingRouter = require('./routes/sortrating.js');
var sortsaleRouter = require('./routes/sortsale.js');
var cartRouter = require('./routes/cart.js');
var ordernowRouter = require('./routes/ordernow.js');
var traceRouter = require('./routes/trace.js');

//static files
app.use(express.static('public'))
app.use('/stylesheet',express.static(__dirname + 'public/stylesheet'))
app.use('/javascript',express.static(__dirname + 'public/javascript'))
app.use('/images',express.static(__dirname + 'public/images'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('',(req, res) => {
    res.render('index',{req: req})
   })
   app.use('/product',productRouter);
   app.use('/sale',saleRouter);
   app.use('/contact',contactRouter);
   app.use('/account',accountRouter);
   app.use('/product-details',productdetailsRouter);
   app.use('/sortprice',sortpriceRouter);
   app.use('/sortrating',sortratingRouter);
   app.use('/sortsale',sortsaleRouter);
   app.use('/cart',cartRouter);
   app.use('/ordernow',ordernowRouter);
   app.use('/trace',traceRouter);


   //listen on port 5000
   app.listen(port, () => console.info('Ready To Proceed'))