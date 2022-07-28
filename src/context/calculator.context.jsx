import { createContext, useState, useEffect } from "react";


const addToCal = (fields, toAdd) => [...fields, {...toAdd}]

const editSingleCal = (fields, id, formField) =>  {
    const {charge, amount} = formField
    return fields.map(item => (
        item.id === id ? {charge, amount } : item
    ))}
const removeSingleCal = (fields, id) => fields.filter(field => field.id !== id)
const removeAllCal = (fields) => fields.filter(field => {})

const initailStateCal = localStorage.getItem('calculator')
? JSON.parse(localStorage.getItem('calculator'))
: [];

const formFieldDefault = {
    charge: '',
    amount: 0,
}
const alertMeDefault = {
    show: false,
    text:'',
    type: '',
}

export const CalculatorContext = createContext({
    isEdit: false,
    setIsEdit: () => null,
    getId: '',
    setGetId: () => null,
    fields: [],
    addToCalculator: () => null,
    editSingleCalculator: () => null,
    removeSingleCalculator: () => null,
    removeAllCalculator: () => null,
    formField: {},
    setFormField: () => null,
    alertMessage: {},
    setAlertMessage: () => null,
})

export const CalculatorProvider = ({children}) => {
    const [formField, setFormField] = useState(formFieldDefault)
    const [fields, setFields] = useState(initailStateCal)
    const [isEdit, setIsEdit] = useState(false)
    const [getId, setGetId] = useState(null)
    const [alertMessage, setAlertMessage] = useState(alertMeDefault)


    useEffect (()=> {
        localStorage.setItem('calculator', JSON.stringify(fields))
    })


    const addToCalculator = toAdd =>  setFields(addToCal(fields, toAdd))
    const editSingleCalculator = () => setFields(editSingleCal(fields, getId, formField))
    const removeSingleCalculator = (getId) => setFields(removeSingleCal(fields, getId))
    const removeAllCalculator = () => setFields(removeAllCal(fields))
    const value = {
        formField, 
        setFormField, 
        fields, 
        addToCalculator, 
        editSingleCalculator, 
        removeSingleCalculator,
        removeAllCalculator,
        isEdit, 
        setIsEdit,
        getId,
        setGetId,
        alertMessage,
        setAlertMessage,
    }
    return <CalculatorContext.Provider value={value}>{children}</CalculatorContext.Provider>
}