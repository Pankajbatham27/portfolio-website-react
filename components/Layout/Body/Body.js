import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Introduce from '../Introduce/Introduce';
import { faEnvelope, faHome, faShapes, faStream, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';


const Body = () => {

    const getYear = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear;
    }

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='left-sidebar'>
                        <div className="sidebar-header">
                            <div className="leftHeader">
                                
                                <h5 className='mb-0'>Coding.Rights</h5>
                                <span className="designation">Full Stack Developer</span>
                            </div>
                            <div className='imageCover'>
                                <img className="me" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Me" />
                            </div>
                            <div className='otherDetails'>
                                <div className='headingLeftbar'>
                                    <h2 className="email">contact@codingrights.com</h2>
                                    {/* <h2 className="address">Based in Los Angeles, CA</h2> */}
                                </div>
                                <p className="copyright">© {getYear()} coding rights. All Rights Reserved</p>
                                <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                                    <li>
                                        <a href="https://www.instagram.com/coding.rights/" target='_blank' rel="noopener noreferrer">
                                            <FontAwesomeIcon height={16} icon={faInstagram} />
                                        </a>
                                    </li>
                                    
                                </ul>

                                <Link to="Contact" className="theme-btn">
                                    <FontAwesomeIcon icon={faEnvelope} height={20} /> Hire Me!
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>

                        <nav className='rightMenu'>
                            <ul>
                                <li>
                                    <Link to="home" spy={true} smooth={true} duration={500}>
                                        <FontAwesomeIcon height={15} icon={faHome} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="about" spy={true} smooth={true} duration={500}>
                                        <FontAwesomeIcon height={15} icon={faUser} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="experience" spy={true} smooth={true} duration={500}>
                                        <FontAwesomeIcon height={15} icon={faSuitcase} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="Skills" spy={true} smooth={true} duration={500}>
                                        <FontAwesomeIcon height={15} icon={faShapes} />
                                    </Link>
                                </li>

                                <li>
                                    <Link to="Contact" spy={true} smooth={true} duration={500}>
                                        <FontAwesomeIcon height={15} icon={faEnvelope} />
                                    </Link>
                                </li>


                            </ul>
                        </nav>

                        <div id="home" className='pt-5'>
                            <Introduce />
                        </div>

                        <div id="about" className='pt-5'>
                            <About />
                        </div>

                        <div id="experience" className='pt-5'>
                            <Experience />
                        </div>

                        <div id="Skills" className='pt-5'>
                            <Skills />
                        </div>


                        <div id="Contact" className='pt-5'>
                            <Contact />
                        </div>




                    </div>
                </div>
                <div className='col-md-2'></div>
            </div>
        </div>
    )
}
export default Body;