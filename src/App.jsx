
import './App.css'

function App() {


  return (
    <div className="App">

      <div className="header-container">
        <img src="/images/bg-pattern-1.svg" alt="" />
        <img src="/images/bg-pattern-2.svg" alt="" />
        <header>
          <img src="/images/logo-light.svg" alt="" />
          <p>Apply for access</p>
        </header>

        <div className="hero-container">
          <h1>Data tailored to your needs.</h1>
          <button>Learn more</button>
          <img className='hero' src="/images/image-hero.webp" alt="" />
        </div>

      </div>


      <main>



        <section className="services-container">

          <div className="services">
            <p>1</p>
            <p>Actionable insights</p>
            <p>
              Optimize your products, improve customer satisfaction and stay ahead of the competition
              with our product data analytics.
            </p>
          </div>
          <div className="services">
            <p>2</p>
            <p>Data-driven decisions</p>
            <p>
              Make data-driven decisions with our product data analytics. Our AI-generated reports help
              you unlock insights hidden in your product data.
            </p>
          </div>
          <div className="services">
            <p>3</p>
            <p>Always affordable</p>
            <p>
              Always affordable pricing that scales with your business. Get top-quality product data
              analytics services without hidden costs or unexpected fees.
            </p>
          </div>

        </section>

        <section>
          <img src="/images/image-founder.webp" alt="" />
          <div className="profile-container">
            <h2>Be the first to test</h2>
            <p>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
              beta tester for our app and kickstart your company. Apply for access below and I’ll be
              in touch to schedule a call.
            </p>
            <button>Apply for access</button>
          </div>
        </section>


      </main>

      <footer>

        <img src="/images/logo-dark.svg" alt="" />

        <div className="icons">
          <img src="/images/icon-facebook.svg" alt="" />
          <img src="/images/icon-instagram.svg" alt="" />
          <img src="/images/icon-twitter.svg" alt="" />
        </div>
        <img src="/images/bg-pattern-3.svg" alt="" />

      </footer>


    </div>
  )
}

export default App
