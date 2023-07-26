import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams,useNavigate } from 'react-router-dom';
import { getIngredientsAsync } from '../../redux/actions/asyncActions';
import { IMG_URL } from '../../config';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CLEAR_STATE_ACTION } from '../../redux/actions/actions';
import Loader from '../Loader/Loader';

const Ingredients = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {name} = useParams()
    const {data} = useSelector(state => state.ingredients)
    const { isLoading, error } = useSelector(state => state.loader)
    console.log(name)
    console.log(data)
    useEffect(()=>{
    dispatch(getIngredientsAsync(name))
    return ()=>{
        dispatch(CLEAR_STATE_ACTION())
    }
    },[dispatch,name])
    



    if(isLoading) return <Loader/>
    if (error) return <h2>{error}</h2> 
    return (
        <div className='container'>
            <div className="somethingrow">
            <h2>Ingredients</h2>
             <IconButton onClick={()=>{navigate(-1)}} aria-label="fingerprint" color="secondary">
            <ArrowBackIcon />
            </IconButton>
            </div>
            
            <div className='row row-cols-2 row-cols-sm-1 row-cols-md-2 row-cols-lg-2'>
                <div className="col">
        <div className="box">
        <p>{data.strDescription?data.strDescription: 'YOU SERIOUSLY DONT KNOW WHAT IS THIS?' }</p>
        </div>
                </div>
                <div className="col">
        <div className="box">
            
        <img src={`${IMG_URL}${data.strIngredient}.png`} alt="" />
        </div>
                </div>

            </div>
           
            
           
        </div>
    );
};

export default Ingredients;