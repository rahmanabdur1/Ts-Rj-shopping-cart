
import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

interface Items {
  item: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  };
}

export function StoreItem({ item }: Items) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(item.id);

  const handleDecreaseQuantity = () => {
    decreaseCartQuantity(item.id);
  };

  const handleAddToCart = () => {
    increaseCartQuantity(item.id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={item.imgUrl} height="200px" style={{ objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{item.name}</span>
          <span className="ms-2 text-muted">${item.price.toFixed(2)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={handleAddToCart}>
              + Add To Cart
            </Button>
          ) : (
            <>
              <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                  <Button onClick={handleDecreaseQuantity}>-</Button>
                  <div>
                    <span className="fs-3">{quantity}</span> in cart
                  </div>
                  <Button onClick={handleAddToCart}>+</Button>
                </div>
                <Button onClick={handleRemoveFromCart} variant="danger" size="sm">
                  Remove
                </Button>
              </div>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
