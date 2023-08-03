import { faUser } from "@fortawesome/free-solid-svg-icons";
import Title from "../Common/Title";
import style from './About.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const About = () => {


    return (
        <div className="">
            <Title icon={faUser} title={'ABOUT'} />
            <h2 className={`${style.introText} mt-4 mb-4 animate__animated animate__fadeInUp text-white`}>
                Every great design begin with an even <span className="allColor">better story</span>
            </h2>
            <p className="grayColor">Hello there! I&apos;m Pankaj Batham, a passionate Frontend Developer based in Bhopal. With a strong love for coding and design, I specialize in creating beautifully simple and intuitive user interfaces. I thrive on turning complex ideas into seamless digital experiences that delight users.</p>

            <p className="grayColor">
                I continuously seek out new challenges and stay updated with the latest technologies to ensure I deliver cutting-edge solutions.
            </p>
            <p className="grayColor">
                When I&apos;m not immersed in code, you can find me exploring new design trends, enjoying a cup of coffee while sketching interface ideas, or collaborating with fellow developers and designers.
            </p>
            <p className="grayColor">
                I&apos;m excited to connect and collaborate with you to bring your visions to life. Let&apos;s create something extraordinary together!
            </p>
            
        </div>

    )
}
export default About;