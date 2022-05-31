import React from "react";
import Grid from '@mui/material/Grid';



export const CountriesSearchPage = () => {
    return(
        <>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '0' }}
        >
            
            <p>国名で検索</p>
            <input type="search" id="search-box" placeholder="国名を入力"></input>
            <button>検索</button>
            
        </Grid>
            
        </>
    );
}