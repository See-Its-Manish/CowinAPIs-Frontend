import logoImage from './Logo.png';
function Navbar() {
  return (
    <>
        <nav 
            className="navbar shadow-lg" 
            style={{backgroundColor:'#ED2547'}}
        >
                <div className="container-fluid" style={{height: '100'}}>
                    <a href = "#home" className="navbar-brand" >
                        <img 
                        src={logoImage} 
                        alt="CowinAPIs">
                        </img>
                    </a>
                </div>
        </nav>
    </>
  );
}

export default Navbar;
