import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { products } from "../utils/products";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate is the correct hook in v6
import ProductDetails from "../components/ProductDetails/ProductDetails";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

  useWindowScrollToTop();

  useEffect(() => {
    const product = products.find((item) => parseInt(item.id) === parseInt(id));
    if (product) {
      setSelectedProduct(product);
    } else {
      // Redirect if the product doesn't exist
      navigate("/not-found"); // This will navigate to a "not-found" page if product is not found
    }
  }, [id, navigate]);

  if (!selectedProduct) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <Fragment>
      <Banner title={selectedProduct?.productName} />
      <ProductDetails selectedProduct={selectedProduct} />
    </Fragment>
  );
};

export default Product;
