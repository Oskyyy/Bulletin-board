import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import db from '../../../tempDb';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from './Homepage.module.scss';

const Component = () => {
  return (
    <div className={clsx(styles.welcome, styles.root)}>
      <h3 className={styles.welcome}>Welcome to Daily Planet </h3>
      <p>Check out latest notes, or log in to add your own note!</p>
      <div className={styles.cards}>
        <Card className={styles.card}>
          <CardActionArea href={`/post/add`} className={styles.cardAction}>
            <CardMedia
              className={styles.photo}
              image='https://images.pexels.com/photos/158771/notebook-pen-table-blank-158771.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
              title='Add your note!'
            />
            <CardContent>
              <Typography gutterBottom variant='inherit' component='h2'>
                Add your note!
              </Typography>
              <Typography variant='inherit' component='p'>
                <span className={styles.plus}>+</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        {db.notes.map(note => (
          <Card key={note.id} className={styles.card}>
            <CardActionArea
              href={`/post/${note.id}`}
              className={styles.cardAction}
            >
              <CardMedia
                className={styles.photo}
                image={note.photo}
                title={note.title}
              />
              <CardContent>
                <Typography gutterBottom variant='inherit' component='h2'>
                  {note.title}
                </Typography>
                <Typography variant='inherit' component='h3'>
                  {note.local}
                </Typography>
                <Typography variant='inherit' component='h4'>
                  {note.pubDate}
                </Typography>
                <Typography variant='inherit' component='p'>
                  {note.status}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
};

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