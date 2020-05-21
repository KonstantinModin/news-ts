import React from 'react';
import { Field } from 'formik';
import { Options } from './Options';
import options from './Options';

type SelectProps = { select: keyof Options };

const Select: React.FC<SelectProps> = ({ select }) => {
    return (
        <div>
            <label htmlFor={select}>Select country:</label>
            <Field as="select" name={select}>
                {(options[select]).map(({ name, value }) => <option key={name} value={value}>{name}</option>)}
            </Field>
        </div>
    )
}

export default Select;
