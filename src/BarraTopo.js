import "./reset.css";
import "./styles.css";

export default function BarraTopo() {
  return (
    <div className="topo">
      <BarraTopoMobile />
      <BarraTopoDesktop />
    </div>
  );
}

function BarraTopoDesktop() {
  return (
    <div className="alinhador">
      <div className="logo-container">
        <ion-icon name="logo-instagram"></ion-icon>
        <div className="linha-vertical"></div>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="logo-texto"
          alt="logo"
        />
      </div>
      <div className="barra-de-pesquisa">
        <input type="text" name="" className="barra" placeholder="Pesquisar" />
      </div>
      <div className="icones-barra">
        <div className="icon">
          <ion-icon name="paper-plane-outline" className="icon"></ion-icon>
        </div>
        <div className="icon">
          <ion-icon name="compass-outline" className="icon"></ion-icon>
        </div>
        <div className="icon">
          <ion-icon name="heart-outline" className="icon"></ion-icon>
        </div>
        <div className="icon">
          <ion-icon name="person-outline" className="icon"></ion-icon>
        </div>
      </div>
    </div>
  );
}

function BarraTopoMobile() {
  return (
    <div class="topo-mobile">
      <div className="icon">
        <ion-icon name="logo-instagram"></ion-icon>
      </div>
      <div>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          className="logo-texto"
          alt="logo"
        />
      </div>
      <div className="icon">
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
    </div>
  );
}