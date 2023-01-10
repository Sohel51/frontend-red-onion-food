import React from 'react'
import './Dinner.css';
import { Card, Col, Row } from 'react-bootstrap';
import Dinner1 from '../../../../images/dinner/dinner1.png'
import Dinner2 from '../../../../images/dinner/dinner2.png'
import Dinner3 from '../../../../images/dinner/dinner3.png'
import Dinner4 from '../../../../images/dinner/dinner4.png'
import Dinner5 from '../../../../images/dinner/dinner5.png'
import Dinner6 from '../../../../images/dinner/dinner6.png'

const Dinner = () => {
  return (
    <div>
      <Row className='row-style gx-4.5 row row-cols-1 m-0' md={3}>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5 ' variant="top" src={Dinner1} />
            <Card.Body className='text-center p-0'>
              <Card.Title>Healthy Meal Plane</Card.Title>
              <Card.Text className='text-center'>
                How we dream about our future.
              </Card.Text>
              <Card.Text>
                <h2>9.99</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5' variant="top" src={Dinner2} />
            <Card.Body className='text-center p-0'>
              <Card.Title>Fried Chicken Bento</Card.Title>
              <Card.Text>
                How we dream about our future.
              </Card.Text>
              <Card.Text>
                <h2>6.99</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5' variant="top" src={Dinner3} />
            <Card.Body className='text-center p-0'>
              <Card.Title>Trragaon-Rubbid-Salmon</Card.Title>
              <Card.Text>
                How we dream about our future.
              </Card.Text>
              <Card.Text>
                <h2>23.99</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5' variant="top" src={Dinner4} />
            <Card.Body className='text-center p-0'>
              <Card.Title>Indian Lunch</Card.Title>
              <Card.Text>
                How we dream about our future.
              </Card.Text>
              <Card.Text>
                <h2>8.99</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5' variant="top" src={Dinner5} />
            <Card.Body className='text-center p-0'>
              <Card.Title>Beef Steak</Card.Title>
              <Card.Text>
                How we dream about our future.
              </Card.Text>
              <Card.Text>
                <h2>15.99</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5' variant="top" src={Dinner6} />
            <Card.Body className='text-center p-0'>
              <Card.Title>Honey-Soy-Salmon</Card.Title>
              <Card.Text>
                How we dream about our future.
              </Card.Text>
              <Card.Text>
                <h2>7.99</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dinner