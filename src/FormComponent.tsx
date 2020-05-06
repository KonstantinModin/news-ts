import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FORM_INITIAL_STATE } from './redux/reducer';
import { submitFormAction, getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import './FormComponent.css';

type formikDataType = typeof FORM_INITIAL_STATE;

const validation = Yup.object({
    country: Yup.string(),
    category: Yup.string(),
    q: Yup.string().required(),
    pageSize: Yup.number().required().positive().integer()

});

const FormComponent = () => {
    const dispatch = useDispatch();

    const submitHandler = (values: formikDataType, actions: FormikHelpers<formikDataType>) => {
        console.log('Submit=', values);
        dispatch(submitFormAction(values));
        actions.setSubmitting(false);
        dispatch(getData());
    }

    return (
        <Formik initialValues={FORM_INITIAL_STATE} onSubmit={submitHandler} validationSchema={validation}>
            {formikBag => (
                <Form>
                    {Object.keys(FORM_INITIAL_STATE).map((e) => (
                        <div key={e} >
                            <label htmlFor={e}>{e}</label>
                            <Field type="text" name={e} />
                            <ErrorMessage name={e} component="div" />
                        </div>
                    ))}
                    <button type="submit" disabled={formikBag.isSubmitting}>Get News</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComponent;
