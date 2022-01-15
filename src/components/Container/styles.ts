import styled from "styled-components";

export const MainContainer = styled.div`
    min-height: 100vh;
    padding-top: 15px;
    background-color: var(--darkGrey);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }

`