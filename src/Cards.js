import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const Cards = ({title, description,IMAGE}) => {

    return (
        
        <>
        
            <div className='container'>
            <div class="card" style={{ width: '18rem' }}>
                <img class="card-img-top" src={IMAGE} />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description }</p>
                    <a href="#" class="btn btn-primary">Click to Visit</a>
                </div>
            </div>
            </div>
            
             


            

        </>


    )
}

export default Cards