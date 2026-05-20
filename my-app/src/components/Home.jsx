import HomeImg from "../assets/images/cof2.jpg";
import Footer from "./Footer";
import style from "./components/Home.module.css"

const headingColor = {
  color: "black",
  background: "aqua",
  fontSize: "50px"
};

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h2>Welcome to My Page</h2>

            <h2 style={{ color: "blue", background: "yellow" }}>
              HIIE HElloooo
            </h2>

            <h3 style={headingColor}>
              Hello Welcome to My World
            </h3>
            <h5 className={style.heading5}>hey beautifulllll</h5>

            <p>
              This is some dummy text to demonstrate layout.
            </p>
          </div>

          <div className="col-md-6">
            <img src={HomeImg} alt="Coffee" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;