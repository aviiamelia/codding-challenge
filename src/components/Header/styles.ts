import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding:0 20px;
    background-color:var(--darkAcquaGreen) ;
`
export const CardHome = styled.div`
    color:var(--darkGrey);
    height: 100%;
    font-size: 45px;
    position: relative;
    cursor: pointer;
`
export const CardCart = styled.div`
    color:var(--darkGrey);
    height: 100%;
    font-size: 45px;
    position: relative;
    cursor: pointer;
`
export const Number = styled.div`
    position: absolute;
    color: white;
    font-size: 20px;
    top: 15%;
    left: 0;
    font-weight: 500;
`