import { Col, Container, Row } from "react-bootstrap"
import StoreItem from "../ui/StoreItem"
import storeitems from '../../data/items.json';

const Store = () => {
  console.log(storeitems)
  return (
    <Container>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-5">
      {storeitems.map(item => (
          <Col key={item.id}>
          <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Store