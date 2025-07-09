import './Header.css'; 

function Header() {
  return (
    <header className="header">
      
      <nav>
        <div className="logo-container">
          <a href="#home">
            <img src="/src/assets/logo.svg" alt="Logo" className="logo" />
          </a>
        </div>
        <a href="#projects">WORKS</a>
        <a href="#cv">CV</a>
        <a href="#contact">CHAT</a>
      </nav>
    </header>
    
  );
  
}

export default Header;