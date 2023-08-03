import { faCloud, faDatabase, faSearch, faShapes } from "@fortawesome/free-solid-svg-icons";
import Title from "../Common/Title";

import style from './Skills.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws, faCss3Alt, faHtml5, faPhp, faReact, faWordpress } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    return (
        <div className="">
            <Title icon={faShapes} title={'EXPERIENCE'} />

            <h2 className={`${style.introText} mt-4 mb-4 animate__animated animate__faster animate__fadeInUp text-white`}>
                <span className="allColor">My Skills</span>
            </h2>

            <div className="row skills text-center mt-5">

                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_right" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faReact} />
                            <h1 className="text-white percent">92%</h1>
                        </div>
                        <p className="name text-white">React</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_bottom" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faPhp} />
                            <h1 className="text-white percent">90%</h1>
                        </div>

                        <p className="name text-white">Codeigniter/Laravel/PHP/Yii</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_left" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faWordpress} />                            <h1 className="text-white percent">86%</h1>
                        </div>
                        <p className="name text-white">WordPress</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_left" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faHtml5} />
                            <h1 className="text-white percent">95%</h1>
                        </div>
                        <p className="name text-white">HTML5</p>
                    </div>
                </div>


                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_left" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faCss3Alt} />
                            <h1 className="text-white percent">94%</h1>
                        </div>
                        <p className="name text-white">CSS</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_left" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faDatabase} />
                            <h1 className="text-white percent">80%</h1>
                        </div>
                        <p className="name text-white">Postgres/MySql</p>
                    </div>
                </div>

                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_left" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faCloud} />
                            <h1 className="text-white percent">70%</h1>
                        </div>
                        <p className="name text-white">AWS</p>
                    </div>
                </div>


                <div className="col-md-4 mb-3 scroll-animation" data-animation="fade_from_left" >
                    <div className={style.skill}>
                        <div className="skill-inner">
                            <FontAwesomeIcon height={100} className="text-white" icon={faSearch} />
                            <h1 className="text-white percent">70%</h1>
                        </div>
                        <p className="name text-white">SEO</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Skills;