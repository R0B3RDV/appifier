import React from 'react';
import { connect } from 'react-redux';

import { fetchApps } from '../actions/home';
import { scanInstalledApps } from '../actions/appManagement';

import Nav from './Nav';

class Layout extends React.Component {
  componentDidMount() {
    const { pathname, requestFetchApps, requestScanInstalledApps } = this.props;
    const el = this.scrollContainer;

    el.onscroll = () => {
      // Plus 300 to run ahead.
      if (el.scrollTop + 300 >= el.scrollHeight - el.offsetHeight && pathname === '/') {
        requestFetchApps();
      }
    };

    requestScanInstalledApps();
  }

  componentWillUnmount() {
    this.scrollContainer.onscroll = null;
  }

  render() {
    const { children, pathname } = this.props;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Nav pathname={pathname} />
        <div
          style={{ flex: 1, overflow: 'auto', paddingTop: 12, paddingBottom: 12 }}
          ref={(container) => { this.scrollContainer = container; }}
        >
          {children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: React.PropTypes.element, // matched child route component
  pathname: React.PropTypes.string,
  requestFetchApps: React.PropTypes.func,
  requestScanInstalledApps: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

const mapDispatchToProps = dispatch => ({
  requestFetchApps: () => {
    dispatch(fetchApps());
  },
  requestScanInstalledApps: () => {
    dispatch(scanInstalledApps());
  },
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(Layout);
