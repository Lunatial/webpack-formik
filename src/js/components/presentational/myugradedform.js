import React, {Component,} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import {bool, func, object} from "prop-types";


class MyUpgradedYoutubeForm extends Component {

    render() {
        const {
            values,
            isSubmitting,
            errors,
            touched,
        } = this.props;

        return (
            <Form>
                <div className="field">

                    <label className="label" htmlFor="upgradedtext">
                        Név:
                    </label>
                    {errors.upgradedtext
                    && touched.upgradedtext
                    && <p className="help is-danger">{errors.upgradedtext}</p>}
                    <Field
                        type="text"
                        name="upgradedtext"
                        placeholder="Ide vmi szöveg"
                        component="input"
                        className="input"
                    />

                </div>

                <div className="field">
                    <label className="label" htmlFor="upgradedpassword">
                        Kód:
                    </label>
                    {errors.upgradedpassword
                    && touched.upgradedpassword
                    && <p className="help is-danger">{errors.upgradedpassword}</p>}
                    <Field
                        type="password"
                        name="upgradedpassword"
                        placeholder="Password"
                        className="input"
                        component="input"
                    />
                </div>

                <div className="field">
                    <label className="label" htmlFor="nehezseg">
                        Nehézségi szint:
                    </label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <Field
                                name="nehezseg"
                                component="select"
                            >
                                <option value="nightmare">Nightmare</option>
                                <option value="hard">Hard</option>
                                <option value="normal">Normal</option>
                                <option value="easy">Easy</option>
                                <option value="nothinglike">Nothing</option>
                            </Field>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="field">
                    <label htmlFor="secondCheckbox">
                        <Field
                            type="checkbox"
                            name="secondCheckbox"
                            checked={values.secondCheckbox}
                            id="secondCheckbox"
                        />
                        Join us!
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button is-success is-rounded"
                >
                    Submit
                </button>
            </Form>
        )
    }

    static propTypes = {
        'values': object,
        'errors': object,
        'touched': object,
        'isSubmitting': bool,
    };
}

const MyUpgradedForm = withFormik({
    mapPropsToValues({newsletter,}) {
        return {
            "upgradedtext": '',
            "upgradedpassword": '',
            "nehezseg": 'easy',
            "secondCheckbox": newsletter || true,
        }
    },
    handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        setTimeout(() => {
            if (values.upgradedtext === "kutyaláb") {
                setErrors({upgradedtext: 'Ezt nem mondhatod komolyan!'})
            } else {
                console.log(JSON.stringify(values, null, 2));
                resetForm();
            }
            setSubmitting(false)
        }, 1300)
    },
    'displayName': 'MyUpgradedFormTest',
    validationSchema: Yup.object().shape({
        upgradedtext: Yup.string()
            .required('Szükséges mező'),
        upgradedpassword: Yup.string()
            .min(4, 'A kódnak 4 karakternél hosszabbnak kell lennie')
            .max(12, 'A kódnak 12 karakternél rövidebbnek kell lennie')
            .required('Szükséges mező')
    }),
})(MyUpgradedYoutubeForm);

export default MyUpgradedForm