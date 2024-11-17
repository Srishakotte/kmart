import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";  // Import useDispatch
import { addToCart } from "../../pages/cartSlice";  // Import addToCart action
import "./product-card.css";

const ProductCard = ({ title, productItem }) => {
  const dispatch = useDispatch();  // Initialize dispatch
  const router = useNavigate();

  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };

  const handelAdd = (productItem) => {
    // Dispatch the addToCart action
    dispatch(addToCart({ product: productItem, num: 1 })); // Assuming adding 1 item to cart
    toast.success("Product has been added to cart!");
  };

  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      {title === "Big Discount" ? (
        <span className="discount">{productItem.discount}% Off</span>
      ) : null}
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.productName}</h3>
        <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={() => handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
