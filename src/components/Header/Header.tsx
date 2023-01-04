import logo from '../../assets/logoCoffeeDelivery.svg'
import { MapPin, ShoppingCart } from "phosphor-react";
import './Header.css'

export function Header(){
  return(
    <header>
      <img src={logo} />
      <div className='container-btn'>
      <div className='localization-element'>
        Porto Alegre,RS
      <MapPin size={22} color="#9c6ef2" weight="duotone" />
      </div>
      <button>
      <ShoppingCart size={22} color="#C47F17" weight="regular" />
      </button>
      </div>
      
    </header>
  )
}