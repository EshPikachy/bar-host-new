import React from 'react';
import s from './Pagination.module.css'

const Pagination = ({ setCurrPage, postPerPage, total, currPage }) => {
  console.log(total, postPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / postPerPage); i++) {
    pageNumbers.push(i);
  }

  const pagButtons = pageNumbers.map(el=>{
     return <button className={currPage===el? s.pagIsActive :s.pagination_button}  onClick={()=>{setCurrPage(el)}} >{el}</button>
  })

  return (
    <div style={{
      display:'flex',
      columnGap:'1rem',
      alignItems:'center',
    }}>
      {pageNumbers.length===1?'':pagButtons}
    </div>
  );
};

export default Pagination;

