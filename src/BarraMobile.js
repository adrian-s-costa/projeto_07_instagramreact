import "./reset.css";
import "./styles.css";

export default function BarraMobile() {
  return (
    <div className="barra-mobile">
      <div>
        <ion-icon name="home-outline" className="icon"></ion-icon>
      </div>
      <div>
        <ion-icon name="search-outline" className="icon"></ion-icon>
      </div>
      <div>
        <ion-icon name="add-circle-outline" className="icon"></ion-icon>
      </div>
      <div>
        <ion-icon name="heart-outline" className="icon"></ion-icon>
      </div>
      <div>
        <ion-icon name="person-outline" className="icon"></ion-icon>
      </div>
    </div>
  );
}