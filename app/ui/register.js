'use client';
import React, { useEffect, useState, useContext} from 'react'
import AuthContext from '../contexts/AuthContext';

export default function Register() {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(email, password)
    }, [email, password])

    const submitHandler = (e) => {
        e.preventDefault();
        //register({email, password});
    }

    const { register } = useContext(AuthContext);

    return (
        <p>
            Register Component!
        </p>
    )
}