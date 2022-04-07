import axios from "axios";

export const login = (email, password) => {
    return axios.post('https://appgastosbackend.herokuapp.com/api/users/login', {
    email,
    password
    
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
}

export const logout = (message) => {
    return axios.post('https://appgastosbackend.herokuapp.com/api/users/logout', {
    message
}, {
    headers: {
        'Content-Type': 'application/json'
    }
})
}

export const signUp = ({ name, email, password }) => {
    return axios.post('https://appgastosbackend.herokuapp.com/api/users', {
      name,
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

export const fetchAmount = (token) => {
    return axios.get('https://appgastosbackend.herokuapp.com/api/numbers', {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form/urlencoded'
        }
    })
}

export const createAmount = (text, amount, token) => {
    return axios.post('https://appgastosbackend.herokuapp.com/api/numbers', {
        text,
        amount
    }, 
    {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const deleteAmount = (id, token) => {
    return axios.delete(`https://appgastosbackend.herokuapp.com/api/numbers/${id}`,
    {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}