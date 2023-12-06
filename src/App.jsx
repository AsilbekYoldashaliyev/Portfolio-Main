import "./App.css";
import img from "./assets/logo.png";
import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgIfDesign } from "react-icons/cg";
import { HiCubeTransparent } from "react-icons/hi2";
import img1 from "./assets/man.png";

function App() {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={img} alt="" />
            <div className="title-logo">
              <h4>Portfolio</h4>
              <h6>Design</h6>
            </div>
          </div>
          <div className="sections">
            <ul>
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">Abaut me</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#Blog">Personal Blog</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="btn-hire">
            <button type="button">Hire Me</button>
          </div>
        </nav>
        <main>
          <div className="title">
            <div className="me">
              <div className="hello">
                <p>👋 Hi,I'm</p>
                <p className="name">Asilbek</p>
              </div>
              <div>
                <h1 className="designer">Product Designer</h1>
              </div>
            </div>
            <div className="info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Similique a quos non eos praesentium maiores, aspernatur, officiis
              iste blanditiis ut omnis! Iste sapiente et esse modi perferendis
              iure pariatur sint ratione eum?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Reiciendis, ipsum.
            </div>
            <div className="social">
              <p>Follow Me</p>
              <div className="media">
                <MdOutlineFacebook />
                <BsInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
            <div className="btn-meeting">
              <button className="book">Book a Meeting</button>
              <button className="download">Download CV</button>
            </div>
          </div>
          <div className="img-title">
            <img src={img1} alt="man picture" />
          </div>
        </main>
        <section className="about">
          <div className="about-title">
            <h1>About Me</h1>
            <div className="line">
              <hr />
            </div>
          </div>
          <div className="about-info">
            <div className="year">
              <h1>3+</h1>
              <p>
                Years <br />
                Working <br /> Experiance
              </p>
            </div>
            <div className="info-year">
              <div className="info-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quibusdam sequi, dignissimos ratione quod reprehenderit culpa
                  voluptatibus cumque eius nemo, neque aspernatur quia molestiae
                  possimus nesciunt magnam placeat ducimus dolore hic doloremque
                  tempora!
                </p>
                <h4 className="email">
                  <a className="email" href="yoldashaliyev0303@gmail.com">
                    yoldashaliyev0303@gmail.com
                  </a>
                </h4>
              </div>
              <div className="info-box">
                <div className="boxes">
                  <div className="project-icon">
                    <GoProjectRoadmap className="roadmap" />
                  </div>
                  <h2>Product Designer</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti voluptates provident nesciunt? Aperiam illo minima
                  </p>
                </div>
                <div className="boxes-center">
                  <div className="project-icon">
                    <CgIfDesign className="cgif" />
                  </div>
                  <h2>UiUX Designer</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti voluptates provident nesciunt? Aperiam illo minima
                  </p>
                </div>
                <div className="boxes-center">
                  <div className="project-icon">
                    <HiCubeTransparent className="cube" />
                  </div>
                  <h2>Interactive Designer</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti voluptates provident nesciunt? Aperiam illo minima
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
