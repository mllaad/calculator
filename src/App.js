
import { useContext } from "react";
import Calculator from "./component/calculator/calculator.component";
import AlertMessage from "./component/alert/alert-message.component";
import { CalculatorContext } from "./context/calculator.context";

import {
  Container,
  Title,
  Total,
} from './app.styles'

const App = () => {
  const {
    fields,
    formField,
    alert,
    setAlertMe,
  } = useContext(CalculatorContext)
  const total = fields.reduce((total, field) => total + parseInt(field.amount), 0)
  return (
    <Container>
      <AlertMessage/>  
      <Title>BUDGET CALCULATOR</Title>
      <Calculator/>
      <Total>TOTAL SPENDING : <p>${total}</p></Total>
    </Container>
  )
}
export default App;