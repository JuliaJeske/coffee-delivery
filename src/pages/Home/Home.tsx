import {CoffeeList, List} from "./styles"
import { Header } from "../../components/Header/Header";
import { Intro } from "../../components/Intro/Intro";
import { coffees } from "../../data/coffe";



interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  type: string;
  description: string;
}


export function Home(){
  
  return (
    <>
     <Header />
    <Intro />
    <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </>
   

  )
}