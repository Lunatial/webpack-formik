import React, {Component,} from 'react'
import {withFormik,} from 'formik'
import {object, bool, func, string,} from 'prop-types'

class MyInnerForm extends Component {
    static propTypes = {
        'values': object,
        'errors': object,
        'touched': object,
        'handleChange': func,
        'handleBlur': func,
        'handleSubmit': func,
        'isSubmitting': bool,
        'isValid': bool,
        'dirty': bool,
        'handleReset': func,
    };

    render() {
        const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>

                <label htmlFor="name" style={{'display': 'block',}}>
                    Név:
                </label>
                <input
                    name="name"
                    placeholder="Adja meg a nevét"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.name && touched.name ? 'text-input error' : 'ant-input'}
                />
                {errors.name
                && touched.name
                && <div className="input-feedback">{errors.name}</div>}

                <label htmlFor="password" style={{'display': 'block',}}>
                    Kód:
                </label>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {touched.password && errors.password && <div>{errors.password}</div>}

                <label htmlFor="email" style={{'display': 'block',}}>
                    Email:
                </label>
                <input
                    name="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 'text-input error' : 'text-input'}
                />
                {errors.email
                && touched.email
                && <div className="input-feedback">{errors.email}</div>}

                <label htmlFor="antinput" style={{'display': 'block',}}>
                    Ant Input:
                </label>
                <input
                    placeholder="ant input"
                    name="antinput"
                    type="text"
                    value={values.antinput}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.antinput && touched.antinput ? 'text-input error' : 'text-input'}
                />
                {errors.antinput
                && touched.antinput
                && <div className="input-feedback">{errors.antinput}</div>}

                <label htmlFor="checkbox" style={{'display': 'block',}} className="ant-checkbox-wrapper">
                    Checkbox:
                    <span className={`ant-checkbox ${values.checkbox ? 'ant-checkbox-checked' : ''}`}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            checked={values.checkbox}
                            onChange={handleChange}
                            className="ant-checkbox-input"
                        />
                        <span className="ant-checkbox-inner"></span>
                     </span>
                </label>

                <button
                    type="button"
                    className="outline"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >
                    Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>

            </form>
        )
    }
}

const TestForm = withFormik({
    'mapPropsToValues': () => ({
        'name': '',
        'password': '',
        'email': '',
        'antinput': '',
        'checkbox': true,
    }),
    'handleSubmit': (values, {setSubmitting,}) => {
        setTimeout(() => {
            /* eslint-disable-next-line no-console */
            console.log(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 1000)
    },
    'displayName': 'formikTest',
})(MyInnerForm);

export default TestForm
