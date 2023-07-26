import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Categories = ({ categories, getCocktailsByCategoryUI, category }) => {
    return (
      <>
        <Box style={{margin: '30px 0 30px'}} sx={{ minWidth: 120 }}>
        <FormControl style={{width:'300px'}}>
          <InputLabel id="demo-simple-select-label">{category}</InputLabel>
          <Select
            onChange={getCocktailsByCategoryUI}
            label={category}
          >
            {categories?.map(el => {
                const { strCategory } = el
                return (
                    <MenuItem key={strCategory} value={strCategory}>{strCategory}</MenuItem>
                )
            })}
          </Select>
        </FormControl>
      </Box>

      </> 
    );
};

export default Categories;