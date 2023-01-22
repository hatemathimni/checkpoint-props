import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

function CardItem({name,address}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>
          {address}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
export default CardItem;
 CardItem.propTypes ={
    name:PropTypes.string,
    address:PropTypes.string

 }
 CardItem.defaultProps ={
    name :'Hatem' ,
    address : 'Tunis'
 }