import './App.css'

function App() {


  return (
    <div className="App">


      <div className="overlay-hero">
        <img className='bg-pattern-1' src="/images/bg-pattern-1.svg" alt="" />
        <img className='bg-pattern-2' src="/images/bg-pattern-2.svg" alt="" />

      </div>
 
      <header className='header container'>
        <img src="/images/logo-light.svg" alt="" />
        <p>Apply for access</p>
      </header>

      <main className="container">

        <section className='main-hero-container' >

          <div className="sub-hero-container">
            <h1>Data <span className='tailored'>tailored</span>  to your needs.</h1>
            <button className='btn'>Learn More</button>
            <img className='hero' src="/images/image-hero.webp" alt="" />
          </div>

        </section>


      <div className="overlay-services"/>
        <section className="services-container">

          <div className="services">
            <p className='number'>1</p>
            <div className="services-paragraph">
              <p>Actionable insights</p>
              <p>
                Optimize your products, improve customer satisfaction and stay ahead of the competition
                with our product data analytics.
              </p>
            </div>
          </div>
          <div className="services">
            <p className='number'>2</p>
            <div className="services-paragraph">
              <p>Data-driven decisions</p>
              <p>
                Make data-driven decisions with our product data analytics. Our AI-generated reports help
                you unlock insights hidden in your product data.
              </p>
            </div>
          </div>
          <div className="services">
            <p className='number'>3</p>
            <div className="services-paragraph">
              <p>Always affordable</p>
              <p>
                Always affordable pricing that scales with your business. Get top-quality product data
                analytics services without hidden costs or unexpected fees.
              </p>
            </div>
          </div>

        </section>

        <section className='profile'>
          <img className='bg-pattern-3' src="/images/bg-pattern-3.svg" alt="" />
          <img className="founder-img" src="/images/image-founder.webp" alt="" />
          <div className="profile-paragraph">
            <h2>Be the first to test</h2>
            <p>
              Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
              beta tester for our app and kickstart your company. Apply for access below and I’ll be
              in touch to schedule a call.
            </p>
            <button className='btn-profile'>Apply for access</button>
          </div>
        </section>


      </main>

      <footer className="container footer">

        <img src="/images/logo-dark.svg" alt="" />

        <div className="icons">
          <img src="/images/icon-facebook.svg" alt="" />
          <img src="/images/icon-instagram.svg" alt="" />
          <img src="/images/icon-twitter.svg" alt="" />
        </div>

      </footer>


    </div>
  )
}

export default App
