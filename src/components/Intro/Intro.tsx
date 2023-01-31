import Illustration from '../../assets/coffeeIllustration.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import './Intro.css'

export function Intro(){
  return (
    <>
     <div className="container-intro">
      <div>
      <h1>Encontre o café perfeito para qualquer hora do dia</h1>
      <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
      </div>
     <img src={Illustration} />
     </div>
     <div className="container-list-icons">
     <ul>
      <li>
      <p>Compra simples e segura</p>
      <button className='orange'><ShoppingCart size={20} color="#fff" weight="regular" /></button>
      
      </li>
      <li>
      <p>Entrega rápida e rastreada</p>
      <button className='yellow'><Timer size={20} color="#fff" weight="regular" /></button>
      
      </li>
      <li>
      <p>Embalagem mantém o café intacto</p>
      <button className='gray'><Package size={20} color="#fff" weight="regular" /></button>
      
      </li>
      <li>
      <p>O café chega fresquinho até você</p>
      <button className='purple'><Coffee size={20} color="#dbdbdb" weight="regular" /></button>
    
      </li>
     </ul>
     </div>
    
    </>
  )
}