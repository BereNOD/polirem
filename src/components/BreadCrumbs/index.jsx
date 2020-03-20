import React from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

import "./styles.scss";

class BreadCrumbs extends React.Component {
  render = () => {
    const { Home, Catalog, Cat } = this.props;
    return (
      <div>
        {Home ? (
          <Breadcrumb aria-label="breadcrumb">
            <BreadcrumbItem active>Зоотовары</BreadcrumbItem>
          </Breadcrumb>
        ) : null}
        {Catalog ? (
          <Breadcrumb separator="›" aria-label="breadcrumb">
            <BreadcrumbItem>
              <a href="/">Зоотовары</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Каталог</BreadcrumbItem>
          </Breadcrumb>
        ) : null}
        {Cat ? (
          <Breadcrumb separator="›" aria-label="breadcrumb">
            <BreadcrumbItem>
              <a href="/">Зоотовары</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <a href="/catalog">Каталог</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>Кошки</BreadcrumbItem>
          </Breadcrumb>
        ) : null}
      </div>
    );
  };
}

export default BreadCrumbs;
