import React, { Component } from 'react';
import _ from 'lodash';
import ListProduct from './../../components/ListProduct';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import mockedData from './../../CatalogMock.js';


class CatalogPage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;

    return (
      <React.Fragment>
				
				<Header />

				<div className="container">
					<div className="left"></div>
					<div className="product">
							{_.map(productList, product => (
								<ListProduct
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
