import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Title from "../Common/Title";
import style from './Contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="vh-100">
            <Title icon={faEnvelope} title={'Contact'} />

            <h2 className={`${style.introText} mt-4 mb-4 animate__animated animate__faster animate__fadeInUp text-white`}>
                Let`&apos;s Work <span className="allColor">Together!</span>
            </h2>

            <div className={style.contactDetails}>

                <h5 className="text-white"><FontAwesomeIcon icon={faEnvelope} height={20} /> contact@codingrights.com</h5>
                {/* <h5 className="text-white">+</h5> */}

            </div>
         
        </div>
    )
}
export default Contact;