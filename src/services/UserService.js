import {BACKEND_API} from "../common/constants";

export const logout = () =>
    fetch(`${BACKEND_API}/api/session`,
          {
              method: 'DELETE',
              credentials: 'include'
          })

export const updateProfile = (user) => {
    return fetch(`${BACKEND_API}/api/users/updateProfile`,
                 {
                     method: 'POST',
                     body: JSON.stringify(user),
                     headers: {
                         'content-type': 'application/json'
                     },
                     credentials: 'include'
                 })
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
    console.log('in checkLoggedIn')
    const localSession = JSON.parse(localStorage.getItem('session'))
    let preloadedState = {};
    if(localSession){
        console.log('localSession')
        console.log(localSession)
        preloadedState = {
            session: localSession
        }
    }
    else {
        const response = await fetch(`${BACKEND_API}/api/session`,
                                     {credentials: 'include'}
        );
        const {user} = await response.json();
        if (user) {
            localStorage.setItem('session', JSON.stringify(user))
            preloadedState = {
                session: user
            };
        }
    }
    return preloadedState;
};

export const getUserDetails = (userId) => fetch(`${BACKEND_API}/api/users/${userId}`,
                                          {credentials: 'include'}).then(res => res.json())

