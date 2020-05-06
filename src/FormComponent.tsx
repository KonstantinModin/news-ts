import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { FormDataType } from './redux/types';
import { FORM_INITIAL_STATE } from './redux/reducer';
import { submitFormAction, getData } from './redux/actions';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import './FormComponent.css';

const FormComponent: React.FC<{}> = () => {
    const dispatch = useDispatch();

    const submitHandler = (values: FormDataType, actions: FormikHelpers<FormDataType>) => {
        console.log('Submit=', values);
        dispatch(submitFormAction(values));
        actions.setSubmitting(false);
        dispatch(getData());
    }

    // type FormikErrorsType = {
    //     country?
    // }

    const validate = (values: FormDataType) => {
        const errors: { q?: String } = {};
        if (!values.country && !values.category && !values.q.trim()) {
            errors.q = "You need to select something"
        }
        return errors
    }

    return (
        <Formik initialValues={FORM_INITIAL_STATE} onSubmit={submitHandler} validate={validate}>
            {formikBag => (
                <Form>
                    <div>
                        <label htmlFor="country">Select country:</label>
                        <Field as="select" name="country">
                            <option value="">not specified</option>
                            <option value="us">USA</option>
                            <option value="de">Germany</option>
                            <option value="gb">Great Britain</option>
                            <option value="ru">Russia</option>
                            <option value="ua">Ukraine</option>
                            <option value="it">Italy</option>
                            <option value="nl">Netherlands</option>
                            <option value="fr">France</option>
                            <option value="ar">Argentina</option>
                            <option value="at">Austria</option>
                            <option value="au">Australia</option>
                            <option value="be">Belgium</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="ch">Switzerland</option>
                            <option value="cn">China</option>
                            <option value="hk">Hong Kong</option>
                            <option value="cu">Cuba</option>
                            <option value="cz">Czech Republic</option>
                            <option value="eg">Egypt</option>
                            <option value="id">Indonesia</option>
                            <option value="il">Israel</option>
                            <option value="in">India</option>
                            <option value="jp">Japan</option>
                            <option value="kr">South Korea</option>
                            <option value="mx">Mexico</option>
                            <option value="my">Malasia</option>
                            <option value="no">Norway</option>
                            <option value="nz">New Zeland</option>
                            <option value="pl">Poland</option>
                            <option value="sa">Saudi Arabia</option>
                            <option value="sg">Singapore</option>
                            <option value="tr">Turkey</option>
                            <option value="za">South Africa</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="category">Select category:</label>
                        <Field as="select" name="category">
                            <option value="">not specified</option>
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </Field>
                    </div>
                    <div>
                        <label htmlFor="q">Keywords or a phrase to search for: </label>
                        <Field type="text" name="q" />
                        <ErrorMessage className="error" name="q" component="div" />
                    </div>
                    <div>
                        <label htmlFor="pageSize">Select page size:</label>
                        <Field as="select" name="pageSize">
                            <option value="20">20</option>
                            <option value="40">40</option>
                            <option value="60">60</option>
                            <option value="80">80</option>
                            <option value="100">100</option>
                        </Field>
                    </div>
                    <button type="submit" disabled={formikBag.isSubmitting}>Get News</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComponent;
