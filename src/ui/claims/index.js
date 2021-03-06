import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { Switch, Route } from 'react-router-dom';

import routeTemplates from 'ui/common/routes/templates';

import MyClaims from './my';
import NewClaim from './new';
import ClaimDetails from './details';

class Claims extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={routeTemplates.claims.root} component={MyClaims} />
        <Route exact path={routeTemplates.claims.new} component={NewClaim} />
        <Route exact path={routeTemplates.claims.details} component={ClaimDetails} />
      </Switch>
    );
  }
}

export default injectIntl(Claims);
