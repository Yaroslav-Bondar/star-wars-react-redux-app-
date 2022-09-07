import { useState, useEffect } from 'react';
// checking type of props https://github.com/facebook/prop-types 
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiResource, changeHTTP } from '@utils/network';
import {useQueryParams} from '@hooks/useQueryParams';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import { API_PEOPLE, SWAPI_PEOPLE } from '@constants/api';
import styles from './PeoplePage.module.css';

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);
    const queryPage = useQueryParams().get('page')

    const getResource = async (url) => {
        const data = await getApiResource(url);
        // if the data does not contain an error
        if(true !== data instanceof Error) {
        try {
            const peopleList = data.results.map(({name, url}) => {
                const id = getPeopleId(url, SWAPI_PEOPLE);
                const img = getPeopleImage(id);
                return {
                    id,
                    name,
                    img,
                }
            });
            setPeople(peopleList);
            setNextPage(changeHTTP(data.next));
            setPrevPage(changeHTTP(data.previous));
            setCounterPage(getPeoplePageId(url));
            setErrorApi(false);
            }
            catch(error) {
                setErrorApi(error);
            }
        } // if the data contains an error 
        else {
            setErrorApi(data);  
        }
    };
    useEffect(()=> {
        getResource(API_PEOPLE + queryPage);
    },[]);
    return (
        <>
            <PeopleNavigation getResource = {getResource} 
                nextPage = {nextPage} 
                prevPage = {prevPage}
                counterPage = {counterPage}
            />
            { people && <PeopleList people = {people}/> }
        </>
    );
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func,
}

export default withErrorApi(PeoplePage);

      