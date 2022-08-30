import PropTypes, { resetWarningCache } from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import {useParams} from 'react-router-dom';
import PersonInfo from '@components/PersonPage/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonLinkBack from '@components/PersonPage/PersonLinkBack';
import UiLoading from '@components/UI/UiLoading';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { getApiResource } from '@utils/network';
import {getPeopleImage} from '@services/getPeopleData'
import {API_PERSON} from '@constants/api';
import styles from './PersonPage.module.css';
const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));

const PersonPage = ({setErrorApi}) => {
    // console.log(id);
    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        (async() => {
            const res = await getApiResource(API_PERSON + `/${id}`);
            console.log(res);
            // check received data for Errors
            if(!(res instanceof Error)) {
                setErrorApi(false);
                setPersonInfo([
                    {title: 'Height', data: res.height},
                    {title: 'Mass', data: res.mass},
                    {title: 'Hair Color', data: res.hair_color},
                    {title: 'Skin Color', data: res.skin_color},
                    {title: 'Eye Color', data: res.eye_color},
                    {title: 'Birth Year', data: res.birth_year},
                    {title: 'Gender', data: res.gender},
                ]);
                res.films.length && setPersonFilms(res.films);
                setPersonName(res.name);
                setPersonPhoto(getPeopleImage(id));
            } else {
                setErrorApi(res);
            }
        })()
    }, []);
    return (
        <>
            <PersonLinkBack/>
            <div className = {styles.wrapper}>
                <span className = {styles.person__name}>{personName}</span>
                <div className = {styles.container}>
                    <PersonPhoto 
                        personPhoto = {personPhoto}
                        personName = {personName}
                        />
                    {personInfo && <PersonInfo personInfo = {personInfo}/>}
                    {personFilms && (
                        <Suspense fallback={<UiLoading />}>
                            <PersonFilms films = {personFilms}/>
                        </Suspense>
                    )}
                </div>
            </div>
        </>
    );
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PersonPage);