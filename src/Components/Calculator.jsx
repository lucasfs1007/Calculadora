import React from 'react';
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator(){
    return(
       <div>
           <Box m={5} />
           <Container maxWidth="xs">
               <div className="fundoTela">
                   <h1 className='resultado'>1</h1>
                   <button>AC</button>
                   <button>+/-</button>
                   <button>%</button>
                   <button className='Laranja'>/</button>
                   <button className='Cinza'>7</button>
                   <button className='Cinza'>8</button>
                   <button className='Cinza'>9</button>
                   <button className='Laranja'>X</button>
                   <button className='Cinza'>4</button>
                   <button className='Cinza'>5</button>
                   <button className='Cinza'>6</button>
                   <button className='Laranja'>-</button>
                   <button className='Cinza'>1</button>
                   <button className='Cinza'>2</button>
                   <button className='Cinza'>3</button>
                   <button className='Laranja'>+</button>
                   <button className='Cinza'>0</button>
                   <button className='Cinza'>,</button>
                   <button className='Cinza'style={{visibility:"hidden"}}>,</button>
                   <button>=</button>
               </div>
           </Container>
       </div>
       
    )  
}