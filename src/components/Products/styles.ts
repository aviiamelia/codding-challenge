import styled from "styled-components"

export const CartContainer = styled.div`
    display: flex;
    min-height: 70vh;
    padding: 10px 10px;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    min-width: 250px;
    border-radius: 8px;
    border: 2px solid var(--darkAcquaGreen);
    align-items: center;
`

export const Span = styled.div`
    left: 4%;
    width: 100%;
    color: white;
    font-size: 35px;
    top: 2%;
`
export const SecondaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 400px;
    max-height: 400px;
    overflow-y: auto;
    ::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 8px;
}
::-webkit-scrollbar-thumb {
  background: var(--darkAcquaGreen);
  border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`
export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
export const Number = styled.div`
    color: white;
    font-size: 20px;
    top: 15%;
    line-height: 50px;
    left: 0;
    font-weight: 500;
`
export const InputContainer = styled.div`
    display: flex;
    position: absolute;
    top: 10%;
    right: 18%;
    min-width: 200px;
    justify-content: center;
`
export const Input = styled.input`
    width: 450px;
    height: 40px;
    font-size: 20px;
    padding-left: 5px;
    font-weight: 200;
    border-radius: 8px;
`
export const ProductsContainer = styled.div`
    display: flex;
    min-width: 1080px;
    min-height: 400px;

`