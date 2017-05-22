import _ from 'lodash';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';
import React from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, SubmissionError, reduxForm, formValueSelector } from 'redux-form';

import { subscriptionDescription } from 'app/helpers/subscription-name-format/subscription-name-format.filter';
import { showAlert } from 'store/alerts/alerts.reducer';
import { fetchInitialState, addCustomers } from 'store/customers-create-email/customers-create-email.reducer';
import { GoogleAnalytics } from 'app/services/google-analytics/google-analytics';
import { If } from 'app/components/if/if';
import { isFormError } from 'app/services/api-error/api-error';
import { parsePointer } from 'app/services/json-pointer/json-pointer';
import { replace } from 'shared/router/router';
import { TaggedInput } from 'app/components/tagged-input/tagged-input.jsx';

import { push } from 'shared/router/router';

export let CustomersCreateEmailContainer = React.createClass({
  componentWillMount() {
    this.props.fetchInitialState();
  },

  renderTextarea({ input, className, target, label, placeholder, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label className="label">{ label }</label>
        <div>
          <textarea className={ className } { ...input } placeholder={ placeholder } />
          { touched && ((error && <span className="form-error">{ error }</span>) || (warning && <span>{ warning }</span>)) }
        </div>
      </div>
    );
  },

  renderField({ input, className, target, label, placeholder, type, meta: { touched, error, warning } }) {
    return (
      <div>
        <label className="label">{ label }</label>
        <div>
          <input className={ className } { ...input } placeholder={ placeholder } />
          { touched && ((error && <span className="form-error">{ error }</span>) || (warning && <span>{ warning }</span>)) }
        </div>
      </div>
    );
  },

  render() {
    const props = this.props;

    const { isShowingAdvancedOptions } = props;

    const addToPaymentPlanClassName = classNames({
      'is-active': this.props.addToPaymentPlan,
      'checkbox-container': true,
      'u-margin-Bm': true,
      'u-padding-An': true,
    });

    const requireApprovalClassName = classNames({
      'is-active': this.props.requireApproval,
      'checkbox-container': true,
      'u-margin-Bm': true,
      'u-padding-An': true,
    });

    return (
      <div>
        <form onSubmit={ props.form.handleSubmit(this.props.addCustomers) }>
          <div className="u-padding-Hm">
            <FieldArray
            name="email"
            // emails={ props.emails }
            component={ TaggedInput }
            placeholder={ 'Enter as many email addresses as you like' }
            validate={ (val) => { return !_.isEmpty(val) ? undefined : 'At least one email is required'; } }
            />

            <Field
            component={ this.renderTextarea }
            className="input-textarea"
            id="comment"
            type="textarea"
            name="message"
            label="Message"
            placeholder="We'll include this in the email we send to your customer." />

            <If condition={ props.plans.length > 0 }>
              <div className={ addToPaymentPlanClassName }>
                <label htmlFor="addToPaymentPlan" className="u-direction-row u-padding-As u-is-actionable">
                  <Field
                  component="input"
                  type="checkbox"
                  className="checkbox__input u-flex-none u-margin-Rs"
                  name="addToPaymentPlan"
                  id="addToPaymentPlan"
                  />
                  <div>
                    <span>Add to payment plan</span>
                  </div>
                </label>

                <If condition={ this.props.addToPaymentPlan }>
                  <div className="u-padding-Hs u-padding-Bs">
                    <div className="select-container u-margin-Bn u-full-width">
                      <Field id="plan" className="select-container__select u-full-width" aria-label="Add customers to plan" name="plan" component="select">
                        <option value="" disabled>Choose a plan</option>
                        { props.plans.map((plan) => <option value={ plan.id } key={ plan.id }>{ `${ plan.name } (${ subscriptionDescription(plan) })` }</option> ) }
                      </Field>
                    </div>
                  </div>
                </If>
              </div>
            </If>
          </div>

          <div className="u-padding-Hm u-margin-Bm u-direction-row">
            <div className="u-align-end">
              <label className="u-color-primary u-text-xs u-is-actionable" htmlFor="isShowingAdvancedOptions">{ isShowingAdvancedOptions ? 'Hide advanced options' : 'Advanced options' }</label>
              <Field
              component="input"
              type="checkbox"
              className="checkbox__input u-flex-none u-margin-Rs u-is-hidden"
              name="isShowingAdvancedOptions"
              id="isShowingAdvancedOptions"
              />
            </div>
          </div>

          <If condition={ isShowingAdvancedOptions }>
            <div>
              <hr className="u-dashed-line" />
              <div className="u-padding-Am">
                <div className={ requireApprovalClassName }>
                  <label htmlFor="requireApproval" className="u-direction-row u-padding-As u-is-actionable">
                    <Field
                    component="input"
                    type="checkbox"
                    className="checkbox__input u-flex-none u-margin-Rs"
                    name="requireApproval"
                    id="requireApproval"
                    />
                    <div>
                      <span>Require customer to approve each payment</span>
                    </div>
                    <div className="tooltip u-flex-no-grow u-justify-center">
                      <InlineSVG
                      raw
                      width="13px"
                      height="13px"
                      src={ require('assets/svgs/help-icon.svg') }
                      className="injected-svg help-tooltip__icon"
                      />

                      <div className="tooltip__label help-tooltip__label help-tooltip__label--top-left tooltip__label--top-left">
                        To reassure customers, you can set it so that they approve each subscription or individual payment.
                      </div>
                    </div>
                  </label>
                </div>

                <div className="select-container u-margin-Bn u-full-width">
                  <label className="label required" htmlFor="language">Email customers in</label>
                  <Field id="language" className="select-container__select u-full-width" aria-label="Customer email language" name="language" component="select">
                    { props.languages.map((language) => <option value={ language.code } key={ language.code }>{ language.label }</option> ) }
                  </Field>
                </div>
              </div>
            </div>
          </If>
          <div className="u-padding-Axs dialog-footer u-direction-row">
            <button className="btn btn--hollow u-padding-Hm u-flex-none" onClick={ () => props.push('/customers') } type="button">Cancel</button>
            <button className="btn btn--block u-margin-Lxs" type="submit" disabled={ props.form.invalid || props.form.submitting }>Add customers</button>
          </div>
        </form>
      </div>
    );
  },
});

// NOTE: Figure out where to keep the form names, constants file?
const FORM_NAME = 'customers-create-email-form';

CustomersCreateEmailContainer = reduxForm(
  {
    form: FORM_NAME,
    destroyOnUnmount: false,
    enableReinitialize: false,
    propNamespace: 'form',
    fields: [
      'email[]',
      'message',
      'addToPaymentPlan',
      'plan',
      'requireApproval',
      'isShowingAdvancedOptions',
      'language',

      'tag-list-input',
    ],
  }
)(CustomersCreateEmailContainer);

export const CustomersCreateEmailContainerScreen = connect(
  (state) => {
    const selector = formValueSelector(FORM_NAME);

    const { plans, languages } = state.customersCreateEmailReducer;

    return {
      plans,
      languages,
      addToPaymentPlan: selector(state, 'addToPaymentPlan'),
      requireApproval: selector(state, 'requireApproval'),
      emails: selector(state, 'email'),
      isShowingAdvancedOptions: selector(state, 'isShowingAdvancedOptions'),
      initialValues: {
        language: 'en',
      },
    };
  },
  (dispatch) => ({
    addCustomers(details, _dispatch, { reset }) {
      const payload = {
        authorisation_requests: _.map(details.email, (email) => {
          return _.assign(
            {},
            {
              email,
              message: details.message,
              language: details.language,
              payments_require_approval: details.requireApproval,
              links: {
                plan: details.plan,
              },
            }
          );
        }),
      };
      return dispatch(addCustomers(payload))
        .then(() => {
          GoogleAnalytics.send(['event', 'customers', 'customers:invite_email', undefined, _.size(details.email)]);
          // NOTE: Reset form so that it's empty when opened next time
          reset();
          dispatch(showAlert({ message: 'Email invites have been sent to your customers' }));
          return dispatch(replace('/customers?status=pending', { reload: true }));
        })
        .catch((err) => {
          // TODO: Where did this conversion happen previously?
          const error = {
            data: {
              ...err,
            },
          };

          if (!isFormError(error)) {
            throw err;
          }

          const formErrors = _.get(error, 'data.error.errors');
          const submissionError = formErrors.reduce(
            (fold, formError) => {
              const pointerParts = parsePointer(formError.request_pointer);
              const isEmailError = pointerParts.length === 3 && pointerParts[0] === 'authorisation_requests' && pointerParts[2] === 'email';
              const path = isEmailError ? [formError.field, pointerParts[1]] : ['_error', fold._error.length];
              return _.set(
                fold,
                path,
                formError.message
              );
            },
            {
              email: [],
              _error: [],
            }
          );
          throw new SubmissionError(submissionError);
        });
    },
    fetchInitialState() {
      return dispatch(fetchInitialState());
    },
    push(href) {
      return dispatch(push(href));
    },
  })
)(CustomersCreateEmailContainer);
