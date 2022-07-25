let Contact = require('../database/models/contact')
let httpStatus = require('../helpers/httpStatus')



class ContactController{
    static async createContact(req, res){
        let { company, address, email, phone, hours, addressLinkMaps } = req.body

        let contact = new Contact({
            company,
            address,
            email,
            phone,
            hours,
            addressLinkMaps
        })

        try {
            await contact.save()
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }
        res.status(httpStatus.CREATED).json({
            msg: 'contact succesfelly created',
            contact
        })
    }

    static async getContact(req, res){
        let contact;
        try {
            contact = await Contact.find({})
        } catch (error) {
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: error
            })
        }
        res.status(httpStatus.OK).json({
            contact
        })
    }
}


module.exports = ContactController