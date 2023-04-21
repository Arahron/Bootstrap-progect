import { Button } from 'react-bootstrap';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom'

const Slider = () => {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img width={420} height={900}
          className="d-block w-100"
          src="./img/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Great views</p>

          <Link exact to={'/form'}>
          <Button variant="primary">
            Обратная связь
          </Button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img width={420} height={900}
          className="d-block w-100"
          src="./img/four.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Great views</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={420} height={900}
          className="d-block w-100"
          src="./img/second.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Great views</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider