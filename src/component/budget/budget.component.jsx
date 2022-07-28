import { useContext } from 'react'
import { CalculatorContext } from '../../context/calculator.context'


import {
    BudgetContainer,
    Charge,
    Amount,
    IconsGroup,
    TrashIcon,
    BrushIcon
} from './budget.style'

const Budget = ({item, alertHandler}) => {
    const {charge, amount, id, } = item
    const {
        setIsEdit,
        setGetId, 
        fields, 
        setFormField,
        removeSingleCalculator,
        setAlertMessage,
    } = useContext(CalculatorContext)

    const editHandler = () => {
        setIsEdit(true)
        setGetId(id)
        fields.map(
            field => field.id === item.id ? 
            setFormField({charge: field.charge,amount:field.amount}) :
            field
            )
    }
    const removeHandler = () => {
        removeSingleCalculator(id)
        setIsEdit(false)
        alertHandler
        ({
            type:'danger',
            text:'item removed'
        })
    }
    return (
        <BudgetContainer>
        <Charge>{charge}</Charge>
        <Amount><span>${amount}</span></Amount>
        <IconsGroup>
            <span>
            <BrushIcon onClick={editHandler}/>
            <TrashIcon onClick={removeHandler}/>
            </span>
        </IconsGroup>
        </BudgetContainer>
    )
}
export default Budget