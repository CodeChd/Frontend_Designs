import '../src/Header.css'

export default function Header() {
  return (
    <header>
        <div className="container">
        <div className="header-logo">
            <h1>W.</h1>
        </div>

        <nav className='main-nav'>
            <ul className="list-selector">
                <li>Home</li>
                <li>News</li>
                <li>Popular</li>
                <li>Trending</li>
                <li>Categories</li>
            </ul>
        </nav>
        </div>
    </header>
  )
}
