import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import './Lunch.css';
import Lunch1 from '../../../../images/lunch/lunch (1).png'
import Lunch2 from '../../../../images/lunch/lunch (2).png'
import Lunch3 from '../../../../images/lunch/lunch (3).png'
import Lunch4 from '../../../../images/lunch/lunch (4).png'
import Lunch5 from '../../../../images/lunch/lunch (5).png'
import Lunch6 from '../../../../images/lunch/lunch (6).png'

const Lunch = () => {
  return (
    <div  id='lunch'>
      <Row className='row-style gx-4.5 row row-cols-1 m-0' md={3}>
        <Col>
          <Card className='card-style border-0'>
            <Card.Img className='p-5 ' variant="top" src={Lunch1} />
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
            <Card.Img className='p-5' variant="top" src={Lunch2} />
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
            <Card.Img className='p-5' variant="top" src={Lunch3} />
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
            <Card.Img className='p-5' variant="top" src={Lunch4} />
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
            <Card.Img className='p-5' variant="top" src={Lunch5} />
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
            <Card.Img className='p-5' variant="top" src={Lunch6} />
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
  );
};

export default Lunch;