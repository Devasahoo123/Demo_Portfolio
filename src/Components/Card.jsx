import React from 'react'
import img from '../images/img1.jpeg'
import { NavLink } from 'react-router-dom'
function Card(props) {
  return (
    <>
       <div className='col-md-4 col-10 mx-auto'>
            <div class="card">
                <img class="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">{props.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <NavLink to ="#" class="btn btn-outline-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
