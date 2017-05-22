import angular from 'angular';
import _ from 'lodash';

import { ErrErr } from 'app/services/err-err/err-err';
import { GoogleAnalytics } from 'app/services/google-analytics/google-analytics';
import { sendEvent, ONBOARDING_STEP_SETUP_YOUR_ACCOUNT_CLICKED } from 'app/services/usage-tracker/usage-tracker';
import { DEVELOPERS_SHOW_ACCESS_TOKENS_CREATE_ROUTE_STATE, HOME_INDEX_UPGRADE_LIVE_ROUTE_STATE, PLANS_CREATE_ROUTE_STATE, PLANS_INDEX_ROUTE_STATE, COMPANY_SETTINGS_ROUTE_STATE } from 'routes.constant.js';

const getStepsConfig = ($state) => {
  return {
    signed_up: {
      title: 'Create your account',
    },
    created_first_permanent_access_token: {
      title: 'Create an access token',
      href: $state.href(DEVELOPERS_SHOW_ACCESS_TOKENS_CREATE_ROUTE_STATE),
    },
    created_first_customer_via_api: {
      title: 'Add your first customer',
      href: 'https://developer.gocardless.com/getting-started/api/adding-your-first-customer/',
      target: '_blank',
    },
    created_first_payment_via_api: {
      title: 'Take your first payment',
      href: 'https://developer.gocardless.com/getting-started/api/taking-your-first-payment/',
      target: '_blank',
    },
    upgraded_to_live: {
      title: 'Switch to a live account',
      href: $state.href(HOME_INDEX_UPGRADE_LIVE_ROUTE_STATE),
    },
    connected_to_first_app: {
      title: 'Connect with an integration',
      href: 'https://gocardless.com/partners',
      target: '_blank',
    },
    created_first_plan: {
      title: 'Add your first plan',
      href: $state.href(PLANS_CREATE_ROUTE_STATE),
    },
    added_first_customer_to_plan: {
      title: 'Add a customer to your plan',
      // On plans/index, a notice is shown asking users to select a plan and add a customer
      href: $state.href(PLANS_INDEX_ROUTE_STATE),
    },
    completed_account_setup: {
      title: 'Set up your account',
      href: $state.href(COMPANY_SETTINGS_ROUTE_STATE),
      onClick: () => {
        GoogleAnalytics.send(['event', 'onboarding', ['onboarding', 'clicked-step', 'completed-account-setup'].join(':')]);
        sendEvent(ONBOARDING_STEP_SETUP_YOUR_ACCOUNT_CLICKED);
      },
    },
  };
};

export const onboardingStepControllerModule = angular
.module('onboardingStepControllerModule', [
]).controller('OnboardingStepController', [
  '$scope',
  '$window',
  '$state',
  function OnboardingStepController(
    $scope,
    $window,
    $state
  ) {
    const ctrl = this;

    const config = getStepsConfig($state);
    const stepConfig = _.get(config, ctrl.step.name);
    if (!stepConfig) {
      ErrErr.track(new Error(`Invalid onboarding step: ${ctrl.step.name}`));
    }

    _.extend(ctrl, {
      stepConfig,
    });
  },
]);
