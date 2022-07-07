let User = require('../database/models/user')
let httpStatus = require('../helpers/httpStatus')
let jwt = require('../helpers/generateToken')
let bcryptjs = require('bcryptjs')

class AuthController {
    static async register(req, res) {
        let { name, surname, password, email } = req.body
        let user = new User({
            name,
            surname,
            password : bcryptjs.hashSync(password, 10),
            email,
            avatar: 'default_img.png',
            admin: false
        })

        try {
            await user.save()
        } catch (error) {
            if (error.code === 11000) {
                
            }
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }

        let token = jwt.tokenSign(user)
        res.status(httpStatus.CREATED).json({
            msg: 'user succesfelly created',
            token,
            data: user
        })
    }

    static async login (req, res){
        let {email , password} = req.body

        let user = null
        try {
            user = await User.findOne({ email : email})
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }


        if (user) {
            if (!bcryptjs.compareSync(password, user.password)) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    msg : 'credentials incorrect'
                })
            }

            let token = jwt.tokenSign(user)

            return res.status(httpStatus.OK).json({
                msg : 'successful login',
                token : token,
                data: user
            })
        }
        res.status(httpStatus.NOT_FOUND).json({
            msg : 'User not found'
        })

        
    }
}


module.exports = AuthController