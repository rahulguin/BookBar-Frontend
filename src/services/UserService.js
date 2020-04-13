import {BACKEND_API} from "../common/constants";

export const logout = () =>
    fetch(`${BACKEND_API}/api/session`,
          {
              method: 'DELETE',
              credentials: 'include'
          }).then(res => res.json())

export const profile = () => {
    return fetch(`${BACKEND_API}/api/profile`,
                 {
                     method: 'POST',
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
                 }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("wrong input entry")
        }
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
          }).then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("wrong input entry")
        }
    })

