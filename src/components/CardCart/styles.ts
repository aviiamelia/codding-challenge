import styled from "styled-components"

export const CardCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border: 1px solid var(--acquaGreen);
    border-radius: 8px;
    height: 70px;
    width: 200px;
    margin-right: 5px;
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 15px;
`   

export const Text = styled.div`
    color: #D9FFFD;
    text-align: center;
    background-color: #2D3333;
  
`
export const SpanNumber = styled.span`
    position: absolute;
    left: 3%;
    top: 2%;
    color: white;
    font-size: 20px;
`
export const Span = styled.span`
    position: absolute;
    right: 3%;
    top: 2%;
    cursor: pointer;
    color: #f335;
    font-size: 20px;
`