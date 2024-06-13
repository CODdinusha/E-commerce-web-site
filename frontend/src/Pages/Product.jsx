import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb'; // Ensure the path is correct
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'; // Ensure the path is correct

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  console.log(productId);

  const product = all_product.find((e) => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
    </div>
  );
}

export default Product;
