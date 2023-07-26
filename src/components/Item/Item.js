import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Item = ({ item }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        
        <div className='col ' onClick={() => navigate(`${pathname}${pathname === '/' ? '' : '/'}details/${item.idDrink}`)}>
            <div className="box">
            <img src={item.strDrinkThumb} alt="" />
            <p>{item.strDrink}</p>
            </div>
            
        </div>
    );
};

export default Item;