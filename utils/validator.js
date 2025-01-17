const validator = require('validator')


const validateUserData = (userData) => {
    const { email, name } = userData

    if (!validator.isEmail(email)) {
        throw new Error('Invalid email address')
    }

    const trimName = name.trim()
    const regexName = trimName.replace(/[^a-zA-Z\s]/g, '')

    if (regexName.length === 0) {
        throw new Error('Name cannot be empty or contain only special characters')
    }

    return {
        email,
        name: regexName
    }
}

const checkBalance = (params) => {
    const { balance } = params

    if (typeof(balance) !== 'number') {
        return { ok: false }
    }

    return { ok: true, balance }
    
}

module.exports = { validateUserData, checkBalance };

