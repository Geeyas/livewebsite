import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'tachyons';

const Cards = ({ menuData }) => {

    return (
        <>
            <section className='main-card--container'>
                {/* using map for loop */}
                {menuData.map((curElement) => {
                    return (
                        <>
                            <div className='card-container' key={curElement.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{curElement.id}</span>
                                        <span className='card-author subtle'> {curElement.category}</span>
                                        <h2 className='card-title'> {curElement.name}</h2>
                                        <span className='card-description subtle'>
                                            {curElement.description}
                                        </span>
                                        <hr />
                                        <img src={curElement.image} alt="images" className='card-media image' />
                                        <span className='card-tag subtle'>Order now</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default Cards