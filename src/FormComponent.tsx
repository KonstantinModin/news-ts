import React from 'react';
import options from './Options';
import { Options, StringOption, NumberOption } from './Options';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FormDataType } from './redux/types';
import { FORM_INITIAL_STATE } from './redux/reducer';
import { submitFormAction, getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import './FormComponent.css';

const FormComponent: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const submitHandler = (values: FormDataType, actions: FormikHelpers<FormDataType>) => {
        dispatch(submitFormAction(values));
        actions.setSubmitting(false);
        dispatch(getData());
    }

    const validate = (values: FormDataType) => {
        const errors: { q?: String } = {};
        if (!values.country && !values.category && !values.q.trim()) {
            errors.q = "You need to select something"
        }
        return errors
    }

    const renderSelect = (select: keyof Options) => (
        <div>
            <label htmlFor={select}>Select country:</label>
            <Field as="select" name={select}>
                {(options[select] as StringOption[] | NumberOption[]).map(({ name, value }) => <option key={name} value={value}>{name}</option>)}
            </Field>
        </div>
    )

    return (
        <Formik initialValues={FORM_INITIAL_STATE} onSubmit={submitHandler} validate={validate}>
            {formikBag => (
                <Form>
                    {renderSelect('country')}
                    {renderSelect('category')}
                    <div>
                        <label htmlFor="q">Keywords or a phrase to search for: </label>
                        <Field type="text" name="q" />
                        <ErrorMessage className="error" name="q" component="div" />
                    </div>
                    {renderSelect('pageSize')}
                    <button type="submit" disabled={formikBag.isSubmitting}>Get News</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComponent;
