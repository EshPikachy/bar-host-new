import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCocktailsAsync, getCategoriesAsync } from '../../redux/actions/asyncActions';
import Item from '../Item/Item'
import Loader from '../Loader/Loader';
import Categories from '../Categories/Categories'
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Pagination from '../Pagination/Pagination';

const Main = () => {
    const dispatch = useDispatch()

  

    const { data, categories, category } = useSelector(state => state.main)
    const { isLoading, error } = useSelector(state => state.loader)
    const searchParams = new URLSearchParams(window.location.search);
    const foundParams = searchParams.get('category');
    console.log(foundParams)

    const [currPage,setCurrPage]= useState(1)
    const [postPerPage,setPostPerPage]= useState(100)
    console.log(data)

    const indexOfLastPost = currPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage 
    const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost)


    useEffect(() => {
        Promise.all([
            dispatch(getCocktailsAsync(
                foundParams
                    ? foundParams
                    : 'Ordinary_Drink'
            )),
            dispatch(getCategoriesAsync())
        ])
    }, [dispatch, foundParams])

    const items = currentPosts.map(item => (
        <Item key={item.idDrink} item={item} />
    ))
    const getCocktailsByCategoryUI = (e) => {
        dispatch(getCocktailsAsync(e.target.value))
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('category', e.target.value);
        window.history.pushState({ path: e.target.value }, '', currentUrl.toString());
    }

    

    if (isLoading) return <Loader/>
    if (error) return <h2>{error}</h2>

    return (

            <div className="container">
                <div className="somethingrow">
                <h2>MAIN</h2>
                <Pagination currPage={currPage} setCurrPage={setCurrPage} postPerPage={postPerPage} total={data.length} setPostPerPage={setPostPerPage}  />
            <FormControlLabel
            label={postPerPage===20?'PagOff':'PagOn'}
           
          control={<Switch onClick={() => {
            if (postPerPage === 20) {
              setPostPerPage(100);
              setCurrPage(1);
            } else {
              setPostPerPage(20);
            }
          }} color="secondary" />}
        />
                </div>
           
            <Categories
                categories={categories}
                getCocktailsByCategoryUI={getCocktailsByCategoryUI}
                category={category}
            />
            <div className='row gy-5 row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4'>
                {items}
            </div>
            </div>
            


    );
};

export default Main;


