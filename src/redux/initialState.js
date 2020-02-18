import db from '../tempDb';

export const initialState = {
  posts: {
    data: db.notes,
    loading: {
      active: false,
      error: false,
    },
  },
  log: {
    logged: false,
    user: {
      admin: false,
      name: 'Jan',
      email: 'jan@example.com',
    },
  },
};