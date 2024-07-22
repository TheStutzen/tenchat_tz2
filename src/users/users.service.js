const db = require('../../database/db');
const { validateUserData, checkBalance } = require('../../utils/validator')

const createUser = async (userData) => {

    const checkArgs = validateUserData(userData)

    const emailCheck = await db.User.findOne({ where: { email: checkArgs.email } });

    if (emailCheck) {
        return { message: 'Почта уже занята'}
    }

    const newUser = await db.User.create(checkArgs);

    return newUser;
};

const getUserById = async (id) => {
    const user = await db.User.findByPk(id);

    if (!user) {
        return { message: 'Пользователь не найден'}
    }

    return user;
};

const updateUser = async (id, userData) => {
    const user = await db.User.findByPk(id);

    if (!user) {
        return { message: 'Пользователь не найден'}
    }

    await user.update(userData);
    return user;
};

const deleteUser = async (id) => {
    const user = await db.User.findByPk(id);

    if (!user) {
        return { message: 'Пользователь не найден. Либо удален'}
    }

    await user.destroy();
    return { message: 'Пользователь успешно удален' };
};


const deposit = async (id, params) => {
    const checkArgs = checkBalance(params)

    if (!checkArgs.ok) {
        return { message: 'Поле balance должно быть числом' }
    }

    const user = await db.User.findByPk(id);
    
    if (user) {
        const amount = user.balance + params.balance

        const hasUpdate = await user.update({balance: amount});

        return { message: 'Успешно пополнен баланс', balance: hasUpdate.balance }
      }

    return { message: 'Что-то пошло не так'}
};

const deduct = async (id, params) => {
    const checkArgs = checkBalance(params)

    if (!checkArgs.ok) {
        return { message: 'Поле balance должно быть числом' }
    }
    
    const user = await db.User.findByPk(id);

    if (user) {
        if (user.balance >= params.balance) {
          const deduct = user.balance - params.balance
          const hasUpdate = await user.update({ balance: deduct })
  
          return { message: 'Успешно списан баланс', balance: hasUpdate.balance }
        }
    }

    return { message: 'Списание не удалось. Деньги кончились'}

};


module.exports = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    deposit,
    deduct
};
