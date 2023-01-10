import React from 'react'
import './Breakfast.css'
import { Card, Col, Row } from 'react-bootstrap';
import Breakfast1 from '../../../../images/breakfast/breakfast1.png'
import Breakfast2 from '../../../../images/breakfast/breakfast2.png'
import Breakfast3 from '../../../../images/breakfast/breakfast3.png'
import Breakfast4 from '../../../../images/breakfast/breakfast4.png'
import Breakfast5 from '../../../../images/breakfast/breakfast5.png'
import Breakfast6 from '../../../../images/breakfast/breakfast6.png'

const Breakfast = () => {
  return (
    <div>
      <Row className='row-style gx-4.5 row row-cols-1 m-0' md={3}>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5 ' variant="top" src={Breakfast1} />
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
            <Card.Img className='p-5' variant="top" src={Breakfast2} />
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
            <Card.Img className='p-5' variant="top" src={Breakfast3} />
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
            <Card.Img className='p-5' variant="top" src={Breakfast4} />
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
            <Card.Img className='p-5' variant="top" src={Breakfast5} />
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
            <Card.Img className='p-5' variant="top" src={Breakfast6} />
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

export default Breakfast