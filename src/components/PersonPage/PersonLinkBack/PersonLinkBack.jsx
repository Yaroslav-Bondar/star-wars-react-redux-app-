import {useNavigate} from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import iconBack from './img/back.svg'
const PersonLinkBack = () => {
    const navigate = useNavigate();
    function handleGoBack(event) {
        event.preventDefault();
        navigate(-1);
        console.log(handleGoBack);
    }
    return (
        <button
            type="button" 
            // href="#" 
            onClick={handleGoBack}
            className={styles.link}
        >
            <img className={styles.link__img} src={iconBack} alt="Go back"/>
            <span>Go Back</span>
        </button>
    );
}

export default PersonLinkBack;