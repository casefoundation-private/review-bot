export const ACTION = {
  USER: {
    LOGIN: 'USER_LOGIN',
    LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    LOGOUT: 'USER_LOGOUT',
    DETAILS: 'USER_DETAILS',
    FAVORITES: 'USER_FAVORITES',
    ADD_FAVORITE: 'USER_ADD_FAVORITE',
    DELETE_FAVORITE: 'USER_DELETE_FAVORITE',
    SET_NEEDS_PASSWORD_RESET: 'USER_SET_NEEDS_PASSWORD_RESET'
  },
  USERS: {
    SET: 'USERS_SET',
    SET_USER_PROP: 'USERS_SET_PROP'
  },
  MESSAGE: {
    SET: 'MESSAGE_SET',
    CLEAR: 'MESSAGE_CLEAR'
  },
  SUBMISSIONS: {
    SET: 'SUBMISSIONS_SET',
    SET_SORT: 'SUBMISSIONS_SET_SORT'
  },
  REVIEWS: {
    SET: 'REVIEWS_SET',
    REMOVE: 'REVIEWS_REMOVE',
    SET_PROMPT_VALUE: 'REVIEWS_SET_PROMPT_VALUE',
    SET_SCORE: 'REVIEWS_SET_SCORE',
    SET_FLAGGED: 'REVIEWS_SET_FLAGGED',
    INVALIDATE: 'REVIEWS_INVALIDATE',
    VALIDATE: 'REVIEWS_VALIDATE'
  },
  CONFIG: {
    'SET': 'CONFIG_SET'
  },
  NOTIFICATIONS: {
    'SET': 'NOTIFICATIONS_SET'
  }
}
