import PropTypes from 'prop-types';
import styles from './UiLoading.module.css';

const UiLoading = ({color, shadow}) => {
    const theme = {borderColor: color, 
                    filter: `drop-shadow(0 0 2px ${color})`}
    if(!shadow) delete theme.filter;
    
    return <div style={theme} className={styles.loader}></div>
}

UiLoading.propTypes = {
    color: PropTypes.string,
    shadow: PropTypes.bool,
}

UiLoading.defaultProps = {
    color: '#fff',
    shadow: true,
}

export default UiLoading;