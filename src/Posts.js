import "./reset.css";
import "./styles.css";

const posts = [
  {
    imgPfp:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    namePf: "cato",
    imgPost:
      "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg",
    imgLike:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    pfNameLike: "cato1",
    commentUser: "alamo",
    commentContent: "ooo"
  },
  {
    imgPfp:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    namePf: "cato2",
    imgPost:
      "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg",
    imgLike:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    pfNameLike: "cato2",
    commentUser: "alamo",
    commentContent: "ooo"
  },
  {
    imgPfp:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    namePf: "cato1",
    imgPost:
      "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg",
    imgLike:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    pfNameLike: "cato3",
    commentUser: "alamo",
    commentContent: "ooo"
  }
];

function Post(props) {
  return (
    <>
      <div className="post-fora">
        <div>
          <img src={props.imgPfp} alt="profile" />
          <h5 className="user-post">{props.namePf}</h5>
        </div>
      </div>

      <div>
        <img src={props.imgPost} alt="post" />
      </div>
    </>
  );
}

function Comment(props) {
  return (
    <>
      <div className="icones-baixo">
        <div>
          <div className="icon icon-post">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <div className="icon">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </div>
          <div className="icon">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
        <div className="icondif">
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas-div">
        <div>
          <img src={props.imgLike} alt="profile" />
        </div>
        <div>
          <h4>Curtido por</h4>
          <strong> {props.commentUser} </strong>
          <h4>e</h4>
          <strong> outras 8.000.000.000 pessoas </strong>
        </div>
      </div>

      <div className="com">
        <div className="ver-comments">Ver todos os comentários</div>
        <div className="comments">
          <strong> {props.commentUser} </strong>
          <h4>{props.commentContent}</h4>
          <div className="icondif com-icon">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}

function ToComment() {
  return (
    <div className="comment-user">
      <div className="teste">
        <div className="emoji">
          <ion-icon name="happy-outline"></ion-icon>
        </div>
        <input
          type="text"
          placeholder="Escreva um comentário.."
          className="comment"
        />
      </div>
      <div>
        <button>Publicar</button>
      </div>
    </div>
  );
}

export default function Posts() {
  return (
    <>
      {posts.map((item) => (
        <div className="post">
          <Post
            imgPfp={item.imgPfp}
            namePf={item.namePf}
            imgPost={item.imgPost}
          />
          <div className="post-fora baixo">
            <Comment
              imgLike={item.imgLike}
              commentUser={item.commentUser}
              commentContent={item.commentContent}
            />
          </div>
          <ToComment />
        </div>
      ))}
    </>
  );
}