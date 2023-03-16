import { ReactComponent as Cart } from '../public/images/iconcart.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <main className='content'>
        <picture>
          <source srcSet='/images/image-product-desktop.jpg'media="(min-width: 600px  )"/>
          <img src="/images/image-product-mobile.jpg" alt="" />
        </picture>
        <article>
          <p>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
            Perfumer-Creator for the House of CHANEL</p>
          <h2>
            $149.99
            <span>$169.99</span>
          </h2>
          <button><Cart /> <span>Add to Cart</span> </button>
        </article>
      </main>
    </div>
  )
}

export default App
