import React, {Component,} from 'react'
import {withFormik,} from 'formik'
import {bool, func, object} from "prop-types";

class MyYoutubeForm extends Component {
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
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="youtubeemail"
                    placeholder="Email"
                    value={values.youtubeemail}
                    onChange={handleChange}
                />
                <br/>

                <input
                    type="password"
                    name="youtubpassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                <br/>

                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        )
    }
}

const YoutubeForm = withFormik({
    mapPropsToValues({instance,}) {
        return {
            youtubeemail: instance || '',
        }
    },
    handleSubmit(values, {setSubmitting}) {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 1000)
    },
    'displayName': 'youtubeFormikTest',
})(MyYoutubeForm);

export default YoutubeForm