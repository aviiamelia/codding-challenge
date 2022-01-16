import styled from "styled-components";

export const MainContainer = styled.div`
    min-height: 100%;
    padding-top: 15px;
    background-color: var(--darkGrey);
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }

`
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: var(--darkGrey);
`