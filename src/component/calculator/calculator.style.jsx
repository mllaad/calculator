import styled from "styled-components";
import { FaTrash, FaPencilAlt } from 'react-icons/fa';

export const Container = styled.div`
    width: 100%;
    padding: 30px 30px;
    background-color: white;
    margin: auto;
    display: grid;
    row-gap: 20px;
    transition: all .2s ease-in-out;
`
export const Form = styled.form`
    display: grid;
    row-gap: 30px;
`
export const GroupInput = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Btn = styled.button`
    width: 50px;
    border: none;
    border-radius: 2px;
    background-color: rgb(255, 47, 47);
    margin: auto;
    padding: 7px 7px;
    cursor: pointer;
    width: 100px;
    box-shadow: 2px 2px 3px rgb(178, 178, 178);
    display: flex;
    justify-content: space-around;
    transition: all .4s ease-in-out;
    span {
        color: white;
        margin: auto 0px;
    }
    i {
        color: white;
        font-size: 10px;
        display: flex;
        margin: auto 0px;
    }
    &:hover {
        transform: scale(1.2);
    }
`
export const TrashIcon = styled(FaTrash)`
    color: white;
`
export const PenIcon = styled(FaPencilAlt)`
    color: white;
`
