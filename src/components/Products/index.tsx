import { useProducts } from "../../Providers/Products";
import Container from "../Container";
import Card from "../CardProducts";

const ProductsList = () => {
  const { products, addToCart } = useProducts();
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
    </Container>
  );
};
export default ProductsList;
