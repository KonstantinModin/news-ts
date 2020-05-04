import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';

const FORMIK_INITIAL_STATE = {
    country: "",
    category: "",
    q: "trump",
    pageSize: 20,

}

type formikDataType = typeof FORMIK_INITIAL_STATE;

const submitHandler = (values: formikDataType, actions: FormikHelpers<formikDataType>) => {
    console.log('Submit=', values);
    actions.setSubmitting(false);
}

// const formikRender = 

const FormComponent = () => {
    return (
        <Formik initialValues={FORMIK_INITIAL_STATE} onSubmit={submitHandler}>
            {formikBag => (
                <Form>
                    {Object.keys(FORMIK_INITIAL_STATE).map((e) => (
                        <div key={e} >
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

export default FormComponent
