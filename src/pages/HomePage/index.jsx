<<<<<<< HEAD
import React, { Component } from "react";
import _ from "lodash";
import Product from "./../../components/Product";
import Header from "./../../components/Header";
import Footer from "./../../components/Footer";
import Recommendations from "./../../components/Recommendations";
import mockedData from "./CatalogMock.js";
=======
import React, { Component } from 'react';
import _ from 'lodash';
import GridProduct from './../../components/GridProduct';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Recommendations from '../../components/Recommendations';
import mockedData from './../../CatalogMock.js';


>>>>>>> ListsProduct

class HomePage extends Component {
  state = {
    productList: mockedData
  };

  render = () => {
    const { productList } = this.state;

    return (
      <React.Fragment>
<<<<<<< HEAD
        <Header />
        <Recommendations />

        <div className="container">
          <div className="row product">
            {_.map(productList, product => (
              <Product key={`Product-${product.id}`} data={product} />
            ))}
          </div>
        </div>

        <Footer />
=======
				
				<Header />
				<Recommendations />

				<div className="container">
						<div className="row product">
								{_.map(productList, product => (
									<GridProduct
										key={`Product-${product.id}`}
										data={product}
									/>
								))}
						</div>
				</div>

				<Footer />
      
>>>>>>> ListsProduct
      </React.Fragment>
    );
  };
}

export default HomePage;
