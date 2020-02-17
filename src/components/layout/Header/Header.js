import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

class Component extends React.Component {
  state = {
    logged: true,
  };

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  //temp state management for logon
  onClick = () => {
    this.setState({
      logged: true,
    });
  };

  checkLogon() {
    const { logged } = this.state;
    if (!logged) {
      return (
        <button
          className={clsx(styles.btn, styles.btn__google)}
          onClick={this.onClick}
        >
          temp login/ Login with Google
        </button>
      );
    } else {
      return (
        <div className={clsx(styles.header__logged)}>
          <Button
            variant='contained'
            className={clsx(styles.btn, styles.btn__bulletin)}
            href='/myPosts'
          >
            My Bulletins
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={clsx(styles.btn)}
            onClick={this.loggout}
          >
            LogOut
          </Button>
        </div>
      );
    }
  }
  render() {
    return (
      <div className={clsx(styles.header, styles.root)}>
        {this.checkLogon()}
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  //Container as Header,
  Component as HeaderComponent,
};