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
    { weight: "300гр", price: 450, sale: true },
    { weight: "1кг", price: 430, sale: true },
    { weight: "2кг", price: 420, sale: false },
    { weight: "10кг", price: 375, sale: false },
    { weight: "15кг", price: 350, sale: false },
    { weight: "20кг", price: 325, sale: false }
  ],
  sale: 400,
  price: 450,
  priceUnit: "RUB"
};

export default detailsProducts;
