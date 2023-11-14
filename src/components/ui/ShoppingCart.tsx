import { useShoppingCart } from "../../utilities/shoppingCartContext";
import { formatCurrency } from "../ui/formatCurrency";
import CartItem from "./CartItem";
import storeItems from '../../data/items';

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({isOpen}: ShoppingCartProps) => {
  const {closeCart, cartItems} = useShoppingCart();
  
  return (
    <div >
         <div >
           <div> Cart </div>
          </div>      
          <div>
            <div>
               {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
               ))}
               <div className="ms-auto fw-bold fs-5">
                Total 
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find(i => i.id === cartItem.id)
                    return total + (item?.price || 0) * cartItem.quantity
                  }, 0)
                )}
               </div>
            </div>
          </div>
    </div>
  )
}

export default ShoppingCart