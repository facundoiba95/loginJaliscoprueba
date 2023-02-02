const UserModel = require('./models/Users')


exports.createUser = (usuario,contraseña) => {
    UserModel.create({
        username: usuario,
        password: contraseña
    })
}