import { Col, Container, Row } from "react-bootstrap"
import storeitems from '../../data/items.json';
import { useShoppingCart } from "../../utilities/shoppingCartContext";

import { Card } from 'react-bootstrap';
import { formatCurrency } from '../ui/formatCurrency';

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

  

function Store({id, name, price, imgUrl }: StoreItemProps)  {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
} = useShoppingCart()
const quantity = getItemQuantity(id);

  return (
    <div>
       {storeitems.map(item => (
      <Col key={item.id}>
        <Card className='card-wrapper h-100 rounded-5'>
            <div className='card-image--wrapper'>
                <Card.Img className='card-img h-100' variant = "top" src={item.imgUrl} style={{ objectFit: "cover", objectPosition: "center" }}/>
            </div>
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-center mb-4'>
                <span className='fs-2 card-title'>{item.name}</span>
                {/* <span className='ms-2 text-muted'>{formatCurrency(item.price)}</span> */}
            </Card.Title>
            
            {/* <div className='mt-mt-auto'>
                {quantity === 0 ? (
                    <Button className='card-button w-100' onClick={() => increaseCartQuantity(id)}>
                        + Add to Cart
                    </Button>
                ): (
                    <div className='d-flex align-items-center flex-column' style={{ gap: ".5rem" }}>
                        <div  className='d-flex align-items-center justify-content-center' style={{ gap: ".5rem" }}>
                            <Button onClick={() => decreaseCartQuantity(id)}>
                                -
                            </Button>
                            <div>
                                <span className='fs-3'>{quantity}</span> in cart
                            </div>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                        </div>
                        <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">
                            Remove
                        </Button>
                    </div>
                ) }
            </div> */}
        </Card.Body>
        </Card> 
      </Col>
        ))}
    </div>
   
  )
}

export default Store;
