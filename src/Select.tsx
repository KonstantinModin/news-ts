import React from 'react';
import { Field, FormikHelpers } from 'formik';
import { FormDataType } from './redux/types';
import { Options } from './options';
import options from './options';

type SelectProps = { select: keyof Options, bag: FormikHelpers<FormDataType> };

const Select: React.FC<SelectProps> = ({ select, bag: { setFieldValue, submitForm } }) => {

    const selectOnChangeHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(select, value);
        submitForm();
    }

    return (
        <div>
            <label htmlFor={select}>Select {select}:</label>
            <Field as="select" name={select} onChange={selectOnChangeHandler} >
                {options[select].map(({ name, value }) => <option key={name} value={value}>{name}</option>)}
            </Field>
        </div>
    )
}

export default Select;
