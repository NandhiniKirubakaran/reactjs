import { Products } from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from './Redux/Reducers/cart.slice';
import React from 'react';
import { Link } from 'react-router-dom';

// export const mobiles = [];

export function HomePage() {

  return (
    <div className="nav-bar-itmes">
      
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Electronics</a>
          </li>
          <li>
            <a href="#">Styles</a>
          </li>
          <li>
            <a href="#">Home Decoration</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
        </ul>

      <div className='nav-bar-cart'>
        <Link to={"/add-to-cart"}>Cart</Link>
        <Link to={"/"}>Logout</Link>
      </div>
      </nav>

    <ProductList />

    </div>
  );
}



function ProductList(){

const { items = [] } = useSelector((state) => state.product);
const dispatcher = useDispatch()

const hanldeCart = (mobile) => {
  if(mobile.model){
    dispatcher(addItemToCart(mobile));
  }
};

  return(
    <div className='mobile-list-container'>
      {items.map ((mv, index) => (
        <Products key={index} mobile={mv} onAddToCart={hanldeCart} />
      ))};
    </div>
  );
}



  // fetch using API 

// const [mobiles, setMobiles ] = useState([]);

// const getMobiles = () => {
//   fetch(`${API}/mobiles`, {
//     method: "GET",
//   })
//   .then((data) => data.json())
//   .then((ms) => setMobiles(ms));
// };
// useEffect(() => getMobiles(), []);