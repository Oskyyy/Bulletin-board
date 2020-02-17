import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import db from '../../../tempDb';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from './Homepage.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(styles.homepage, styles.root)}>
    <div className={clsx(styles.homepage__welcome, styles.root)}>
      <h2>Homepage</h2>
      <h3 className={styles.welcome}>Welcome to Daliy Planet </h3>
      {children}
      <p>Check out latest notes, or log in to add your own note!</p>
      <div className={styles.homepage__cards}>
        {db.notes.map(note => (
          <Card key={note.id} className={styles.card}>
            <CardActionArea>
              <CardMedia
                className={styles.photo}
                image={note.photo}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  {note.title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {note.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              {/* <Button size="small" color="primary">
                Share
              </Button> */}
              <Button size='small' color='primary'>
                Go to card
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};