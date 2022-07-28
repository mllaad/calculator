import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    label {
        position: absolute;
        top: -20px;
        color: rgb(129, 129, 129);
    }
    input{
        width: 90%;
        appearance: none;
        border: none;
        border-bottom: 2px solid rgb(107, 107, 107);
    &:focus {
        outline:none!important;
    }
}
`