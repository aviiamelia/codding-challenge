import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid var(--acquaGreen);
    border-radius: 8px;
    height: 350px;
    width: 250px;
    margin-right: 5px;
    padding-bottom: 10px;
    margin-bottom: 15px;
   
`
export const Text = styled.div`
    color: #D9FFFD;
    text-align: center;
    background-color: #2D3333;
  
`
export const Button = styled.button`
    width: 150px;
    height: 40px;
    margin: 0 auto;
    margin-top:10px ;
    background-color: var(--acquaGreen);
    border-radius: 8px;
    color: var(--darkGrey);
`
