import "./reset.css";
import "./styles.css";

import BarraTopo from "./BarraTopo";
import Stories from "./Stories";
import Posts from "./Posts";
import BarraLateral from "./BarraLateral";
import BarraMobile from "./BarraMobile";

export default function App() {
  return (
    <div>
      <BarraTopo />
      <div className="pagina">
        <div className="alinhador-pagina">
          <BarraLateral />
          <BarraMobile />
          <div className="esquerda-pagina"></div>
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}
