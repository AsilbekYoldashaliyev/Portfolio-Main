import "./App.css";
import img from "./assets/logo.png";
import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { CgIfDesign } from "react-icons/cg";
import { HiCubeTransparent } from "react-icons/hi2";
import { BiAlarm } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import img1 from "./assets/man.png";
import img2 from "./assets/images/img2.webp";
import img3 from "./assets/images/img3.webp";
import img4 from "./assets/images/img4.webp";
import img5 from "./assets/images/img5.webp";
import img6 from "./assets/images/img6.webp";
import img7 from "./assets/images/img7.webp";
import img8 from "./assets/images/img8.webp";
import img9 from "./assets/images/img9.webp";

function App() {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <span className="logo_img">
            <img src={img} alt="Logo image" />
          </span>
          <div className="logo_title">
            <h4>Portfolio</h4>
            <h6>Design</h6>
          </div>
        </div>
        <div className="navbar">
          <ul className="nav_list">
            <li>
              <a href="#Home">
                <a href="Home" id="Home">
                  Home
                </a>
              </a>
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
        <div className="main_title">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
            a quos non eos praesentium maiores, aspernatur, officiis iste
            blanditiis ut omnis! Iste sapiente et esse modi perferendis iure
            pariatur sint ratione eum?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Reiciendis, ipsum.
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
        <div className="main_img">
          <img src={img1} alt="man picture" />
        </div>
      </main>
      <section className="about" id="About">
        <div className="about-title">
          <h1>
            <a href="#About">About Me</a>
          </h1>
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
      <section className="portfolio">
        <div className="experiance-work">
          <div className="time">
            <p>
              <BiAlarm className="alarm" />
            </p>
            <p>In Time Projects</p>
          </div>
          <div className="statistic">
            <div className="number">
              <h1>3+</h1>
              <p>Years of Experiance</p>
            </div>
            <div className="number">
              <h1 id="Portfolio">50+</h1>
              <p>Projects Complited</p>
            </div>
            <div className="number">
              <h1>30+</h1>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="done-pct">
            <p>
              <BsPatchCheck className="alarm" />
            </p>
            <p>Project Done </p>
          </div>
        </div>
        <div className="portfolio-title">
          <h1>
            <a href="#Portfolio">Portfolio</a>
          </h1>

          <div className="line">
            <hr />
          </div>
        </div>
        <div className="info-portfolio">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
            dolores neque alias consectetur nostrum sapiente dolore dicta, illum
            ducimus perspiciatis.
          </p>
        </div>
        <ul className="designs">
          <li>All</li>
          <li>Web Design</li>
          <li>Mobile App</li>
          <li>Dashboard</li>
          <li>Branding</li>
          <li>UI Kids</li>
        </ul>
        <div className="images-prj">
          {" "}
          <div className="double">
            <div className="img-flex">
              <div className="img-column">
                {/* <img src={img4} alt='' /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
            <div className="img-flex">
              <div className="img-column">
                {/* <img src={img5} alt='' /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
          <div className="triple">
            <div className="img-flex">
              <div className="mini-img">
                {/* <img src={img2} alt="" /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="img-flex">
              <div className="img-column">
                {/* <img src={img9} alt="" /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
            <div className="img-flex">
              <div className="mini-img">
                {/* <img src={img3} alt="" /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
          <div className="triple">
            {" "}
            <div className="img-flex">
              <div className="mini-img">
                {/* <img src={img6} alt="" /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
            <div className="img-flex">
              <div className="mini-img">
                {/* <img src={img7} alt="" /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
            <div className="img-flex">
              <div className="column">
                {/* <img src={img8} alt="" /> */}
              </div>
              <div className="img-info">
                <h3>VPN App UI Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <div className="arrow-icon">
                <FaArrowTrendUp />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
