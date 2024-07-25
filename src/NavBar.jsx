import "./App.css"
export function NavBar() {
  const numeroTelefono = '+593999755792';
  const mensajeWhatsApp = '¡Hola! Estoy interesado en comprar carne de cerdo. ¿Podrías proporcionarme más información?';

  const generarEnlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeWhatsApp)}`;
    return (
      <div className="NavbarContainer">
        <nav className="NavBar">
          <div className="logo-Content">
          <div className="logo-navBar logo-hover">
            <img src="../src/img/Logo_P.png" alt="Logo" />
          </div>
          <span className="logo-text">Cárnicos Paty</span>

          </div>
          <ul className="NavBar-Link">
            <li className="NavBar-li"><a className="NavbarText" href="#Catalogo">Productos</a></li>
            <li className="NavBar-li"><a className="NavbarText"  href={generarEnlaceWhatsApp}>Contacto</a></li>
            <li className="NavBar-li"><a className="NavbarText" href="#Ubicacion">Ubicación</a></li>
          </ul>
        </nav>
      </div>
    );
  }