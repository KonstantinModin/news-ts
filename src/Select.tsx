import React from 'react';
import { Field } from 'formik';
import { Options } from './options';
import options from './options';

type SelectProps = { select: keyof Options };

const Select: React.FC<SelectProps> = ({ select }) => {
    // console.dir(set);
    return (
        <div>
            <label htmlFor={select}>Select country:</label>
            <Field as="select" name={select}
            // onChange={({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
            //     set(select, value);
            //     submit();
            // }}
            >
                {options[select].map(({ name, value }) => <option key={name} value={value}>{name}</option>)}

            </Field>
        </div>
    )
}

export default Select;
