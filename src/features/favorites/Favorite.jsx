import "./style.css";
import { Card } from "../../components/main/subcomponent/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Favorite = () => {
  const { fav } = useSelector((store) => store.fav);
  const navigate = useNavigate()
  return (
    <main className="main">
      <section className="main-head-wrapper">
        <div className="main-heading">My Favorites</div>
      </section>
      <section>
        <ul className="card-wrapper">
          {fav.length < 1 ? (
            <div className="empty-fav">
              <h2>Nothing to show :(</h2>
              <button className="btn signup-btn" onClick={()=>navigate("/")}>Add Now 😇</button>
            </div>
          ) : (
            fav.map((es) => <Card estate={es} key={es.id} />)
          )}
        </ul>
      </section>
    </main>
  );
};
