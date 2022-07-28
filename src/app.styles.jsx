import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 25px;
    text-align: center;
    margin: auto;
    width: 60%;
`
export const Title = styled.div`
    font-size: 30px;
    font-weight: 400;
    color: aliceblue;
    text-shadow: 5px 5px 10px #000000;
    cursor: default;
`
export const Total = styled.div`
    font-size: 30px;
    font-weight: 400;
    color: aliceblue;
    cursor: default;
    p {
    display: inline;
    background-color: red;
    border-radius: 4px;
    padding: 0px 5px;
    }
`