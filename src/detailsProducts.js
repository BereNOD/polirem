const detailsProducts = {
  id: 0,
  image: "image/product.png",
  rate: 2,
  in_stock: true,
  reviews: [
    {
      photo: "test",
      name: "test",
      text: "test"
    },
    {
      photo: "test2",
      name: "test2",
      text: "test2"
    }
  ],
  delivery_period: 1,
  title:
    "1Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак",
  details_weights: [
    { weight: "0.3", unit: "300гр", price: 450, sale: 500 },
    { weight: "1", unit: "1кг", price: 430, sale: 500 },
    { weight: "2", unit: "2кг", price: 420 },
    { weight: "10", unit: "10кг", price: 375 },
    { weight: "15", unit: "15кг", price: 350, sale: 400 },
    { weight: "20", unit: "20кг", price: 325 }
  ],
  sale: 400,
  price: 450,
  priceUnit: "RUB"
};

export default detailsProducts;
