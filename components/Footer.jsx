
import "../src/Content.css"

export default function Footer() {
    return (
        <footer className="footer">
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
        </footer>
    )
}
