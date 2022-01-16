import { useProducts } from "../../Providers/Products";
import Container from "../Container";
import Card from "../CardProducts";
import { CartContainer } from "./styles";
import CardCart from "../CardCart";

const ProductsList = () => {
  const { products, addToCart, cart, removeFromCart } = useProducts();
  console.log(cart);
  const filteredCart = cart.filter(
    (value, index, self) =>
      index === self.findIndex((elem) => elem.id === value.id)
  );
  return (
    <Container>
      {products.map((product) => (
        <Card
          onClick={() => addToCart(product)}
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
      <CartContainer>
        {filteredCart.map((product, index) => (
          <CardCart
            onClick={() => removeFromCart(product)}
            quantity={product.quantity}
            key={index}
            name={product.name}
            price={product.price}
          />
        ))}
      </CartContainer>
    </Container>
  );
};
export default ProductsList;
