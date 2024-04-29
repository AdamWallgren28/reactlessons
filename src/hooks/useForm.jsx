import { useState } from 'react';

export function useForm (initialValues) {

    let [values, setValues] = useState(initialValues);

    let handleChange = (e) => {
    let { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
        
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with values:', values);
    };

    return {
        values,
        handleChange,
        handleSubmit,
    };
}
