import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../Hooks/useForm';
import { actionLoginSync } from '../redux/actions/actionLogin';

const Login = () => {
   const dispatch = useDispatch()

    const [formValue, handleInputChange, reset] = useForm({
            email: '',
            pass: '',
          
    })

    const {email, pass} = formValue
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(email, pass)
        dispatch(actionLoginSync(email, pass))
        reset()
    }

    return (
        <div>
            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" value={formValue.email} onChange={handleInputChange} />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="pass" value={formValue.pass} onChange={handleInputChange}/>
                </Form.Group>
               
                <Button type="submit" >Login</Button>
            </Form>
        </div>
    );
};

export default Login;