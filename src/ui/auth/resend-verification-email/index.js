import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import autoBind from 'react-autobind';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Layout from 'ui/auth/layout';
import Alert from 'ui/common/alert';
import TextField from 'ui/common/form/fields/text-field';
import validator from 'ui/common/form/validator';
import SubmitButton from 'ui/common/form/submit-button';

import fields, { fieldNames } from './model';
import * as messages from './messages';
import { resendVerificationEmail } from 'store/auth/actions';
// import { selectIsForgotPasswordEmailSent } from 'store/auth/selectors';

const validate = validator(fields);

class ResetVerificationEmail extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  onSubmit(values) {
    return this.props.resendVerificationEmail.request(values, this.props.form);
  }

  render() {
    const { handleSubmit, submitting, error, intl: { formatMessage } } = this.props;

    return (
      <Layout title={formatMessage(messages.header.title)}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          {error && <Alert color="danger" inverse>
            {error}
          </Alert>}
          <div>
            <Field name={fieldNames.email} component={TextField} label={formatMessage(messages.labels.email)} />
          </div>
          <div className="mt-3">
            <SubmitButton label={formatMessage(messages.buttons.submit)} primary fullWidth disabled={submitting} />
          </div>
        </form>
      </Layout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resendVerificationEmail: {
      request: bindActionCreators(resendVerificationEmail.request, dispatch)
    }
  }
}

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'resend-verification-email',
  validate
})(injectIntl(ResetVerificationEmail)));
