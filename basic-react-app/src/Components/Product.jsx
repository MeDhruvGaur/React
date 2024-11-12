import './Product.css';

// function Product({ title, Description, features }) {
function Product({ title, price, features }) {
    let isDiscount = price > 30000;
    let styles = {backgroundColor : isDiscount ? "blue" : null};
    // const list = features.map((feature) => <li>{feature}</li>);
    // console.log(features);
    // console.log(props);
    return (
        <div className='Product' style={styles}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5>  
            {/* {price > 30000 ? <p>"Discount of 5%"</p> : null} */}
            {isDiscount ? <p>"Discount of 5%"</p> : <a href='www.google.com'>Discount Lelo</a>}
        </div>
    );
}

export default Product; 