import styles from './ErrorMessage.module.css';

const ErrorMessage = props => {
    const {errorApi} = props;
    console.log(errorApi);
    console.log(errorApi.stack);
    return (
        <>
            <h1 className={styles.error__message}>{errorApi.toString()}</h1>
        </>
    );
}

export default ErrorMessage;