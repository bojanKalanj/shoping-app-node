const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  //   var title = req.body.title;
  //   var imageURL = req.body.imageURL;
  //   var description = req.body.description;
  //   var price = req.body.price;
  var { title, imageURL, description, price } = req.body;
  const product = new Product(title, imageURL, description, price);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin products',
      path: '/admin/products'
    });
  });
};
