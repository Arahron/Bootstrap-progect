import React from 'react'
import CardItem from './cart/CardItem';
import Slider from './Slider';

const Home = (props) => {
  return (
    <div>
        <Slider></Slider>
        <CardItem item={props.item}/>
    </div>
  )
}

export default Home