import { useShoppingCart } from "../../utilities/shoppingCartContext";
import storeItems from '../../data/items';
import { formatCurrency } from "./formatCurrency";
import styled from "styled-components";

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const {removeFromCart} = useShoppingCart(); 
    
    const item = storeItems.find(i => i.id === id)
    if(item == null) return null
    
  return (
    <div className="d-flex align-items-center">
        <img
         src={item.imgUrl}
         style={{width:"125px", height: "75px", objectFit: "cover"}}
        /> 
        <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </div>
  )
}
const Button = styled.button`
    
`

export default CartItem