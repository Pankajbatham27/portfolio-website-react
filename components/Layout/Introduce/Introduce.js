import { faArrowDown, faHome } from "@fortawesome/free-solid-svg-icons";
import Title from "../Common/Title";
import style from './Introduce.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";



const Introduce = () => {
    return (
        <div className="vh-100">
            <Title icon={faHome} title={'INTRODUCTION'} />
            <h1 className={`${style.introText} mt-5 mb-4 animate__animated animate__faster animate__fadeInUp`}>
            Hi, I&apos;m <span className="allColor">Pankaj.</span><br /><small>A Full Stack Developer. Let&apos;s craft exceptional digital experiences together!</small>
            </h1>
            <p className="grayColor">Designing and Coding Beautifully Simple Things with Love.</p>
            <div className={style.bottomIntro}> 

                {/* <div className={style.roundImageCover}>
                    <Link to="about" spy={true} smooth={true} duration={500} >
                        <div className={style.arrowIcon}><FontAwesomeIcon height={20} icon={faArrowDown} /></div>
                    </Link>
                    <img src="https://wpriverthemes.com/drake/wp-content/uploads/2023/03/round-text.png" />
                </div> */}

            </div>
        </div>

    )
}
export default Introduce;