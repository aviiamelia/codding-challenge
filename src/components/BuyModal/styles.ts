import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 2px solid var(--acquaGreen);
    background-color: var(--darkAcquaGreen);
    position: absolute;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    top: 30%;
    width: 400px;
    justify-content: space-around;
    height: 500px;
    border-radius: 8px;
`
export const Title = styled.h1`
    text-align: center;
    color: white;
`
export const Button = styled.button`
    border-radius: 8px;
    width: 130px;
    height: 50px;
    color: white;
    font-size: 15px;
    background-color: var(--darkGrey);
`