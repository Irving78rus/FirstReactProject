import React from 'react';
import classes from "./Header.module.css"; 
console.log(classes)
const Header = () => {
    return <header className={classes.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' className={classes.img} />
      <div  className= {classes.list}  >
        
        <a href='Profile' className={classes.a}>Главная</a> 
        <a href='' className={classes.a}>О нас</a>  
        <a href='' className={classes.a}>Отзывы</a> 
        
      </div>
    </header>
}

export default Header;