import React from 'react';
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const {symbol} = useParams()
    console.log(symbol)
    return (
        <header>
            <div className="container">
            <div className={s.header__nav}>
                <div style={{cursor: 'pointer'}} className={s.logo} onClick={()=>{navigate('/')}}>
                <img src="https://cdn-icons-png.flaticon.com/512/4474/4474385.png" alt="" />
                </div>
                
                <div className={s.links}>
                <NavLink style={{color:'white'}} to='/'>Main</NavLink>
                <NavLink style={{color:'white'}} to='/search'>Search</NavLink>
                <NavLink style={{color:'white'}} to={`/alphabet/a`}>Alphabet</NavLink>
                <NavLink style={{color:'white'}} to={`/random`}>Rape</NavLink>
                </div>
            </div>
            </div>
           
        </header>
    );
};

export default Header;