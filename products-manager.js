var _ = require('lodash');
var nextId = require('./next-id');

var products = [{
  id: nextId(),
  name: 'Cocacola',
  price: 3.5
}];

module.exports = {
  getAll: function () {
    return products;
  },
  get: function (id) {
    return _.find(products, function (item) {
      return item.id === parseInt(id);
    });
  },
  save: function (data) {
    products.push({
      id: nextId(),
      name: data.name,
      price: data.price
    });
  }
};