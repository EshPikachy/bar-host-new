import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsAsync } from '../../redux/actions/asyncActions';
import { useParams,useNavigate } from 'react-router-dom';
import { CLEAR_STATE_ACTION } from '../../redux/actions/actions';
import Slider from '../Slider/Slider';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Loader from '../Loader/Loader';




const Details = () => {
    const { data } = useSelector(state => state.details)
    const { isLoading, error } = useSelector(state => state.loader)
    const dispatch = useDispatch()
    const { id } = useParams()
    const {random} = useParams()
    console.log(random)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getDetailsAsync(id))
        return () => {
            dispatch(CLEAR_STATE_ACTION())
        }
    }, [id, dispatch])



    const generateIngredients = () => {
        return Object.entries(data)
            .filter(([key, value]) => key.startsWith('strIngredient') && value)
            .map(([_, value]) => value)
    }
    const ingredients = generateIngredients()
    if(isLoading) return <Loader/>
    if (error) return <h2>{error}</h2> 

    
    return (
            <div className="container">
                <div className="somethingrow">
                <h2>Details</h2>
            <IconButton onClick={()=>{navigate(-1)}} aria-label="fingerprint" color="secondary">
            <ArrowBackIcon />
            </IconButton>
                </div>
           
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
                <div className="col">
                    <div className="box">
                    <img src={data.strDrinkThumb} alt="" />
                    <p>{data.strDrink}</p>
                    </div>
                </div>
                <div className="col">
                    <div className="box">
                    <Slider ingredients={ingredients} />
                    </div>
                    </div>
            </div>
            </div>
            
            


    );
};

export default Details;