import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './Common.module.css';

const Title = ({icon,title}) => {
    return (
        <div className={style.titlePage}>
            <div><FontAwesomeIcon icon={icon} height={20} /></div>
            <p>{title}</p>
        </div>
    )
}
export default Title;