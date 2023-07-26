import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCocktailsAsync } from '../../redux/actions/asyncActions';
import TextField from '@mui/material/TextField';
import Item from '../Item/Item';
const Search = () => {

    const searchParams = new URLSearchParams(window.location.search);
    const foundParams = searchParams.get('search') || '';
    console.log(foundParams)
    const {  error } = useSelector(state => state.loader)
    const { data } = useSelector(state => state.search)
    const [value, setValue] = useState('' || foundParams)
    const dispatch = useDispatch()
    console.log(data)

    useEffect(() => {
        dispatch(searchCocktailsAsync(value))
    }, [dispatch, value])


    const items = data?.map(item => (
        <Item key={item.idDrink} item={item} />
    ))

    const handleValue = (e) => {
        setValue(e.target.value)
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('search', e.target.value);
        window.history.pushState({ path: e.target.value }, '', currentUrl.toString());
    }
    if (error) return <h2>{error}</h2>

    return (
        <div className='container'>
            <TextField
                style={{ margin:'30px 0 30px ' }}
                value={value || foundParams}
                label="Search"
                variant="outlined"
                onChange={handleValue}
            />

            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
                {data ? items : <h2>No such a data</h2>}
            </div>
        </div>


    );
};

export default Search;