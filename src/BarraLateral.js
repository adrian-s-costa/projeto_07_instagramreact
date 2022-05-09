import "./reset.css";
import "./styles.css";

const recomendations = [
  {
    imgPfp:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    namePf: "cato2"
  },
  {
    imgPfp:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    namePf: "cato1"
  },
  {
    imgPfp:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    namePf: "cato3"
  }
];

function Barra(props) {
  return (
    <>
      <div className="perfis">
        <div>
          <img src={props.imgPfp} alt="a" />
          <div className="perfil-sugerido">
            <h4 className="user-post">{props.namePf}</h4>
            <span className="segue"> Segue você </span>
          </div>
          <div className="seguir">Seguir</div>
        </div>
      </div>
    </>
  );
}

function PerfilBarra() {
  return (
    <div className="perfil">
      <div>
        <img src="imagens/cato2.jpg" className="pfp" />
      </div>
      <div className="user-nome">
        <h4 className="user-post">cato</h4>
        <h3>Cato</h3>
      </div>
    </div>
  );
}

export default function BarraLateral() {
  return (
    <div className="barra-lateral">
      <div class="perfil">
        <div>
          <img
            src="https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg"
            class="pfp"
          />
        </div>
        <div class="user-nome">
          <h4 class="user-post">cato</h4>
          <h3>Cato</h3>
        </div>
      </div>

      <div class="sugestoes">
        <div>Sugestões para você</div>

        <div>Ver tudo</div>
      </div>
      {recomendations.map((item) => (
        <Barra imgPfp={item.imgPfp} namePf={item.namePf} />
      ))}
      <div className="sobre">
        <div>
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
          Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>

        <div>© 2021 INSTAGRAM DO FACEBOOK</div>
      </div>
    </div>
  );
}