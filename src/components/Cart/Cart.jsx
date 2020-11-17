import React from 'react';
import classes from "./Cart.module.css";
console.log(classes)




class Cart extends React.Component {

    render() {
        return (
            <div className={classes.item}>
                <div className={classes.image}>
                    <img className={classes.img} src={this.props.foto} />
                </div>
                <div className={classes.name}>{this.props.hotelName}</div>
                <button className={classes.button}   > Забронировать</button>
            </div>
        )
    }
}

export default Cart;
