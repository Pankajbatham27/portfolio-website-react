import { faUser } from "@fortawesome/free-solid-svg-icons";
import Title from "../Common/Title";
import style from './Experience.module.css';

const Experience = () => {
    return (
        <div className="">
            <Title icon={faUser} title={'EXPERIENCE'} />

            <h2 className={`${style.introText} mt-4 mb-4 animate__animated animate__faster animate__fadeInUp text-white`}>
                <span className="allColor">My Experience</span>
            </h2>

            <div className={`${style.experience} mt-5`}>
                <ul>
                    <li>
                        <div className={style.experienceLI}>
                            <p className="grayColor mb-5">2023 - Present</p>

                            <div className={`text-white ${style.hoverColorChange}`}>
                                <h5>Full Stack Developer</h5>
                                <p className="grayColor"><small>Deloitte India</small></p>
                            </div>
                            <hr className="text-light" style={{opacity: '.05'}} />
                            <p className="grayColor mb-5 mt-5">January 2022 to December 2022</p>
                            <div className={`text-white ${style.hoverColorChange}`}>
                                <h5>Full Stack Developer</h5>
                                <p className="grayColor"><small>MPSeDC</small></p>
                            </div>

                            <hr className="text-light" style={{opacity: '.05'}} />
                            <p className="grayColor mb-5 mt-5">March 2021 to January 2022</p>
                            <div className={`text-white ${style.hoverColorChange}`}>
                                <h5>FullStack Developer</h5>
                                <p className="grayColor"><small>Inkgraph Techno Pvt. Ltd.</small></p>
                            </div>

                            <hr className="text-light" style={{opacity: '.05'}} />
                            <p className="grayColor mb-5 mt-5">January 2018 to March 2021</p>
                            <div className={`text-white ${style.hoverColorChange}`}>
                                <h5>FullStack Developer</h5>
                                <p className="grayColor"><small>Insignia Web and Marketing Pvt. Ltd.</small></p>
                            </div>
                        </div>
                    </li>
                    <li></li>
                </ul>
            </div>

        </div>

    )
}
export default Experience;


