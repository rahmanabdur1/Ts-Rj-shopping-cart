import storeItems from "../../data/item.json"
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from "./StoreItem";

export function Store() {
  return <>

    <h1>Store</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
      {storeItems.map(item => (
        <Col key={item.id}>
          <StoreItem item={item} />
        </Col>
      ))}
    </Row>
  </>
}