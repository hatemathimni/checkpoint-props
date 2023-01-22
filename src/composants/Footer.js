import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types'

function Footer ({email,phone})
{
    return(
        <Card>
      <Card.Header as="h5">{email}</Card.Header>
      <Card.Body>
        <Card.Title>{phone}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

export default Footer
Footer.propTypes ={
    email:PropTypes.string,
    phone:PropTypes.number
}

Footer.defaultProps = {
 email : 'athimnihatem@hotmail.fr',
 phone : '27249537'  

}