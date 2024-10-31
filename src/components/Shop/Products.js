import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const products = [
  {
    id: "10001",
    title: "Laptop",
    price: 1000,
    description: "Acer laptop. Cool thing!",
  },
  {
    id: "10002",
    title: "Mouse",
    price: 50,
    description: "Every cat wants such mouse!",
  },
  {
    id: "10003",
    title: "Keyboard",
    price: 100,
    description: "Push te tempo..!",
  },
  {
    id: "10004",
    title: "Headphones",
    price: 23,
    description: "Super puper sound",
  },
  {
    id: "10005",
    title: "Table",
    price: 123,
    description: "Buy today 1 get 2!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
