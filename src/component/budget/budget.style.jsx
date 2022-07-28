import styled from "styled-components";

import { FaTrash } from 'react-icons/fa';
import { BsBrushFill } from 'react-icons/bs';

export const TrashIcon = styled(FaTrash)`
    :hover{
        color: red;
    }
`
export const BrushIcon = styled(BsBrushFill)`
    :hover{
        color: red;
    }
`
///////////////////////////////////////////////
export const BudgetContainer = styled.div`
    margin: auto;
    height: 30px;
    width: 90%;
    border-radius: 2px;
    border: 2px solid rgb(206, 206, 206);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 0px 20px;
    transition: all .4s ease-in-out;
    &:hover{
        cursor: pointer;
        transform: scale(1.1);
        box-shadow: 5px 4px 5px rgb(160, 160, 160);
    }
`
export const Charge = styled.div`
    grid-column:1/span 5;
    display: flex;
    font-weight:500;
`
export const Amount = styled.div`
    grid-column: 6/ span 2;
    height: 80%;
    margin: auto 0px;  
    line-height: 1.45;
    font-weight:600;
    font-size: 13px;
    color: white;
    span {
        background-color: red;
        border-radius: 2px;
        padding: 0px 2px;
    }
`
export const IconsGroup = styled.div`
    grid-column: 8/ span 5 !important;  
    margin: auto 0px;

    span {
        display: flex;
        justify-content: space-between;
        width: 50px;
        float:right;
    }
    i {        
        &:hover {
            color: red;
        }
    }
`
