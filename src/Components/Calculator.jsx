import React, { useState } from 'react';
import './Calculator.css'
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculator(){
    const [numero,setNumero]= useState(0); /* Os valores que vao ficar no visor la da tela */
    const [numeroAntigo,setNumeroAntigo]= useState(0);
    const [operador,setoperador]= useState(0);
    function inputNumero(e){
        if(numero==0){
            setNumero( e.target.value);
        }else{
            setNumero(numero + e.target.value);
        }
        
    }
    function limpar(){
        setNumero(0);
    }
    function porcentagem(){
        setNumero(numero/100);
    }
    function inverteSinal(){
        if(numero > 0){
            setNumero(-numero);
        }else{
            setNumero(Math.abs(numero));
        }
    }
    function operadores(e){
        var operadorInput = e.target.value;
        setoperador(operadorInput);
        setNumeroAntigo(numero);
        setNumero(0);
    }
    function calcular(e){
      if(operador==='/'){
          setNumero(parseFloat(numeroAntigo)/parseFloat(numero));
      }else if(operador === 'X'){
           setNumero(parseFloat(numeroAntigo)*parseFloat(numero));         
      }else if(operador === '+'){
          setNumero(parseFloat(numeroAntigo)+parseFloat(numero));
      }else if(operador==='-'){
          setNumero(parseFloat(numeroAntigo)-parseFloat(numero));
      }
    }
    return(
       <div>
           <Box m={5} />
           <Container maxWidth="xs">
               <div className="fundoTela">
                   <h1 className='resultado'>{numero}</h1>
                   <div>
                    <button onClick={limpar}> AC</button>
                    <button onClick={inverteSinal}> +/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className='Laranja' onClick={operadores} value= "/">/</button>
                   </div>
                   <div>
                    <button className='Cinza' onClick={inputNumero} value={7}>7</button>
                    <button className='Cinza' onClick={inputNumero} value={8}>8</button>
                    <button className='Cinza'onClick={inputNumero} value={9}> 9</button>
                    <button className='Laranja' onClick={operadores} value= "X">X</button>
                   </div>
                   <div>
                    <button className='Cinza' onClick={inputNumero} value={4}>4</button>
                    <button className='Cinza' onClick={inputNumero} value={5}>5</button>
                    <button className='Cinza' onClick={inputNumero} value={6}>6</button>
                    <button className='Laranja' onClick={operadores} value= "-">-</button>
                   </div>
                   <div>
                    <button className='Cinza' onClick={inputNumero} value={1}>1</button>
                    <button className='Cinza' onClick={inputNumero} value={2}>2</button>
                    <button className='Cinza' onClick={inputNumero} value={3}>3</button>
                    <button className='Laranja' onClick={operadores} value= "+">+</button>
                   </div>
                   <div>
                    <button className='Cinza' onClick={inputNumero} value={0}>0</button>
                    <button className='Cinza' onClick={inputNumero} value={","}>,</button>
                    <button className='Cinza'style={{visibility:"hidden"}}>,</button>
                    <button className='orange' onClick={calcular}>=</button>
                   </div>
                   
               </div>
           </Container>
       </div>
       
    )  
}