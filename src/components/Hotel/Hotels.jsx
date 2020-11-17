import React from 'react';
import Cart from '../Cart/Cart';
import classes from "../Hotel/Hotels.module.css";
const Hotels = () => {
    return ( 
        <section  >
            <h2  >Отели</h2>
            <div className={classes.items}>
                 <Cart hotelName = 'Plaza1' foto = 'https://greekbook.ru/wp-content/uploads/2016/05/katikies_hotel_santorini_pool_bar_01.jpg'/>
                 <Cart hotelName = 'Plaza2 'foto = 'https://img3.goodfon.ru/wallpaper/nbig/3/df/otel-areal-basseyn-plyazh.jpg' /> 
                 <Cart hotelName = 'Plaza3' foto = 'https://greekbook.ru/wp-content/uploads/2016/05/katikies_hotel_santorini_pool_bar_01.jpg' />
                 <Cart hotelName = 'Plaza4' foto = 'https://img3.goodfon.ru/wallpaper/nbig/3/df/otel-areal-basseyn-plyazh.jpg'/>
                 <Cart hotelName = 'Plaza5' foto = 'https://greekbook.ru/wp-content/uploads/2016/05/katikies_hotel_santorini_pool_bar_01.jpg'/>
                 <Cart hotelName = 'Plaza6' foto = 'https://img3.goodfon.ru/wallpaper/nbig/3/df/otel-areal-basseyn-plyazh.jpg'/>
                 
            </div>
        </section>
    )
}

export default Hotels;