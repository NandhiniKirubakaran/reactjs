import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import { Card, CardMedia, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './global';


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
        <a href="/add-to-cart"><AddShoppingCartIcon/></a>
        <a href="/"><LogoutIcon /></a>
      </div>
      </nav>

    <ProductList />

    </div>
  );
}

function ProductList(){
  // const mobiles = [
  //   {
  //     model: "OnePlus 9 5G",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcN46rKgefV9Li5_jwcMzNUsWeMmiD3RCTKQ&usqp=CAU",
  //     company: "Oneplus",
  //     price: "₹35,299"
  //   },
  //   {
  //     model: "Iphone 13 mini",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB6f7SUutbWilVmrmQRMJV3Oxdvudg28eHfmXcZKk8zreV4SfhTwskSWswsBvG8oP5Ugc&usqp=CAU",
  //     company: "Apple",
  //     price: "₹89,999"
  //   },
  //   {
  //     model: "Samsung s21 ultra",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlzoNgrjnbEkYZxzcTBCEYAVydFavA_qllr-d2ODf1ezGV4gxTUupZ-YVTYJdrMZK18Js&usqp=CAU",
  //     company: "Samsung",
  //     price: "₹55,000"
  //   },
  //   {
  //     model: "Xiomi mi 11",
  //     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-DffaWjYjh-zXitjdO6NIq9TVemX8sU--N2P5qm5ZPamFJvncLXFZrHNv-m7Q6A6vGTI&usqp=CAU",
  //     company: "Xiomi",
  //     price: "₹28,099"
  //   }
  // ];

  const [mobiles, setMobiles ] = useState([]);

  const getMobiles = () => {
    fetch(`${API}/mobiles`, {
      method: "GET",
    })
    .then((data) => data.json())
    .then((ms) => setMobiles(ms));
  };

  useEffect(() => getMobiles(), []);

  return(
    <div className='mobile-list-container'>
      { mobiles.map ((mv, index) => (
        <Products key={index} mobile={mv} getMobiles={getMobiles} />
      ))};
    </div>
  );
}


function Products( {mobile} ){
 
  const navigate = useNavigate();
  return(
    <div>
      <Card className='card-container'>
        <img className='card-img' src={mobile.img} alt={mobile.model}/>
        <h4 className='card-model'>{mobile.model}</h4>
        <h4 className='card-price'>{mobile.price}</h4>
        
        <button type="submit" 
        className='card-button'
        onClick={ () => navigate("/add-to-cart")}>
        Buy Item</button>

      </Card>
    </div>
  );
}

