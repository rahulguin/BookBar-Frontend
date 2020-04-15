import {BACKEND_API} from "../common/constants";

export const logout = () =>
    fetch(`${BACKEND_API}/api/session`,
          {
              method: 'DELETE',
              credentials: 'include'
          })

export const updateProfile = (user) => {
    return fetch(`${BACKEND_API}/api/profile`,
                 {
                     method: 'POST',
                     body: JSON.stringify(user),
                     headers: {
                         'content-type': 'application/json'
                     },
                     credentials: 'include'
                 }).then(response => response.json())
}

export const login = (user) => {
    return fetch(`${BACKEND_API}/api/session`,
                 {
                     method: 'POST',
                     body: JSON.stringify(user),
                     headers: {
                         'content-type': 'application/json'
                     },
                     credentials: 'include'
                 })
}

export const register = (user) =>
    fetch(`${BACKEND_API}/api/users`,
          {
              method: 'POST',
              body: JSON.stringify(user),
              headers: {
                  'content-type': 'application/json'
              },
              credentials: 'include'
          })

export const checkLoggedIn = async preloadedStateFn => {
    const response = await fetch(`${BACKEND_API}/api/session`,
                                 {credentials: 'include'}
                                 );
    const {user} = await response.json();
    let preloadedState = {};
    if (user) {
        preloadedState = {
            session: user
        };
    }
    return preloadedState;
};

