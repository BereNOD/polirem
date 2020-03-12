import React, { Component } from 'react';
import _ from 'lodash';
import Product from './../../components/Product';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Recommendations from './../../components/Recommendations';
import mockedData from './CatalogMock.js';



class CatalogPage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;

    return (
      <React.Fragment>
				
				<Header />
				<Recommendations />

				<div className="container">
						<div className="row product">
								{_.map(productList, product => (
									<Product
										key={`Product-${product.id}`}
										data={product}
									/>
								))}
						</div>
				</div>

				<Footer />
      
      </React.Fragment>
    );
  };
}

export default CatalogPage;
