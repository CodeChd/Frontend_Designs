import '../src/Content.css'


export default function Content() {
    return (
        <main>

            <div className="main-container">
                <div className="col-1">
                    <div className="img-container">
                        <img src="/assets/images/image-web-3-desktop.jpg" alt="desktop-image" />
                    </div>

                    <div className="details-box">
                        <div className="txt-wrapper">
                            <h2>The Bright Future  of Web 3.0?</h2>
                        </div>


                        <div className="desc">
                            <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                            <button>READ MORE</button>
                        </div>
                    </div>

                    {/* COL-1 END */}
                </div>

                <div className="col-2">


                    <h2>New</h2>

                    <div className="info">
                        <h3>Hydrogen Vs Electric Cars</h3>
                        <p>will hydrogen-fueled cars ever catch up to Evs? </p>
                    </div>
                    <div className="info">
                        <h3>The Downside of AI Artistry</h3>
                        <p>What are the possible adverse effects of on-demand AI image generation? </p>
                    </div>
                    <div className="info-last">
                        <h3>is VC Funding Drying Up?</h3>
                        <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
                    </div>
                    {/* COL-2 END */}
                </div>





            </div>
                <div className="footer">
                    <div className='card one'>

                        <div className="image-container">
                            <img src="/assets/images/image-retro-pcs.jpg" alt="retro-image" />
                        </div>

                        <div className="info-details">
                            <h2>01</h2>
                            <p>Reviving Retro PCs</p>
                            <p>What happens when old pcs are given modern upgrades?</p>
                        </div>

                    </div>


                    <div className='card two'>
                        
                    <div className="image-container">
                            <img src="/assets/images/image-top-laptops.jpg" alt="laptop-image" />
                        </div>

                        <div className="info-details">
                            <h2>02</h2>
                            <p>Top 10 Laptops of 2022</p>
                            <p>Our best picks for various needs and budgets.</p>
                        </div>
                    </div>
                    <div className='card three'>
                        
                    <div className="image-container">
                            <img src="/assets/images/image-gaming-growth.jpg" alt="gaming-image" />
                        </div>

                        <div className="info-details">
                            <h2>03</h2>
                            <p>The Growth of Gaming</p>
                            <p>How the pandemic has sparked fresh opportunities.</p>
                        </div>
                    </div>
                </div>
        </main>
    )
}
