const Nodemailer = require('./service/nodemailer')




let email = "marcos97britos@gmail.com"
const data = {
    name : 'Marcos',
    subject : '¡Gracias por registrarte con nosotros!',
    url : 'http://mercadolibre.com'
};


const sendEmail = new Nodemailer(data, email,'aaaaa')
sendEmail.sendEmail()
