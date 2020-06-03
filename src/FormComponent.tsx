import React from 'react';
import Select from './Select';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FormDataType } from './redux/types';
import { FORM_INITIAL_STATE } from './redux/reducer';
import { submitFormAction, getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import './FormComponent.css';

const FormComponent: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const submitHandler = (values: FormDataType, actions: FormikHelpers<FormDataType>) => {

        // disable auto submit if no params
        if (values.category || values.country || values.q) {
            dispatch(submitFormAction(values));
            dispatch(getData());
        }

        actions.setSubmitting(false);
    }

    const validate = (values: FormDataType) => {
        const errors: { q?: String } = {};
        if (!values.country && !values.category && !values.q.trim()) {
            errors.q = "You need to select something"
        }
        return errors
    }

    // 
    // TODO : submit on select onChange / types
    // 

    return (
        <Formik initialValues={FORM_INITIAL_STATE} onSubmit={submitHandler} validate={validate}>
            {formikBag => (
                <Form>
                    <Select select='country' bag={formikBag} />
                    <Select select='category' bag={formikBag} />
                    <div>
                        <label htmlFor="q">Keywords or a phrase to search for: </label>
                        <Field type="text" name="q" />
                        <ErrorMessage className="error" name="q" component="div" />
                    </div>
                    <Select select='pageSize' bag={formikBag} />
                    <button type="submit" disabled={formikBag.isSubmitting}>Get News</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComponent;
