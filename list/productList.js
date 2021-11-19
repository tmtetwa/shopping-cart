var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/');

var products =[
  new Product({
    imagePath: 'https://static.highsnobiety.com/thumbor/x8Z6GRqmudB24u2r1iorq-UVBtw=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/03/14131429/iceberg-motorsport-sneakers-ss19-04.jpg',
    name: 'Sneaker1',
    description: 'Multicolored sneaker',
    price: 600
  }),
  new Product({
    imagePath: 'https://static.r-shop.gr/media/catalog/product/cache/1/thumbnail/2000x2667/9df78eab33525d08d6e5fb8d27136e95/w/_/w_5715300644-00004.jpg',
    name: 'Sneaker2',
    description: 'White sneaker',
    price: 800
  }),
  new Product({
    imagePath: 'https://www.goodfellaspawnshop.com/wp-content/uploads/2018/08/Air-Jordan-1.jpg',
    name: 'Sneaker3',
    description: 'Jordan sneaker',
    price: 1000
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[1].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
