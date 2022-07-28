import { useContext } from 'react';
import { CalculatorContext } from '../../context/calculator.context';
import {
Container,
}  from './alert-message.style'


const AlertMessage = () => {
    const {alertMessage} = useContext(CalculatorContext)
    const {type} = alertMessage
    
    const color = () => {
        let bgColor = ''
        switch (type) {
            case 'danger':
                bgColor = 'red'
                break;
            case 'success':
                bgColor = 'green'
                break;
            default:
                bgColor = ''
                break;
        }
        return bgColor
    }
    return (
        <Container bg={color}>
            <h1>
                {alertMessage.show && alertMessage.text}
            </h1>
        </Container>
    )
}


export default AlertMessage;