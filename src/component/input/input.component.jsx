
import {
    Container
} from './input.style'

const Input = ({label, ...inputOpstions}) => {

    return (
        <Container>
        <label>{label}</label>
        <input type="text" {...inputOpstions}/>
        </Container>
        
    )
}
export default Input