import React,{useEffect} from 'react';
import  './Alphabet.module.css'
import Button from '@mui/material/Button';
import { letters } from '../../config';
import { useDispatch,useSelector } from 'react-redux';
import { getCocktailsByAlphabet } from '../../redux/actions/asyncActions';
import { useParams,useNavigate } from 'react-router-dom';
import Item from '../Item/Item';

const Alphabet = () => {
    const navigate = useNavigate()
    const {symbol}= useParams()
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.byletter)
    useEffect(()=>{
        dispatch(getCocktailsByAlphabet(symbol))
    },[dispatch,symbol])
     console.log(data)

     const items = data?.map(item => (
        <Item  item={item} />
    ))
    console.log(symbol)
    const letter_btns = letters.map(el=>{
        return <Button style={{margin:'5px 5px'}} variant={el===symbol?'contained':'outlined'} key={el} onClick={()=>{navigate(`/alphabet/${el}`)}}>{el}</Button>
    })
console.log(navigate)

    return (
        <div className='container'>
            {letter_btns}
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
            {items}
            </div>
            
            

        </div>
    );
};

export default Alphabet;