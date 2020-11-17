import React from 'react';

const Navbar = () => {
    return <nav className='nav'>
        <div>
            <a href = "/ticket">Авибилеты</a>
        </div>
        <div>
            <a href = "/auto" >Аренда авто</a>
        </div><div>
            <a href = "/taxi" >Такси</a>
        </div>
        <div>
            <a>Услуги</a>
        </div>
        <div>
            <a>Номера</a>
        </div>
    </nav>
}

export default Navbar;