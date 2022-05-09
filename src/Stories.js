import "./reset.css";
import "./styles.css";

const stories = [
  {
    img:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    alt: "profile-picture",
    name: "cato"
  },
  {
    img:
      "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg",
    alt: "profile-picture",
    name: "cato_2"
  },
  {
    img:
      "https://www.meme-arsenal.com/memes/2968eeb2f1c2566eae43188b2b788b5f.jpg",
    alt: "profile-picture",
    name: "cato_3"
  },
  {
    img:
      "https://preview.redd.it/w0zf1mzl4rv81.jpg?auto=webp&s=74d96619a026a14da1e335a82d14c18320d110b6",
    alt: "profile-picture",
    name: "cato_4"
  },
  {
    img:
      "https://external-preview.redd.it/t5IBAQ3gaehTHCIiqINnJZ-BOpsXVkRQQ1tzjS0IP84.jpg?auto=webp&s=ad45db84dfdc35658eba374db5f5de34aabbd555",
    alt: "profile-picture",
    name: "cato_5"
  },
  {
    img: "https://data.whicdn.com/images/341696335/original.jpg",
    alt: "profile-picture",
    name: "cato_6"
  },
  {
    img:
      "https://i.pinimg.com/474x/9a/74/fd/9a74fd98ee7bfae9c613336b6250f1af.jpg",
    alt: "profile-picture",
    name: "cato_7"
  },
  {
    img:
      "https://i.pinimg.com/236x/9e/e4/68/9ee46832b2dc0908ab78af8e66edc75e.jpg",
    alt: "profile-picture",
    name: "cato_8"
  }
];
function Storie(props) {
  return (
    <div className="storie-agrupado">
      <img src={props.img} className="pfp" alt={props.alt} />
      <img
        src="https://i.pinimg.com/564x/f5/03/f6/f503f64281e2b60686837c18e29dcab6.jpg"
        className="pfps"
        alt="profile"
      />
      <h6>{props.name}</h6>
    </div>
  );
}

export default function Stories() {
  return (
    <div className="stories borda-tudo">
      {stories.map((item) => (
        <Storie img={item.img} alt={item.alt} name={item.name} />
      ))}
      ;
      <div className="seta">
        <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
      </div>
    </div>
  );
}