import {v4 as uuidv4} from 'uuid'
import { useContext } from 'react'
import { CalculatorContext } from '../../context/calculator.context'

import Input from '../input/input.component'
import Budget from '../budget/budget.component'
import {
    Container,
    Form,
    GroupInput,
    Btn,
    TrashIcon,
    PenIcon,
} from './calculator.style'



const Calculator = () => {
    const {
        fields,
        addToCalculator, 
        editSingleCalculator,
        isEdit, 
        setIsEdit,
        formField, 
        setFormField,
        removeAllCalculator,
        setAlertMessage,
    } = useContext(CalculatorContext)

    const {charge, amount} = formField

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormField({...formField,[name]: value})
    }
    const alertHandler = ({type, text}) => {
        setAlertMessage({show: true, type, text})
        setTimeout(()=> {
            setAlertMessage({show:false})
        },2000)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (charge !=='' && amount > 0) {
            if (isEdit) {
                editSingleCalculator()
                setIsEdit(false)
                alertHandler({
                    text: 'item Edited',
                    type: 'success'
                }) 
            } else {
                const singleField = { id: uuidv4(), charge, amount}
                addToCalculator(singleField)
                alertHandler({
                    text: 'item Added',
                    type: 'success'
                }) 
            }
            setFormField({charge:'', amount: 0})
        } else {
            alertHandler({
                text: `charge can't be empty value and amount value has to be bigger than zero`,
                type: 'danger'
            })
        }
    }
    const clearHandler = () => {
        removeAllCalculator()
        alertHandler({
            text: `all items have been removed`,
            type: 'danger'
        })
    }
    return(
        <Container>
            <Form onSubmit={submitHandler}>
                <GroupInput>
                    <Input 
                    label='Charge'
                    name='charge'
                    value={charge}
                    onChange={changeHandler}
                        />
                    <Input 
                    label='Amount'
                    name='amount'
                    value={amount}
                    type='number'
                    onChange={changeHandler}
                    />
                </GroupInput>
                <Btn onClick={submitHandler}><span>{isEdit?'EDIT': 'SUBMIT'}</span><PenIcon/></Btn> 
            </Form>
            {fields.map((field, key)=> (
                <Budget key={key} item={field} alertHandler={alertHandler}/>
            ))}
            {fields.length > 0 && <Btn onClick={clearHandler}><span>CLEAR</span><TrashIcon/></Btn>}
        </Container>
    )
}
export default Calculator