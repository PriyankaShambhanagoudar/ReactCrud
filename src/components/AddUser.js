import React from 'react'
import { Link } from 'react-router-dom';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';


export const AddUser = () => {
    return (
        <Form>
            <FormGroup>
                <Label htmlFor='name'>Name</Label>
                <Input type='text' placeholder='EnterName' id='name' name='name' required/>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to="/" className='btn btn-danger m1-2 '> Cancel</Link>
        </Form>
    )
}

export default AddUser;