import { 
  USER_LOGIN,
  USER_LOGOUT,
} from '../constants/actionType'

export function userLogin(user) {
  return {type: USER_LOGIN, user}
}

export function userLogout() {
  return {type: USER_LOGOUT}
}