import './App.css'
import ProductCard from './components/ProductCard'
import ProductContainer from './components/ProductContainer'
import StartOfSlider from './components/StartOfSlider'


function App() {

const products = [

  {name:"مانیتور سامسونگ 27 اینچ" , price: 6200000 , src :"/src/assets/img/samsung1.png"},
  {name:"مانیتور هواوی 24 اینچ" , price: 4200000, src :"/src/assets/img/huaw1.png"},
  {name:"مانیتور ال جی 29 اینچ" , price: 6800000 ,src :"/src/assets/img/lg1.png"},
  {name:"مانیتور ایسوس 27 اینچ" , price: 10500000, src :"/src/assets/img/asus1.png"},
  {name:"مانیتور سامسونگ 27 اینچ" , price: 6200000 , src :"/src/assets/img/samsung1.png"},
  {name:"مانیتور هواوی 24 اینچ" , price: 4200000, src :"/src/assets/img/huaw1.png"},
  {name:"مانیتور ال جی 29 اینچ" , price: 6800000 ,src :"/src/assets/img/lg1.png"},
  {name:"مانیتور ایسوس 27 اینچ" , price: 10500000, src :"/src/assets/img/asus1.png"}
 
]

  return (
  <div>

  <ProductContainer>
   
{
  products.map((item) =>{
    return <ProductCard product = {item} />
  }
  )
}
<StartOfSlider/>
</ProductContainer> 
  </div>
  )
}

export default App
