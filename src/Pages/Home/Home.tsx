import Products from '../Product/Products'

const Home = ({product}:any) => {
  return (
    <div>
      <Products filterProducts={product}/>
    </div>
  )
}

export default Home